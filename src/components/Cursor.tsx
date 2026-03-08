"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 500, damping: 28, mass: 0.5 });
  const dotY = useSpring(y, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovered(!!target.closest("a, button"));
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] rounded-full bg-violet-400"
      style={{
        x: dotX,
        y: dotY,
        translateX: "-50%",
        translateY: "-50%",
        width: 5,
        height: 5,
      }}
      animate={{ scale: hovered ? 2.4 : 1, opacity: hovered ? 0.35 : 0.9 }}
      transition={{ duration: 0.15 }}
    />
  );
}
