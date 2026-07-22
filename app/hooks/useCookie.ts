"use client";

import { useState, useEffect } from "react";

export type Preferences = {
  userName: string;
  accent: "amarillo" | "verde" | "azul";
  compact: boolean;
};

const DEFAULT_PREFERENCES: Preferences = {
  userName: "Usuario de Prueba",
  accent: "amarillo",
  compact: false,
};

const COOKIE_NAME = "lab_preferences"; // Clave exigida en las especificaciones[cite: 1]

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function setCookie(name: string, value: string, days = 14) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function parseJson<T>(value: string | null, defaultValue: T): T {
  if (!value) return defaultValue;
  try {
    return JSON.parse(value) as T;
  } catch {
    return defaultValue;
  }
}

export function useCookie() {
  const [preferences, setPreferences] = useState<Preferences>(DEFAULT_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = getCookie(COOKIE_NAME);
    if (stored) {
      setPreferences(parseJson(stored, DEFAULT_PREFERENCES));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setCookie(COOKIE_NAME, JSON.stringify(preferences));
    }
  }, [preferences, isLoaded]);

  return { preferences, setPreferences, isLoaded };
}