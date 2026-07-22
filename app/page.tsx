"use client";

import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useCookie } from "./hooks/useCookie";
import { initialData } from "./utils/initialData";
import { Product } from "./types/Product";
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";
import ThemeToggle, { accentClasses } from "./components/ThemeToggle";

export default function Home() {
  const [products, setProducts] = useLocalStorage<Product[]>("products", initialData);
  const { preferences } = useCookie();
  const [editingResource, setEditingResource] = useState<Product | null>(null);
  const activeAccent = accentClasses[preferences.accent] || accentClasses.amarillo;
  const addProduct = (product: Product) => {
    setProducts([...(products ?? []), product]);
  };
  const updateProduct = (updatedProduct: Product) => {
    setProducts(
      (products ?? []).map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  const deleteProduct = (id: string) => {
    if (editingResource?.id === id) {
      setEditingResource(null);
    }
    setProducts((products ?? []).filter((product) => product.id !== id));
  };
  const handleSaveResource = (product: Product) => {
    if (editingResource) {
      updateProduct(product);
      setEditingResource(null); // Limpia la edición tras guardar
    } else {
      addProduct(product);
    }
  };
  const handleEditClick = (product: Product) => {
    setEditingResource(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleCancelEdit = () => {
    setEditingResource(null);
  };

  if (!products) return <p className="p-6 text-zinc-950 font-bold">Cargando...</p>;
  return (
    <main className="p-6 min-h-screen bg-gray-50 text-zinc-950">
      <header className="p-4 rounded-lg border shadow-sm mb-6 flex justify-between items-center bg-white border-gray-200">
        <div>
          <h1 className={`text-2xl font-extrabold ${activeAccent.text}`}>
            Gestión de Recursos Tecnológicos
          </h1>
          <p className="text-xs text-gray-500 font-semibold">
            Usuario: {preferences.userName}
          </p>
        </div>
        <ThemeToggle />
      </header>
      {/* Formulario conectado a la edición */}
      <ResourceForm 
        onSave={handleSaveResource} 
        onCancel={handleCancelEdit}
        resourceToEdit={editingResource}
        existingResources={products}
      />
      {/* Lista de recursos con la función de editar conectada */}
      <ResourceList
        resources={products}
        onDelete={deleteProduct}
        onEdit={handleEditClick}
      />
    </main>
  );
}