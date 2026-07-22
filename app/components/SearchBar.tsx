"use client";

import { ChangeEvent } from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full rounded-md border-gray-400 bg-white text-zinc-950 font-medium placeholder-gray-500 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border"
      />
    </div>
  );
}