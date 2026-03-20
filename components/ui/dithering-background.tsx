"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/* ─────────────────────────────────────────
   Palette stops from design spec
   index 0 = transparent (skip drawing)
   index 1–4 = palette entries [R, G, B, alpha]
───────────────────────────────────────── */
const PALETTE = {
  light: [
    null,
    [197, 206, 224, 0.50] as const, // #c5cee0 silver-lavender
    [143, 163, 212, 0.62] as const, // #8fa3d4 periwinkle
    [ 74, 108, 247, 0.50] as const, // #4a6cf7 royal blue
    [ 26,  36,  71, 0.40] as const, // #1a2447 deep navy (peaks)
  ],
  dark: [
    null,
    [ 26,  36,  71, 0.75] as const, // #1a2447 base navy
    [ 45,  64, 128, 0.78] as const, // #2d4080 mid navy-blue
    [ 74, 108, 247, 0.60] as const, // #4a6cf7 royal blue
    [197, 206, 224, 0.48] as const, // #c5cee0 lavender (peaks)
  ],
} as const;

/* Bayer 4×4 ordered dither matrix (values 0–15) */
const BAYER = [
  [ 0,  8,  2, 10],
  [12,  4, 14,  6],
  [ 3, 11,  1,  9],
  [15,  7, 13,  5],
] as const;

const BLOCK = 15; // pixel cell size in px

/** 4-layer warp luminance field → 0.0–1.0 */
function fieldLum(
  col: number,
  row: number,
  cols: number,
  rows: number,
  t: number
): number {
  const nx = col / cols;
  const ny = row / rows;
  const cx = nx - 0.5;
  const cy = ny - 0.5;
  const r  = Math.sqrt(cx * cx + cy * cy);

  const v =
    Math.sin(r * 4.5  - t * 1.2)  * 0.28 +
    Math.sin((nx + ny) * 3.1 + t * 0.7) * 0.22 +
    Math.sin(ny * 2.2  - t * 0.35) * 0.18 +
    Math.sin(nx * 1.8  + t * 0.28) * 0.15 +
    0.5;

  return Math.max(0, Math.min(1, v));
}

/** Map continuous luminance → palette stop via Bayer ordered dithering */
function bayerStop(l: number, bx: number, by: number): number {
  const scaled = l * 4;
  const base   = Math.floor(scaled);
  const frac   = scaled - base;
  const thresh = BAYER[by % 4][bx % 4] / 15;
  return frac > thresh ? Math.min(base + 1, 4) : base;
}

export default function DitheringBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!canvas || !ctx) return;

      const mode = resolvedTheme === "dark" ? "dark" : "light";
      const pal  = PALETTE[mode];
      const W    = canvas.width;
      const H    = canvas.height;
      const cols = Math.ceil(W / BLOCK);
      const rows = Math.ceil(H / BLOCK);

      ctx.clearRect(0, 0, W, H);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const l    = fieldLum(col, row, cols, rows, t);
          const stop = bayerStop(l, col, row);
          if (stop === 0) continue;
          const c = pal[stop];
          if (!c) continue;
          ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${c[3]})`;
          ctx.fillRect(col * BLOCK, row * BLOCK, BLOCK, BLOCK);
        }
      }

      t += 0.022;
      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [resolvedTheme]);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* Animated dither canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position:    "fixed",
          inset:       0,
          width:       "100%",
          height:      "100%",
          zIndex:      0,
          pointerEvents: "none",
          mixBlendMode: isDark ? "screen" : "multiply",
          opacity:      isDark ? 0.50 : 0.68,
          transition:   "opacity 0.6s",
        }}
      />
      {/* Radial vignette — fades dither toward edges */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset:    0,
          zIndex:   1,
          pointerEvents: "none",
          background: isDark
            ? "radial-gradient(ellipse at center, transparent 25%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.90) 100%)"
            : "radial-gradient(ellipse at center, transparent 25%, rgba(240,242,255,0.55) 70%, rgba(240,242,255,0.90) 100%)",
          transition: "background 0.6s",
        }}
      />
    </>
  );
}
