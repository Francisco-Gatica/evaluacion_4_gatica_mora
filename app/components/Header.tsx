"use client";

import ThemeToggle, { accentClasses } from "./ThemeToggle";
import { useCookie } from "../hooks/useCookie";

export default function Header() {
  const { preferences } = useCookie();
  const activeAccent = accentClasses[preferences.accent as keyof typeof accentClasses] || accentClasses.amarillo;

  return (
    <header className="p-4 rounded-lg border shadow-sm mb-6 flex justify-between items-center bg-white border-gray-200">
      <div>
        <h1 className={`text-2xl font-extrabold ${activeAccent.text}`}>
          Gestión de Recursos Tecnológicos
        </h1>
        <p className="text-xs text-gray-500 font-semibold">
          Usuario: {preferences.userName || "Invitado"}
        </p>
      </div>
      <ThemeToggle />
    </header>
  );
}