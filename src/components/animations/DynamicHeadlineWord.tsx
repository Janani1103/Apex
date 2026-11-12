"use client";

import React, { useState, useEffect } from "react";

const WORDS = [
  { word: "World", gradient: "from-sky-400 via-sky-300 to-cyan-300" },
  { word: "Future", gradient: "from-cyan-400 via-sky-300 to-blue-400" },
  { word: "Career", gradient: "from-sky-400 via-teal-300 to-emerald-400" },
  { word: "Horizon", gradient: "from-cyan-400 via-sky-300 to-indigo-300" },
];

export function DynamicHeadlineWord() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setIsAnimating(false);
      }, 350); // half transition duration
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const current = WORDS[index];

  return (
    <span className="inline-block relative overflow-hidden align-baseline min-w-[140px] sm:min-w-[200px] text-left">
      <span
        className={`inline-block transition-all duration-500 ease-out transform ${
          isAnimating
            ? "-translate-y-full opacity-0 scale-95"
            : "translate-y-0 opacity-100 scale-100"
        } bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent font-extrabold pb-1`}
      >
        {current.word}
      </span>
    </span>
  );
}

