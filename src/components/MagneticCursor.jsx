import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const MAGNETIC_SELECTOR = "a, button, [data-magnetic]";

export default function MagneticCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [variant, setVariant] = useState("default"); // 'default' | 'magnetic' | 'text'

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 25, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Touch detection — disable on touch devices
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    if (isTouch) return;

    const handleMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = e.target;
      // Check if hovering on text
      if (
        ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "LI"].includes(
          target.tagName,
        )
      ) {
        setVariant("text");
      } else if (target.closest(MAGNETIC_SELECTOR)) {
        setVariant("magnetic");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isTouch, dotX, dotY]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot — fast, follows mouse 1:1 */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: variant === "text" ? 0 : 1,
        }}
        animate={{
          scale: variant === "magnetic" ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Ring — slow, lagging behind */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-fg-primary pointer-events-none z-[99] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: variant === "magnetic" ? 1.5 : 1,
          opacity: variant === "text" ? 0 : 0.5,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250 }}
      />
    </>
  );
}
