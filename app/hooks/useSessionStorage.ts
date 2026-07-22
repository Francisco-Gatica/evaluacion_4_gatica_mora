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

export function useSessionStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect (() => {
        if (typeof window === "undefined") return;
        try {
            const item = window.sessionStorage.getItem(key);
            if (item !== null) {
                setStoredValue(parseJson<T>(item, initialValue));
            }
        } catch (error) {
            console.error("No se pudo acceder al sessionStorage.", error);
        } finally {
            setIsLoaded(true);
        }
        }, [key, initialValue]);
    
    useEffect(() => {
        if (!isLoaded || typeof window === "undefined") return;
        try {
            window.sessionStorage.setItem(key, JSON.stringify(storedValue));            
        } catch (error) {
            console.error(`Error al cargar '${key}' desde session storage:`, error);
        }
    }, [key, storedValue, isLoaded]);

    const removeItem = () => {
        try {
        setStoredValue(initialValue);
        if (typeof window !== "undefined") {
            window.sessionStorage.removeItem(key);
        }
        } catch (error) {
        console.error(`Error al eliminar '${key}' de session storage:`, error);
        }
    };

    return [storedValue, setStoredValue, removeItem, isLoaded] as const;
}