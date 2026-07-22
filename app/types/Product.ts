export type EstadoProducto =
  | "Disponible"
  | "En uso"
  | "En mantenimiento"
  | "No disponible";

export interface Product {
  id: string,
  nombre: string,
  categoria: string,
  cantidad: number,
  estado: EstadoProducto,
  ubicacion: string,
  responsable: string,
  fechaIngreso: Date,
  descripcion: string
};