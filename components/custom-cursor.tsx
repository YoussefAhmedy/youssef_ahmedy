'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let rafId: number;
    const loop = () => {
      if (dotRef.current) {
        // No zoom correction needed — clientX/clientY are already in the
        // same zoomed CSS coordinate space as position:fixed elements.
        // +16 offset aligns the dot with the visual centre of the 32×32
        // sword cursor sprite (whose hotspot is at 0,0 / top-left).
        const x = pos.current.x + 16;
        const y = pos.current.y + 16;
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{ willChange: 'transform', marginLeft: '-6px', marginTop: '-6px' }}
    >
      <div className="w-3 h-3 bg-blue-500 rounded-full" />
    </div>
  );
};

export default CustomCursor;