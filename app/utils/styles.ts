import { Product } from "../types/Product";

export const STATUS_BADGE_CLASSES: Record<Product["estado"], string> = {
  Disponible: "bg-green-100 text-green-900 border-green-300 font-bold",
  "En uso": "bg-blue-100 text-blue-900 border-blue-300 font-bold",
  "En mantenimiento": "bg-yellow-100 text-yellow-900 border-yellow-300 font-bold",
  "No disponible": "bg-red-100 text-red-900 border-red-300 font-bold",
};

export const TH_STYLE = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"

export const TD_STYLE = "px-6 py-4 whitespace-nowrap text-sm text-gray-500"