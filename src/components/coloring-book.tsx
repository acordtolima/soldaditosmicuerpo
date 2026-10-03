import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import {
  Brush,
  ChevronLeft,
  ChevronRight,
  Download,
  Eraser,
  PaintBucket,
  RotateCcw,
  Undo2,
} from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { floodFill, hexToRgb } from "@/lib/flood-fill";
import { CRAYONS, LEGACY_STORAGE_KEY, STORAGE_KEY, STORIES } from "@/lib/story";

type Tool = "bucket" | "brush" | "eraser";
type SaveFile = {
  story?: string;
  page?: number;
  pages?: Record<string, number>;
  color?: string;
  art?: Record<string, string>;
};

const BRUSH_SIZES = [
  { id: "fino", label: "Fino", css: 8 },
  { id: "medio", label: "Medio", css: 16 },
  { id: "grueso", label: "Grueso", css: 30 },
] as const;

function loadSave(): SaveFile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw) as SaveFile;
    if (!data || typeof data !== "object") return {};
    const art: Record<string, string> = {};
    if (data.art) {
      for (const [key, value] of Object.entries(data.art)) {
        if (typeof value !== "string") continue;
        art[key.includes(":") ? key : `soldaditos:${key}`] = value;
      }
    }
    const pages = { ...(data.pages ?? {}) };
    if (typeof data.page === "number" && pages.soldaditos == null && !data.story) {
      pages.soldaditos = data.page;
    }
    return { ...data, art, pages };
  } catch {
    return {};
  }
}

function flagsFrom(art: Record<string, string>): Record<string, boolean> {
  const flags: Record<string, boolean> = {};
  for (const key of Object.keys(art)) flags[key] = true;
  return flags;
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export function ColoringBook({ storyId = null }: { storyId?: string | null }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [tool, setTool] = useState<Tool>("bucket");
  const [color, setColor] = useState(CRAYONS[0].hex);
  const [brush, setBrush] = useState<(typeof BRUSH_SIZES)[number]["id"]>("medio");
  const [ratio, setRatio] = useState(0.75);
  const [ready, setReady] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [painted, setPainted] = useState<Record<string, boolean>>({});

  const colorRef = useRef<HTMLCanvasElement>(null);
  const wallsRef = useRef<Uint8Array | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const historyRef = useRef<ImageData[]>([]);
  const savesRef = useRef<Record<string, string>>({});
  const pagesRef = useRef<Record<string, number>>({});
  const storyRef = useRef<string | null>(null);
  const indexRef = useRef(0);
  const colorHexRef = useRef(color);
  const dirtyRef = useRef(false);
  const genRef = useRef(0);
  const drawingRef = useRef(false);
  const lastRef = useRef<{ x: number; y: number } | null>(null);
  const saveTimer = useRef<number>(0);

  const story = STORIES.find((item) => item.id === storyId) ?? null;
  const pages = story?.pages ?? [];
  const page = pages[index] ?? pages[0];
  const crayon = CRAYONS.find((item) => item.hex === color) ?? CRAYONS[0];

  useLayoutEffect(() => {
    const saved = loadSave();
    if (saved.art) savesRef.current = saved.art;
    if (saved.pages) pagesRef.current = saved.pages;
    if (typeof saved.color === "string" && CRAYONS.some((item) => item.hex === saved.color)) {
      setColor(saved.color);
    }
    if (storyId) {
      const length = STORIES.find((item) => item.id === storyId)?.pages.length ?? 1;
      const savedIndex = saved.pages?.[storyId] ?? 0;
      setIndex(Math.max(0, Math.min(length - 1, savedIndex)));
    }
    setPainted(flagsFrom(savesRef.current));
    setReady(true);
  }, [storyId]);

  useEffect(() => {
    storyRef.current = storyId;
    indexRef.current = index;
    colorHexRef.current = color;
  }, [storyId, index, color]);

  useEffect(() => {
    if (!ready || !storyId) return;
    const currentStory = STORIES.find((item) => item.id === storyId);
    const current = currentStory?.pages[index];
    if (!current || !currentStory) return;
    const gen = ++genRef.current;
    dirtyRef.current = false;
    historyRef.current = [];
    setCanUndo(false);
    wallsRef.current = null;
    const live = colorRef.current;
    const liveCtx = live?.getContext("2d");
    if (live && liveCtx && live.width > 0) {
      liveCtx.fillStyle = "#ffffff";
      liveCtx.fillRect(0, 0, live.width, live.height);
    }

    const img = new Image();
    img.onload = () => {
      if (gen !== genRef.current) return;
      const canvas = colorRef.current;
      if (!canvas) return;
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      canvas.width = w;
      canvas.height = h;
      sizeRef.current = { w, h };
      setRatio(w / h);
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);

      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const offCtx = off.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;
      offCtx.drawImage(img, 0, 0, w, h);
      const pixels = offCtx.getImageData(0, 0, w, h).data;
      const walls = new Uint8Array(w * h);
      for (let i = 0; i < walls.length; i += 1) {
        if (pixels[i * 4 + 3] > 36) walls[i] = 1;
      }
      wallsRef.current = walls;

      const saved = savesRef.current[`${currentStory.id}:${current.id}`];
      if (!saved) return;
      const paint = new Image();
      paint.onload = () => {
        if (gen !== genRef.current || dirtyRef.current) return;
        ctx.drawImage(paint, 0, 0, w, h);
      };
      paint.src = saved;
    };
    img.src = current.src;

    return () => {
      window.clearTimeout(saveTimer.current);
      persist();
    };
    // persist is stable enough for page switches; index is the trigger
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, ready, storyId]);

  function persist() {
    const canvas = colorRef.current;
    const storyKey = storyRef.current;
    const id = storyKey ? STORIES.find((item) => item.id === storyKey)?.pages[indexRef.current]?.id : undefined;
    if (!canvas || !storyKey || !id || sizeRef.current.w === 0) return;
    pagesRef.current[storyKey] = indexRef.current;
    try {
      const url = canvas.toDataURL("image/jpeg", 0.86);
      savesRef.current[`${storyKey}:${id}`] = url;
      const payload: SaveFile = {
        story: storyKey,
        page: indexRef.current,
        pages: pagesRef.current,
        color: colorHexRef.current,
        art: savesRef.current,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      try {
        const payload: SaveFile = {
          story: storyKey,
          page: indexRef.current,
          pages: pagesRef.current,
          color: colorHexRef.current,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch {
        /* storage full — coloring still works this visit */
      }
    }
  }

  function scheduleSave() {
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(persist, 280);
  }

  function ctxOf(): CanvasRenderingContext2D | null {
    const canvas = colorRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d", { willReadFrequently: true });
  }

  function pushHistory() {
    const ctx = ctxOf();
    const { w, h } = sizeRef.current;
    if (!ctx || w === 0) return;
    historyRef.current.push(ctx.getImageData(0, 0, w, h));
    if (historyRef.current.length > 10) historyRef.current.shift();
    setCanUndo(true);
  }

  function markPainted(id: string) {
    dirtyRef.current = true;
    const key = storyRef.current ? `${storyRef.current}:${id}` : id;
    setPainted((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  }

  function toBitmap(event: PointerEvent<HTMLCanvasElement>) {
    const canvas = colorRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const x = Math.round(((event.clientX - rect.left) * canvas.width) / rect.width);
    const y = Math.round(((event.clientY - rect.top) * canvas.height) / rect.height);
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return null;
    return { x, y };
  }

  function brushRadius(canvas: HTMLCanvasElement) {
    const rect = canvas.getBoundingClientRect();
    const css = BRUSH_SIZES.find((item) => item.id === brush)?.css ?? 16;
    const scale = rect.width > 0 ? canvas.width / rect.width : 1;
    return Math.max(2, css * scale * 0.55);
  }

  function stamp(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function strokeTo(
    ctx: CanvasRenderingContext2D,
    from: { x: number; y: number },
    to: { x: number; y: number },
    radius: number,
  ) {
    const dist = Math.hypot(to.x - from.x, to.y - from.y);
    const steps = Math.max(1, Math.ceil(dist / Math.max(1, radius / 3)));
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      stamp(ctx, from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t, radius);
    }
  }

  function onPointerDown(event: PointerEvent<HTMLCanvasElement>) {
    if (!wallsRef.current) return;
    const point = toBitmap(event);
    if (!point) return;
    const canvas = colorRef.current;
    const ctx = ctxOf();
    const { w, h } = sizeRef.current;
    if (!canvas || !ctx || w === 0) return;

    if (tool === "bucket") {
      if (wallsRef.current[point.y * w + point.x]) return;
      pushHistory();
      const image = ctx.getImageData(0, 0, w, h);
      const rgb = hexToRgb(color);
      floodFill(image.data, wallsRef.current, w, h, point.x, point.y, rgb.r, rgb.g, rgb.b);
      ctx.putImageData(image, 0, 0);
      markPainted(page.id);
      scheduleSave();
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    drawingRef.current = true;
    lastRef.current = point;
    pushHistory();
    ctx.fillStyle = tool === "eraser" ? "#ffffff" : color;
    stamp(ctx, point.x, point.y, brushRadius(canvas));
    markPainted(page.id);
  }

  function onPointerMove(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current || tool === "bucket") return;
    const point = toBitmap(event);
    const canvas = colorRef.current;
    const ctx = ctxOf();
    const last = lastRef.current;
    if (!point || !canvas || !ctx || !last) return;
    ctx.fillStyle = tool === "eraser" ? "#ffffff" : color;
    strokeTo(ctx, last, point, brushRadius(canvas));
    lastRef.current = point;
  }

  function endStroke() {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastRef.current = null;
    scheduleSave();
  }

  function undo() {
    const ctx = ctxOf();
    const prev = historyRef.current.pop();
    if (!ctx || !prev) return;
    ctx.putImageData(prev, 0, 0);
    setCanUndo(historyRef.current.length > 0);
    scheduleSave();
  }

  function clearPage() {
    if (!page || !storyId) return;
    const ctx = ctxOf();
    const { w, h } = sizeRef.current;
    if (!ctx || w === 0) return;
    pushHistory();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    setPainted((prev) => ({ ...prev, [`${storyId}:${page.id}`]: false }));
    scheduleSave();
  }

  function go(next: number) {
    const clamped = Math.max(0, Math.min(pages.length - 1, next));
    if (clamped === index) return;
    window.clearTimeout(saveTimer.current);
    persist();
    setIndex(clamped);
  }

  async function download() {
    if (!page || !storyId) return;
    const canvas = colorRef.current;
    if (!canvas || sizeRef.current.w === 0) return;
    const line = new Image();
    line.src = page.src;
    await line.decode();
    try {
      await document.fonts.load("700 42px Fraunces");
      await document.fonts.load("700 28px Nunito");
    } catch {
      /* system fonts still draw the caption */
    }

    const pad = 48;
    const scratch = document.createElement("canvas").getContext("2d");
    if (!scratch) return;
    scratch.font = "700 28px Nunito, sans-serif";
    const storyLines = wrapLines(scratch, page.text, canvas.width);
    const titleY = canvas.height + 100;
    const storyStart = titleY + 52;
    const creditY = storyStart + storyLines.length * 36 + 28;
    const out = document.createElement("canvas");
    out.width = canvas.width + pad * 2;
    out.height = creditY + 48;
    const ctx = out.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#f6f1e4";
    ctx.fillRect(0, 0, out.width, out.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(pad - 10, 28, canvas.width + 20, canvas.height + 20);
    ctx.drawImage(canvas, pad, 38);
    ctx.drawImage(line, pad, 38, canvas.width, canvas.height);
    ctx.fillStyle = "#1e3a5f";
    ctx.font = "700 40px Fraunces, Georgia, serif";
    ctx.fillText(page.title, pad, titleY);
    ctx.font = "700 26px Nunito, sans-serif";
    storyLines.forEach((lineText, i) => {
      ctx.fillText(lineText, pad, storyStart + i * 36);
    });
    ctx.fillStyle = "#4d6482";
    ctx.font = "700 22px Nunito, sans-serif";
    ctx.fillText("Dra. Esperanza · Liga Contra el Cáncer, Zonal Tolima", pad, creditY);
    const link = document.createElement("a");
    link.href = out.toDataURL("image/png");
    link.download = `${storyId}-${page.id}.png`;
    link.click();
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key === "ArrowRight") go(indexRef.current + 1);
      if (event.key === "ArrowLeft") go(indexRef.current - 1);
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        undo();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // go/undo close over latest canvas refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeStory() {
    window.clearTimeout(saveTimer.current);
    persist();
    void navigate({ to: "/" });
  }

  const cursor = tool === "bucket" ? "cursor-cell" : "cursor-crosshair";

  if (!story || !page) {
    return <StoryLibrary painted={painted} />;
  }

  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-paper text-ink">
      <header className="safe-top no-print mx-auto flex w-full max-w-6xl items-center gap-3 px-4 pb-2 sm:px-6 sm:pt-4">
        <button
          type="button"
          onClick={closeStory}
          aria-label="Volver a los cuentos"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-ribbon"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg leading-tight font-semibold text-ink sm:text-2xl">
            {story.title}
          </p>
          <p className="truncate text-sm font-bold text-ink-soft">
            Cuento para colorear · doctora Esperanza
          </p>
        </div>
        <p className="shrink-0 text-sm font-extrabold text-ink tabular-nums">
          {index + 1}
          <span className="text-ink-soft"> / {pages.length}</span>
        </p>
      </header>

      <nav
        className="no-print mx-auto flex w-full max-w-6xl items-center gap-1 px-2 sm:px-6"
        aria-label="Páginas del cuento"
      >
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Página anterior"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1 rounded-full bg-sand px-3 text-sm font-extrabold text-ink disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
          <span className="hidden sm:inline">Anterior</span>
        </button>
        <div className="flex min-w-0 flex-1 justify-center">
          {pages.map((item, dot) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.title}
              aria-current={dot === index ? "page" : undefined}
              onClick={() => go(dot)}
              className="grid h-11 min-w-0 flex-1 place-items-center"
            >
              <span
                className={
                  "size-2.5 rounded-full " +
                  (dot === index ? "bg-ribbon" : painted[`${story.id}:${item.id}`] ? "bg-ink" : "bg-sand")
                }
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === pages.length - 1}
          aria-label="Página siguiente"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1 rounded-full bg-ink px-3 text-sm font-extrabold text-paper disabled:opacity-40"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="size-5" />
        </button>
      </nav>

      <main className="mx-auto grid w-full min-w-0 max-w-6xl content-start items-start gap-3 px-3 py-2 sm:px-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-6 lg:py-4">
        <section className="order-2 min-w-0 lg:order-1">
          <p className="text-xs font-extrabold tracking-widest text-ribbon-ink uppercase">
            {page.kicker}
          </p>
          <h1 className="mt-1 font-display text-2xl leading-tight font-semibold text-ink sm:text-3xl">
            {page.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed font-semibold text-ink sm:text-base">
            {page.text}
          </p>
          <p className="mt-2 text-xs font-bold text-ink-soft sm:text-sm">
            Liga Contra el Cáncer · Zonal Tolima
          </p>
        </section>

        <section className="order-1 min-w-0 lg:order-2">
          <figure className="print-sheet -mx-3 sm:mx-0">
            <div
              className="sheet-frame relative overflow-hidden rounded-xl bg-sheet shadow-md"
              style={{ "--sheet": String(ratio) } as CSSProperties}
            >
              <canvas
                ref={colorRef}
                aria-label={`Lámina para colorear: ${page.alt}`}
                className={`absolute inset-0 h-full w-full touch-none bg-sheet ${cursor}`}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endStroke}
                onPointerCancel={endStroke}
                onContextMenu={(event) => event.preventDefault()}
              />
              <img
                src={page.src}
                alt=""
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full select-none"
              />
            </div>
            <figcaption className="sr-only">{page.alt}</figcaption>
          </figure>
        </section>
      </main>

      <div className="dock no-print sticky bottom-0 z-20 mt-auto border-t border-sand bg-paper px-4 pt-3">
        <div
          className="mx-auto flex w-full min-w-0 max-w-6xl gap-2 overflow-x-auto pb-2"
          role="listbox"
          aria-label="Crayones"
        >
          {CRAYONS.map((item) => {
            const selected = item.hex === color;
            return (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={selected}
                aria-label={item.name}
                title={item.name}
                onClick={() => {
                  setColor(item.hex);
                  if (tool === "eraser") setTool("brush");
                }}
                className={
                  "relative size-11 shrink-0 rounded-full border-2 border-sheet shadow-sm " +
                  (selected ? "ring-2 ring-ribbon ring-offset-2 ring-offset-paper" : "")
                }
                style={{ backgroundColor: item.hex }}
              />
            );
          })}
        </div>
        <p className="mx-auto mb-2 max-w-6xl text-sm font-extrabold text-ink">
          {crayon.name}
          <span className="font-semibold text-ink-soft">
            {" "}
            · toca un espacio en blanco. Si se sale, deshaz.
          </span>
        </p>
        <div className="mx-auto flex w-full min-w-0 max-w-6xl gap-2 overflow-x-auto pb-1">
          <ToolButton active={tool === "bucket"} label="Balde" onClick={() => setTool("bucket")}>
            <PaintBucket className="size-4" />
          </ToolButton>
          <ToolButton active={tool === "brush"} label="Pincel" onClick={() => setTool("brush")}>
            <Brush className="size-4" />
          </ToolButton>
          <ToolButton active={tool === "eraser"} label="Goma" onClick={() => setTool("eraser")}>
            <Eraser className="size-4" />
          </ToolButton>
          {tool !== "bucket" &&
            BRUSH_SIZES.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => setBrush(size.id)}
                className={
                  "min-h-11 shrink-0 rounded-full px-3 text-sm font-extrabold " +
                  (brush === size.id ? "bg-ink text-paper" : "bg-sand text-ink")
                }
              >
                {size.label}
              </button>
            ))}
          <button
            type="button"
            onClick={undo}
            disabled={!canUndo}
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-sand px-3 text-sm font-extrabold text-ink disabled:opacity-40"
          >
            <Undo2 className="size-4" />
            Deshacer
          </button>
          <button
            type="button"
            onClick={clearPage}
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-sand px-3 text-sm font-extrabold text-ink"
          >
            <RotateCcw className="size-4" />
            Borrar
          </button>
          <button
            type="button"
            onClick={() => void download()}
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-ribbon-ink px-3 text-sm font-extrabold text-paper"
          >
            <Download className="size-4" />
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

function ToolButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={
        "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-extrabold " +
        (active ? "bg-ink text-paper" : "bg-sand text-ink")
      }
    >
      {children}
      {label}
    </button>
  );
}

function StoryLibrary({ painted }: { painted: Record<string, boolean> }) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="safe-top mx-auto flex w-full max-w-3xl items-center gap-3 px-4 pb-3 sm:px-6">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-ribbon" aria-hidden="true">
          <RibbonMark />
        </span>
        <div className="min-w-0">
          <h1 className="font-display text-2xl leading-tight font-semibold text-ink sm:text-3xl">
            Cuentos para colorear
          </h1>
          <p className="text-sm font-bold text-ink-soft">
            Doctora Esperanza · Liga Contra el Cáncer, Zonal Tolima
          </p>
        </div>
      </header>
      <main className="mx-auto grid w-full max-w-3xl gap-3 px-4 pb-8 sm:grid-cols-2 sm:px-6">
        {STORIES.map((story) => {
          const done = story.pages.filter((item) => painted[`${story.id}:${item.id}`]).length;
          return (
            <Link
              key={story.id}
              to="/$cuento"
              params={{ cuento: story.id }}
              className="flex min-h-28 items-stretch gap-3 rounded-2xl bg-sheet p-3 text-left shadow-sm"
            >
              <img
                src={story.pages[0]?.src}
                alt=""
                className="h-32 w-24 shrink-0 rounded-xl bg-white object-contain"
              />
              <span className="min-w-0 flex-1">
                <span className="block font-display text-xl leading-tight font-semibold text-ink">
                  {story.title}
                </span>
                <span className="mt-1 block text-sm leading-snug font-semibold text-ink-soft">
                  {story.blurb}
                </span>
                <span className="mt-2 block text-xs font-extrabold text-ribbon-ink">
                  /{story.id}
                  {" · "}
                  {story.pages.length} páginas
                  {done > 0 ? ` · ${done} con color` : ""}
                </span>
              </span>
            </Link>
          );
        })}
      </main>
    </div>
  );
}

function RibbonMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-6" fill="none" aria-hidden="true">
      <path
        d="M16 18.5c4.2-3.2 7-6.2 7-9.1A4.4 4.4 0 0 0 16 6a4.4 4.4 0 0 0-7 3.4c0 2.9 2.8 5.9 7 9.1Z"
        fill="currentColor"
      />
      <path d="M12.2 17.6 8 26.5l4.6-1.6 1.6 3.3 2.2-8.4" fill="currentColor" />
      <path d="M19.8 17.6 24 26.5l-4.6-1.6-1.6 3.3-2.2-8.4" fill="currentColor" />
    </svg>
  );
}

