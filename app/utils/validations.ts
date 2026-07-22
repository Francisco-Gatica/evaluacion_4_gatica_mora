import { Product } from "../types/Product";

export const getFecha = (): string => {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    return `${año}-${mes}-${dia}`;
};

export function generateCategoryId(category: string, existingProducts: Product[]): string {
    const cleanCategory = category.trim(); const categoryProducts = existingProducts.filter(
    (p) => p.categoria?.toLowerCase() === cleanCategory.toLowerCase()
    );
    const nextNumber = categoryProducts.length + 1;
    const sequentialCode = String(nextNumber).padStart(3, "0");
    return `${cleanCategory}-${sequentialCode}`;
};

