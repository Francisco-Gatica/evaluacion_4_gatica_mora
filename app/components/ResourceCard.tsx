"use client";

import { Product } from "../types/Product";

interface ResourceCardProps {
  resource: Product;
  onEdit: (resource: Product) => void;
  onDelete: (id: string) => void;
}

export default function ResourceCard({ resource, onEdit, onDelete }: ResourceCardProps) {
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el recurso "${resource.nombre}"?`);
    if (confirmDelete) {
      onDelete(resource.id);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-zinc-900">{resource.nombre}</h3>
        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-gray-300">
          {resource.categoria}
        </span>
      </div>
      <div className="text-sm text-gray-600">
        <p><span className="font-bold">ID:</span> {resource.id}</p>
        <p><span className="font-bold">Estado:</span> {resource.estado}</p>
        <p><span className="font-bold">Stock:</span> {resource.cantidad}</p>
        <p><span className="font-bold">Ubicación:</span> {resource.ubicacion}</p>
      </div>
      <div className="mt-auto pt-4 flex gap-2 justify-end">
        <button
          onClick={() => onEdit(resource)}
          className="text-indigo-600 hover:text-indigo-900 font-medium px-2 py-1"
        >
          Editar
        </button>
        <button
          onClick={handleDeleteClick}
          className="text-red-600 hover:text-red-900 font-medium px-2 py-1"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}