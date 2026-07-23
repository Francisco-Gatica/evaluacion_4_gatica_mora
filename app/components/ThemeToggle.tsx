"use client";

import { useState, useEffect } from "react";
import { useCookie } from "../hooks/useCookie";

export const accentClasses = {
  amarillo: {
    text: "text-amber-600",
    bgPrimary: "bg-amber-500 hover:bg-amber-600 text-white",
    bgSoft: "bg-amber-100 text-amber-900 border-amber-300",
    borderFocus: "focus:border-amber-500 focus:ring-amber-500",
    ring: "ring-amber-500",
  },
  verde: {
    text: "text-emerald-600",
    bgPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white",
    bgSoft: "bg-emerald-100 text-emerald-900 border-emerald-300",
    borderFocus: "focus:border-emerald-500 focus:ring-emerald-500",
    ring: "ring-emerald-500",
  },
  azul: {
    text: "text-blue-600",
    bgPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
    bgSoft: "bg-blue-100 text-blue-900 border-blue-300",
    borderFocus: "focus:border-blue-500 focus:ring-blue-500",
    ring: "ring-blue-500",
  },
};

export default function ThemeToggle() {
  const { preferences, setPreferences } = useCookie();
  const [userNameInput, setUserNameInput] = useState(preferences.userName || "");

  useEffect(() => {
    setUserNameInput(preferences.userName || "");
  }, [preferences.userName]);

  const handleSaveUserName = () => {
    if (userNameInput.trim() !== "") {
      setPreferences((prev) => ({
        ...prev,
        userName: userNameInput.trim(),
      }));
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Input Nombre de Usuario */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-bold text-zinc-950">Usuario:</label>
        <input
          type="text"
          value={userNameInput}
          onChange={(e) => setUserNameInput(e.target.value)}
          onBlur={handleSaveUserName}
          onKeyDown={(e) => e.key === "Enter" && handleSaveUserName()}
          placeholder="Tu nombre..."
          className="rounded-md border border-gray-300 bg-white px-2.5 py-1 text-sm font-medium text-zinc-950 shadow-sm border focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Selector de Acento */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-zinc-950">Tema:</span>
        <select
          value={preferences.accent}
          onChange={(e) =>
            setPreferences((prev) => ({
              ...prev,
              accent: e.target.value as "amarillo" | "verde" | "azul",
            }))
          }
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-950 shadow-sm border cursor-pointer"
        >
          <option value="amarillo">🟡 Ámbar</option>
          <option value="verde">🟢 Esmeralda</option>
          <option value="azul">🔵 Azul</option>
        </select>
      </div>
    </div>
  );
}