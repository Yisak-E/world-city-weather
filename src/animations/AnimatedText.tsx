"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";


import { useEffect, useState } from "react";

// Type definition for the props expected by the AnimatedText component.
type AnimatedTextProps = {
  text: string; // The text to be animated.
  customClassName: string;
};

/**
 * AnimatedText is a component that gradually reveals text from start to end, one character at a time.
 *
 * @param {string} text - The text to be animated.
 */
export default function AnimatedText({ text , customClassName}: AnimatedTextProps) {
  // `count` is a motion value that starts at 0 and will animate up to the length of the text.
  const count = useMotionValue(0);

  // `rounded` is a transformed motion value of `count`, rounding it to the nearest whole number.
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // `displayText` is a transformed motion value of `rounded`, slicing the text to the current count.
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  // `animationCompleted` is a state variable to keep track of whether the animation has completed.
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 10,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });

    // Returning a cleanup function to stop the animation when the component is unmounted.
    return controls.stop;
  }, []); // Empty dependency array means this useEffect will only run once, similar to `componentDidMount`.

  return (
    <p className={ animationCompleted ? "animation-completed" : ""}>
      <motion.span
          className={customClassName }
          >{displayText}
      </motion.span>
    </p>
  );
}
