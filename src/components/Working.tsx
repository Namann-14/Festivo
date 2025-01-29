"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
export function Working() {
  const words = [
    {
      text: "How",
    },
    {
      text: "it",
    },
    {
      text: "works",
    },
    {
      text: "?",
      className: "text-purple-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-24">
      <TypewriterEffect words={words} />
    </div>
  );
}
