/** Wall-bounded flood fill. `walls` is 1 on ink. Paints every pixel inside the region. */
export function floodFill(
  data: Uint8ClampedArray,
  walls: Uint8Array,
  w: number,
  h: number,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
): boolean {
  if (x < 0 || y < 0 || x >= w || y >= h) return false;
  if (walls[y * w + x]) return false;

  const visited = new Uint8Array(w * h);
  const stack: number[] = [x, y];

  while (stack.length) {
    const cy = stack.pop() as number;
    let cx = stack.pop() as number;
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

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const n = hex.replace("#", "");
  return {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
  };
}
