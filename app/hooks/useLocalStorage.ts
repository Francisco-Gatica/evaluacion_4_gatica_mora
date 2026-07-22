"use client";

import { useState, useEffect } from "react";

function parseJson<T>(value: string | null, defaultValue: T): T {
  if (!value) return defaultValue;
  try {
    return JSON.parse(value) as T;
  } catch {
    return defaultValue;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        try {
        const item = window.localStorage.getItem(key);
        if (item !== null) {
            setStoredValue(parseJson<T>(item, initialValue));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
        }
        } catch (error) {
        console.error(`Error al leer '${key}' desde local storage:`, error);
        } finally {
        setIsLoaded(true);
        }
    }, [key, initialValue]);

    useEffect(() => {
    if (!isLoaded || typeof window === "undefined") return;
    try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
        console.error(`Error al guardar '${key}' en local storage:`, error);
    }
    }, [key, storedValue, isLoaded]);
    return [storedValue, setStoredValue, isLoaded] as const;
}