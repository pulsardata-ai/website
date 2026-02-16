"use client";

import { useEffect, useRef } from "react";

export function ParticleSpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = 120;
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      angle: (i / particleCount) * Math.PI * 6,
      radius: (i / particleCount) * 200 + 20,
      speed: 0.002 + Math.random() * 0.003,
      size: 1 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.5,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particles.forEach((p) => {
        p.angle += p.speed;
        const r = p.radius + Math.sin(time * 0.5 + p.angle) * 20;
        const x = cx + Math.cos(p.angle + time * 0.1) * r;
        const y = cy + Math.sin(p.angle + time * 0.1) * r;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 65, ${p.opacity * (0.5 + 0.5 * Math.sin(time + p.angle))})`;
        ctx.fill();
      });

      time += 0.016;
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      aria-hidden="true"
    />
  );
}
