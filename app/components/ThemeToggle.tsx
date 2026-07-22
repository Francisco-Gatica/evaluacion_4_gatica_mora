"use client";

import { useCookie } from "../hooks/useCookie";

export const accentClasses = {
  amarillo: {
    button: "bg-yellow-500 hover:bg-yellow-600",
    soft: "bg-yellow-100",
    ring: "ring-yellow-500",
    text: "text-yellow-600",
  },
  verde: {
    button: "bg-green-500 hover:bg-green-600",
    soft: "bg-green-100",
    ring: "ring-green-500",
    text: "text-green-600",
  },
  azul: {
    button: "bg-blue-500 hover:bg-blue-600",
    soft: "bg-blue-100",
    ring: "ring-blue-500",
    text: "text-blue-600",
  },
};

export default function ThemeToggle() {
  const { preferences, setPreferences } = useCookie();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold text-zinc-950">Tema: </span>
      <select
        value={preferences.accent}
        onChange={(e) =>
          setPreferences((prev) => ({
            ...prev,
            accent: e.target.value as "amarillo" | "verde" | "azul",
          }))
        }
        className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-950 shadow-sm"
      >
        <option value="amarillo">🟡 Amarillo</option>
        <option value="verde">🟢 Verde</option>
        <option value="azul">🔵 Azul</option>
      </select>
    </div>
  );
}