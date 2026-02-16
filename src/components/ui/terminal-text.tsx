"use client";

import { useState, useEffect, useRef } from "react";

export function TerminalText({
  text,
  speed = 40,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    // Skip animation if reduced motion preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    indexRef.current = 0;
    setDisplayed("");
    setDone(false);

    // Type 2 characters at a time to halve the number of renders
    const interval = setInterval(() => {
      indexRef.current = Math.min(indexRef.current + 2, text.length);
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="cursor-blink" />}
    </span>
  );
}
