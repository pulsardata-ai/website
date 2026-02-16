"use client";

import { useEffect, useRef } from "react";

export function ParticleSpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let isVisible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Pause animation when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationId) animate();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const particleCount = 80;
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      angle: (i / particleCount) * Math.PI * 6,
      radius: (i / particleCount) * 200 + 20,
      speed: 0.002 + Math.random() * 0.003,
      size: 1 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.5,
    }));

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const animate = () => {
      if (!isVisible) {
        animationId = 0;
        return;
      }

      ctx.clearRect(0, 0, w(), h());
      const cx = w() / 2;
      const cy = h() / 2;

      for (let idx = 0; idx < particles.length; idx++) {
        const p = particles[idx];
        p.angle += p.speed;
        const r = p.radius + Math.sin(time * 0.5 + p.angle) * 20;
        const x = cx + Math.cos(p.angle + time * 0.1) * r;
        const y = cy + Math.sin(p.angle + time * 0.1) * r;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 65, ${p.opacity * (0.5 + 0.5 * Math.sin(time + p.angle))})`;
        ctx.fill();
      }

      time += 0.016;
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ willChange: "auto" }}
      aria-hidden="true"
    />
  );
}
