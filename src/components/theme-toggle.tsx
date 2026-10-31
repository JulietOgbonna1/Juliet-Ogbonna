"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "./icons";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // true only after hydration — avoids a server/client icon mismatch
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative grid size-10 place-items-center overflow-hidden rounded-full border border-line text-ink transition hover:border-accent hover:text-accent"
    >
      <span className={`absolute transition duration-500 ${isDark ? "translate-y-0 rotate-0" : "-translate-y-10 -rotate-90"}`}>
        <Sun />
      </span>
      <span className={`absolute transition duration-500 ${isDark ? "translate-y-10 rotate-90" : "translate-y-0 rotate-0"}`}>
        <Moon />
      </span>
    </button>
  );
}
