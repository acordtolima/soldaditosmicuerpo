import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Eraser, c as ChevronLeft, i as PaintBucket, l as Brush, o as Download, r as RotateCcw, s as ChevronRight, t as Undo2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CmLAkjUi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Wall-bounded flood fill. `walls` is 1 on ink. Paints every pixel inside the region. */
function floodFill(data, walls, w, h, x, y, r, g, b) {
	if (x < 0 || y < 0 || x >= w || y >= h) return false;
	if (walls[y * w + x]) return false;
	const visited = new Uint8Array(w * h);
	const stack = [x, y];
	while (stack.length) {
		const cy = stack.pop();
		let cx = stack.pop();
		const row = cy * w;
		if (visited[row + cx]) continue;
		while (cx > 0 && !walls[row + cx - 1] && !visited[row + cx - 1]) cx -= 1;
		let spanAbove = false;
		let spanBelow = false;
		for (; cx < w && !walls[row + cx]; cx += 1) {
			const here = row + cx;
			visited[here] = 1;
			const o = here * 4;
			data[o] = r;
			data[o + 1] = g;
			data[o + 2] = b;
			data[o + 3] = 255;
			if (cy > 0) {
				const up = here - w;
				if (!walls[up] && !visited[up]) {
					if (!spanAbove) {
						stack.push(cx, cy - 1);
						spanAbove = true;
					}
				} else spanAbove = false;
			}
			if (cy + 1 < h) {
				const down = here + w;
				if (!walls[down] && !visited[down]) {
					if (!spanBelow) {
						stack.push(cx, cy + 1);
						spanBelow = true;
					}
				} else spanBelow = false;
			}
		}
	}
	return true;
}
function hexToRgb(hex) {
	const n = hex.replace("#", "");
	return {
		r: Number.parseInt(n.slice(0, 2), 16),
		g: Number.parseInt(n.slice(2, 4), 16),
		b: Number.parseInt(n.slice(4, 6), 16)
	};
}
var STORY_TITLE = "Los soldaditos de mi cuerpo";
var PAGES = [
	{
		id: "portada",
		kicker: "Portada",
		title: "Los soldaditos de mi cuerpo",
		text: "La doctora Esperanza abre su cuaderno y sonríe. Trae su bata azul, su listón rosa y un secreto saludable: dentro de nuestro cuerpo viven soldaditos valientes, listos para cuidar el castillo que somos.",
		src: "/pages/01-portada.png",
		alt: "La doctora Esperanza saluda con un libro, rodeada de soldaditos, un castillo y una canasta de frutas."
	},
	{
		id: "castillo",
		kicker: "Página 1",
		title: "Un castillo maravilloso",
		text: "Nuestro cuerpo es como un castillo maravilloso y fuerte. Para mantenerlo feliz y lleno de energía, jugamos, comemos frutas de colores y dormimos bien por las noches. ¡Así cuidamos nuestro tesoro más grande!",
		src: "/pages/02-castillo.png",
		alt: "Esperanza señala un castillo. Unos niños juegan, hay frutas y alguien duerme bajo la luna."
	},
	{
		id: "virus",
		kicker: "Página 2",
		title: "Unos intrusos diminutos",
		text: "A veces, en el aire o en las cosas que tocamos, viven unos pequeños intrusos llamados virus. Son tan diminutos que no podemos verlos a simple vista, pero a algunos les gusta entrar a nuestro cuerpo a causar travesuras.",
		src: "/pages/03-virus.png",
		alt: "Esperanza mira con una lupa grande a virus pequeñitos y juguetones."
	},
	{
		id: "vph",
		kicker: "Página 3",
		title: "El virus que se esconde",
		text: "Hay un virus travieso llamado VPH. A este virus le gusta esconderse muy bien y, si entra al cuerpo, con el paso de los años puede hacer que algunas de nuestras células se enfermen o se sientan muy cansadas.",
		src: "/pages/04-vph.png",
		alt: "Esperanza acompaña a una célula dormida mientras un virus pequeño se asoma detrás."
	},
	{
		id: "entrenamiento",
		kicker: "Página 4",
		title: "Un superpoder llamado vacuna",
		text: "¡Pero no hay nada que temer! Los científicos, que son como magos de la salud, crearon un superpoder para defendernos. Se llama la vacuna, y es un entrenamiento especial que se les da a los soldaditos que nos defienden en nuestro cuerpo.",
		src: "/pages/05-entrenamiento.png",
		alt: "Esperanza entrena a unos soldaditos con escudos. Detrás, científicos con gorros de mago sonríen."
	},
	{
		id: "escudo",
		kicker: "Página 5",
		title: "Soldaditos en el brazo",
		text: "Cuando somos niños, recibimos esos pequeños soldaditos en el brazo. Al principio puede asustar un poquito, pero gracias a ellos, nuestro cuerpo aprende a identificar al virus VPH de inmediato y construye un escudo invisible para que nunca nos haga daño.",
		src: "/pages/06-escudo.png",
		alt: "Esperanza pone una vacuna en el brazo de un niño. Su familia está cerca y unos soldaditos forman un escudo."
	},
	{
		id: "ninas-ninos",
		kicker: "Página 6",
		title: "Niñas y niños, de 9 a 17",
		text: "La doctora Esperanza explica que tanto niñas como niños podemos vacunarnos gratis si estamos entre los 9 y los 17 años. También cuenta que la vacuna ayuda a prevenir una enfermedad llamada cáncer.",
		src: "/pages/07-ninas-ninos.png",
		alt: "Esperanza está entre una niña y un niño con curitas en forma de corazón y mochilas."
	},
	{
		id: "aventura",
		kicker: "Página 7",
		title: "El superpoder más grande",
		text: "Ir al médico a revisarnos y tener nuestras vacunas al día es la mejor forma de crecer fuertes, sanos y listos para cualquier aventura. ¡Cuidar de nosotros es el superpoder más grande!",
		src: "/pages/08-aventura.png",
		alt: "Esperanza se despide desde la puerta. Dos niños corren al parque con soldaditos en los hombros."
	}
];
var CRAYONS = [
	{
		id: "rosa",
		name: "Rosa listón",
		hex: "#E25686"
	},
	{
		id: "azul",
		name: "Azul bata",
		hex: "#2C6BBE"
	},
	{
		id: "celeste",
		name: "Celeste",
		hex: "#79C7E8"
	},
	{
		id: "verde",
		name: "Verde",
		hex: "#2F8F55"
	},
	{
		id: "lima",
		name: "Lima",
		hex: "#A8C95A"
	},
	{
		id: "amarillo",
		name: "Amarillo",
		hex: "#F0C14A"
	},
	{
		id: "naranja",
		name: "Naranja",
		hex: "#EF8A38"
	},
	{
		id: "rojo",
		name: "Rojo",
		hex: "#D24B4B"
	},
	{
		id: "morado",
		name: "Morado",
		hex: "#7B61C9"
	},
	{
		id: "cafe",
		name: "Café",
		hex: "#8A5A38"
	},
	{
		id: "durazno",
		name: "Durazno",
		hex: "#F3C5A4"
	},
	{
		id: "tinta",
		name: "Tinta",
		hex: "#243044"
	}
];
var STORAGE_KEY = "soldaditos-esperanza-v1";
var BRUSH_SIZES = [
	{
		id: "fino",
		label: "Fino",
		css: 8
	},
	{
		id: "medio",
		label: "Medio",
		css: 16
	},
	{
		id: "grueso",
		label: "Grueso",
		css: 30
	}
];
function loadSave() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return {};
		const data = JSON.parse(raw);
		return data && typeof data === "object" ? data : {};
	} catch {
		return {};
	}
}
function wrapLines(ctx, text, maxWidth) {
	const words = text.split(" ");
	const lines = [];
	let line = "";
	for (const word of words) {
		const test = line ? `${line} ${word}` : word;
		if (ctx.measureText(test).width > maxWidth && line) {
			lines.push(line);
			line = word;
		} else line = test;
	}
	if (line) lines.push(line);
	return lines;
}
function ColoringBook() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [tool, setTool] = (0, import_react.useState)("bucket");
	const [color, setColor] = (0, import_react.useState)(CRAYONS[0].hex);
	const [brush, setBrush] = (0, import_react.useState)("medio");
	const [ratio, setRatio] = (0, import_react.useState)(.75);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [canUndo, setCanUndo] = (0, import_react.useState)(false);
	const [painted, setPainted] = (0, import_react.useState)({});
	const colorRef = (0, import_react.useRef)(null);
	const wallsRef = (0, import_react.useRef)(null);
	const sizeRef = (0, import_react.useRef)({
		w: 0,
		h: 0
	});
	const historyRef = (0, import_react.useRef)([]);
	const savesRef = (0, import_react.useRef)({});
	const indexRef = (0, import_react.useRef)(0);
	const colorHexRef = (0, import_react.useRef)(color);
	const dirtyRef = (0, import_react.useRef)(false);
	const genRef = (0, import_react.useRef)(0);
	const drawingRef = (0, import_react.useRef)(false);
	const lastRef = (0, import_react.useRef)(null);
	const saveTimer = (0, import_react.useRef)(0);
	const page = PAGES[index] ?? PAGES[0];
	const crayon = CRAYONS.find((item) => item.hex === color) ?? CRAYONS[0];
	(0, import_react.useLayoutEffect)(() => {
		const saved = loadSave();
		if (saved.art) savesRef.current = saved.art;
		if (typeof saved.color === "string" && CRAYONS.some((item) => item.hex === saved.color)) setColor(saved.color);
		if (typeof saved.page === "number" && saved.page >= 0 && saved.page < PAGES.length) setIndex(saved.page);
		const flags = {};
		for (const id of Object.keys(savesRef.current)) flags[id] = true;
		setPainted(flags);
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		indexRef.current = index;
		colorHexRef.current = color;
	}, [index, color]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const current = PAGES[index];
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
			sizeRef.current = {
				w,
				h
			};
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
			for (let i = 0; i < walls.length; i += 1) if (pixels[i * 4 + 3] > 36) walls[i] = 1;
			wallsRef.current = walls;
			const saved = savesRef.current[current.id];
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
	}, [index, ready]);
	function persist() {
		const canvas = colorRef.current;
		const id = PAGES[indexRef.current]?.id;
		if (!canvas || !id || sizeRef.current.w === 0) return;
		try {
			const url = canvas.toDataURL("image/jpeg", .86);
			savesRef.current[id] = url;
			const payload = {
				page: indexRef.current,
				color: colorHexRef.current,
				art: savesRef.current
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
		} catch {
			try {
				const payload = {
					page: indexRef.current,
					color: colorHexRef.current
				};
				localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
			} catch {}
		}
	}
	function scheduleSave() {
		window.clearTimeout(saveTimer.current);
		saveTimer.current = window.setTimeout(persist, 280);
	}
	function ctxOf() {
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
	function markPainted(id) {
		dirtyRef.current = true;
		setPainted((prev) => prev[id] ? prev : {
			...prev,
			[id]: true
		});
	}
	function toBitmap(event) {
		const canvas = colorRef.current;
		if (!canvas) return null;
		const rect = canvas.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) return null;
		const x = Math.round((event.clientX - rect.left) * canvas.width / rect.width);
		const y = Math.round((event.clientY - rect.top) * canvas.height / rect.height);
		if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return null;
		return {
			x,
			y
		};
	}
	function brushRadius(canvas) {
		const rect = canvas.getBoundingClientRect();
		const css = BRUSH_SIZES.find((item) => item.id === brush)?.css ?? 16;
		const scale = rect.width > 0 ? canvas.width / rect.width : 1;
		return Math.max(2, css * scale * .55);
	}
	function stamp(ctx, x, y, radius) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.fill();
	}
	function strokeTo(ctx, from, to, radius) {
		const dist = Math.hypot(to.x - from.x, to.y - from.y);
		const steps = Math.max(1, Math.ceil(dist / Math.max(1, radius / 3)));
		for (let i = 0; i <= steps; i += 1) {
			const t = i / steps;
			stamp(ctx, from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t, radius);
		}
	}
	function onPointerDown(event) {
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
	function onPointerMove(event) {
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
		const ctx = ctxOf();
		const { w, h } = sizeRef.current;
		if (!ctx || w === 0) return;
		pushHistory();
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, w, h);
		setPainted((prev) => ({
			...prev,
			[page.id]: false
		}));
		scheduleSave();
	}
	function go(next) {
		const clamped = Math.max(0, Math.min(PAGES.length - 1, next));
		if (clamped === index) return;
		window.clearTimeout(saveTimer.current);
		persist();
		setIndex(clamped);
	}
	async function download() {
		const canvas = colorRef.current;
		if (!canvas || sizeRef.current.w === 0) return;
		const line = new Image();
		line.src = page.src;
		await line.decode();
		try {
			await document.fonts.load("700 42px Fraunces");
			await document.fonts.load("700 28px Nunito");
		} catch {}
		const pad = 48;
		const scratch = document.createElement("canvas").getContext("2d");
		if (!scratch) return;
		scratch.font = "700 28px Nunito, sans-serif";
		const storyLines = wrapLines(scratch, page.text, canvas.width);
		const titleY = canvas.height + 100;
		const storyStart = titleY + 52;
		const creditY = storyStart + storyLines.length * 36 + 28;
		const out = document.createElement("canvas");
		out.width = canvas.width + 96;
		out.height = creditY + 48;
		const ctx = out.getContext("2d");
		if (!ctx) return;
		ctx.fillStyle = "#f6f1e4";
		ctx.fillRect(0, 0, out.width, out.height);
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(38, 28, canvas.width + 20, canvas.height + 20);
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
		link.download = `soldaditos-${page.id}.png`;
		link.click();
	}
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const target = event.target;
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
	}, []);
	const cursor = tool === "bucket" ? "cursor-cell" : "cursor-crosshair";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col overflow-x-hidden bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "safe-top no-print mx-auto flex w-full max-w-6xl items-center gap-3 px-4 pb-2 sm:px-6 sm:pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full bg-ink text-ribbon",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RibbonMark, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-tight font-semibold text-ink sm:text-2xl",
							children: STORY_TITLE
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-bold text-ink-soft",
							children: "Cuento para colorear · doctora Esperanza"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "shrink-0 text-sm font-extrabold text-ink tabular-nums",
						children: [index + 1, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink-soft",
							children: [" / ", PAGES.length]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "no-print mx-auto flex w-full max-w-6xl items-center gap-1 px-2 sm:px-6",
				"aria-label": "Páginas del cuento",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(index - 1),
						disabled: index === 0,
						"aria-label": "Página anterior",
						className: "inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1 rounded-full bg-sand px-3 text-sm font-extrabold text-ink disabled:opacity-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Anterior"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 flex-1 justify-center",
						children: PAGES.map((item, dot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": item.title,
							"aria-current": dot === index ? "page" : void 0,
							onClick: () => go(dot),
							className: "grid h-11 min-w-0 flex-1 place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full " + (dot === index ? "bg-ribbon" : painted[item.id] ? "bg-ink" : "bg-sand") })
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(index + 1),
						disabled: index === PAGES.length - 1,
						"aria-label": "Página siguiente",
						className: "inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1 rounded-full bg-ink px-3 text-sm font-extrabold text-paper disabled:opacity-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Siguiente"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid w-full min-w-0 max-w-6xl content-start items-start gap-3 px-3 py-2 sm:px-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-6 lg:py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "order-2 min-w-0 lg:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-extrabold tracking-widest text-ribbon-ink uppercase",
							children: page.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-2xl leading-tight font-semibold text-ink sm:text-3xl",
							children: page.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed font-semibold text-ink sm:text-base",
							children: page.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs font-bold text-ink-soft sm:text-sm",
							children: "Liga Contra el Cáncer · Zonal Tolima"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "order-1 min-w-0 lg:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "print-sheet -mx-3 sm:mx-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sheet-frame relative overflow-hidden rounded-xl bg-sheet shadow-md",
							style: { "--sheet": String(ratio) },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
								ref: colorRef,
								"aria-label": `Lámina para colorear: ${page.alt}`,
								className: `absolute inset-0 h-full w-full touch-none bg-sheet ${cursor}`,
								onPointerDown,
								onPointerMove,
								onPointerUp: endStroke,
								onPointerCancel: endStroke,
								onContextMenu: (event) => event.preventDefault()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: page.src,
								alt: "",
								draggable: false,
								className: "pointer-events-none absolute inset-0 h-full w-full select-none"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "sr-only",
							children: page.alt
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dock no-print sticky bottom-0 z-20 mt-auto border-t border-sand bg-paper px-4 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex w-full min-w-0 max-w-6xl gap-2 overflow-x-auto pb-2",
						role: "listbox",
						"aria-label": "Crayones",
						children: CRAYONS.map((item) => {
							const selected = item.hex === color;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "option",
								"aria-selected": selected,
								"aria-label": item.name,
								title: item.name,
								onClick: () => {
									setColor(item.hex);
									if (tool === "eraser") setTool("brush");
								},
								className: "relative size-11 shrink-0 rounded-full border-2 border-sheet shadow-sm " + (selected ? "ring-2 ring-ribbon ring-offset-2 ring-offset-paper" : ""),
								style: { backgroundColor: item.hex }
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mb-2 max-w-6xl text-sm font-extrabold text-ink",
						children: [crayon.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-ink-soft",
							children: [" ", "· toca un espacio en blanco. Si se sale, deshaz."]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex w-full min-w-0 max-w-6xl gap-2 overflow-x-auto pb-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolButton, {
								active: tool === "bucket",
								label: "Balde",
								onClick: () => setTool("bucket"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaintBucket, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolButton, {
								active: tool === "brush",
								label: "Pincel",
								onClick: () => setTool("brush"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brush, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolButton, {
								active: tool === "eraser",
								label: "Goma",
								onClick: () => setTool("eraser"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eraser, { className: "size-4" })
							}),
							tool !== "bucket" && BRUSH_SIZES.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setBrush(size.id),
								className: "min-h-11 shrink-0 rounded-full px-3 text-sm font-extrabold " + (brush === size.id ? "bg-ink text-paper" : "bg-sand text-ink"),
								children: size.label
							}, size.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: undo,
								disabled: !canUndo,
								className: "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-sand px-3 text-sm font-extrabold text-ink disabled:opacity-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-4" }), "Deshacer"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: clearPage,
								className: "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-sand px-3 text-sm font-extrabold text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Borrar"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void download(),
								className: "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-ribbon-ink px-3 text-sm font-extrabold text-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Guardar"]
							})
						]
					})
				]
			})
		]
	});
}
function ToolButton({ active, label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-extrabold " + (active ? "bg-ink text-paper" : "bg-sand text-ink"),
		children: [children, label]
	});
}
function RibbonMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: "size-6",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 18.5c4.2-3.2 7-6.2 7-9.1A4.4 4.4 0 0 0 16 6a4.4 4.4 0 0 0-7 3.4c0 2.9 2.8 5.9 7 9.1Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12.2 17.6 8 26.5l4.6-1.6 1.6 3.3 2.2-8.4",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M19.8 17.6 24 26.5l-4.6-1.6-1.6 3.3-2.2-8.4",
				fill: "currentColor"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColoringBook, {});
}
//#endregion
export { Home as component };
