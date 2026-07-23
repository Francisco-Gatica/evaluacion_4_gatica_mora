"use client";

import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useSessionStorage } from "./hooks/useSessionStorage";
import { useCookie } from "./hooks/useCookie";
import { Product } from "./types/Product";
import { initialData } from "./utils/initialData";
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterCategory from "./components/FilterCategory";
import { accentClasses } from "./components/ThemeToggle";

export default function Home() {
  const [products, setProducts] = useLocalStorage<Product[]>("products", initialData);
  const [searchTerm, setSearchTerm] = useSessionStorage<string>("lab_search", "");
  const [selectedCategory, setSelectedCategory] = useSessionStorage<string>("lab_category", "");
  const [editingResource, setEditingResource] = useState<Product | null>(null);
  const { preferences } = useCookie();
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
      setEditingResource(null);
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
  const filteredProducts = (products ?? []).filter((product) => {
    const matchesSearch = product.nombre.toLowerCase().includes((searchTerm || "").toLowerCase());
    const matchesCategory = selectedCategory ? product.categoria === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  if (!products) return <p className="p-6 text-zinc-950 font-bold">Cargando...</p>;
  return (
    <main className="p-6 min-h-screen bg-gray-50 text-zinc-950">
      <Header />
      <ResourceForm 
        onSave={handleSaveResource} 
        onCancel={handleCancelEdit}
        resourceToEdit={editingResource}
        existingResources={products}
        accent={activeAccent}
      />
      <div className="bg-white p-6 rounded-lg shadow-md border mb-6 flex flex-col md:flex-row gap-4">
        <SearchBar 
          searchTerm={searchTerm || ""} 
          onSearchChange={(e) => setSearchTerm(e.target.value)} 
        />
        <FilterCategory 
          selectedCategory={selectedCategory || ""} 
          onCategoryChange={(e) => setSelectedCategory(e.target.value)} 
        />
      </div>
      <ResourceList
        resources={filteredProducts}
        onDelete={deleteProduct}
        onEdit={handleEditClick}
      />
    </main>
  );
}