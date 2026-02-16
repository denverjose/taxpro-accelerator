"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion, animate } from "framer-motion";


export default function Counter({
  decimal,
  value,
  direction = "up",
}: {
  decimal?: boolean;
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const targetValue = direction === "down" ? 0 : value;
      const animation = animate(motionValue, targetValue, {
        damping: 50,
        stiffness: 100,
        delay:0.4,
      });
      return () => animation.stop();
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    const updateValue = (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          parseFloat(latest.toFixed(decimal ? 2 : 0))
        );
      }
    };

    const unsubscribe = springValue.on("change", updateValue);

    return () => unsubscribe();
  }, [springValue, decimal]);

  return <span className="font-semibold" ref={ref} />;
}
