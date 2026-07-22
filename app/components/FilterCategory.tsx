"use client";

import { ChangeEvent } from "react";

interface FilterCategoryProps {
  selectedCategory: string;
  onCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function FilterCategory({ selectedCategory, onCategoryChange }: FilterCategoryProps) {
  return (
    <div className="w-full">
      <select
        value={selectedCategory}
        onChange={onCategoryChange}
        className="w-full rounded-md border-gray-400 bg-white text-zinc-950 font-medium shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border"
      >
        <option value="">Todas las categorías</option>
        <option value="Redes">Redes</option>
        <option value="Computadoras">Computadoras</option>
        <option value="Audiovisuales">Audiovisuales</option>
        <option value="Periféricos">Periféricos</option>
        <option value="Insumos">Insumos Técnicos</option>
        <option value="Sensores">Sensores IoT</option>
        <option value="Arduino">Kits Arduino</option>
        <option value="Materiales">Materiales</option>
      </select>
    </div>
  );
}