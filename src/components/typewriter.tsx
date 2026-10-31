"use client";

import { useEffect, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1800 : empty ? 300 : deleting ? 40 : 85;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        setI((n) => n + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="text-accent">
      <span aria-live="polite">{text}</span>
      <span aria-hidden className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle" style={{ height: "1em" }} />
    </span>
  );
}
