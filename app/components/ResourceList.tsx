"use client";

import { Product } from "../types/Product";
import { STATUS_BADGE_CLASSES, TD_STYLE, TH_STYLE } from "../utils/styles";

interface ResourceListProps {
  resources: Product[];
  onEdit: (resource: Product) => void;
  onDelete: (id: string) => void;
}

export default function ResourceList({ resources, onEdit, onDelete }: ResourceListProps) {
  const handleEditClick = (resource: Product) => {
    onEdit(resource);
  };

  const handleDeleteClick = (id: string, name: string) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el recurso "${name}"?`);
    if (confirmDelete) {
      onDelete(id);
    }
  };

  if (resources.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border text-center">
        <p className="text-gray-500">No hay recursos registrados actualmente.</p>
      </div>
    );
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-zinc-800">Listado de Recursos</h2>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className={TH_STYLE}>ID</th>
            <th className={TH_STYLE}>Nombre</th>
            <th className={TH_STYLE}>Categoría</th>
            <th className={TH_STYLE}>Stock</th>
            <th className={TH_STYLE}>Estado</th>
            <th className={TH_STYLE}>Ubicación</th>
            <th className={TH_STYLE}>Responsable</th>
            <th className={TH_STYLE}>Descripción</th>
            <th className={TH_STYLE}>Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {resources.map((resource) => (
            <tr key={resource.id} className="hover:bg-gray-50 transition">
              <td className={TD_STYLE}>
                {resource.id}
              </td>
              <td className={TD_STYLE}>
                {resource.nombre}
              </td>
              <td className={TD_STYLE}>
                {resource.categoria}
              </td>
              <td className={TD_STYLE}>
                {resource.cantidad}
              </td>
              <td className={TD_STYLE}>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${resource.estado === 'Disponible' ? STATUS_BADGE_CLASSES.Disponible : 
                    resource.estado === 'En uso' ? STATUS_BADGE_CLASSES["En uso"] :
                    resource.estado === 'En mantenimiento' ? STATUS_BADGE_CLASSES["En mantenimiento"] :
                    resource.estado === 'No disponible' ? STATUS_BADGE_CLASSES["No disponible"] : ''}`}>
                  {resource.estado}
                </span>
              </td>
              <td className={TD_STYLE}>
                {resource.ubicacion}
              </td>
              <td className={TD_STYLE}>
                {resource.responsable}
              </td>
              <td className={TD_STYLE}>
                {resource.descripcion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleEditClick(resource)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteClick(resource.id, resource.nombre)}
                  className="text-red-600 hover:text-red-900"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}