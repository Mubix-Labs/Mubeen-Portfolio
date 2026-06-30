import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const directionOffsets = {
  up: { x: 0, y: 24 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
  none: { x: 0, y: 0 },
};

// Wraps children and fades/slides them in once they enter the viewport.
// direction: "up" | "left" | "right" | "none"
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });
  const offset = directionOffsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isVisible
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
