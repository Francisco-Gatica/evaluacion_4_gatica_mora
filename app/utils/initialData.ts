import { Product } from "../types/Product";

export const initialData: Product[] = [
    {
        id: "router_001",
        nombre: "Router TP-Link",
        categoria: "Redes",
        cantidad: 2,
        estado: "Disponible",
        ubicacion: "Laboratorio Leica",
        responsable: "Julio López",
        fechaIngreso: new Date("2024-06-01"),
        descripcion: "Router inalámbrico de alta velocidad para pruebas de conectividad."
    },
    {
        id: "laptop_001",
        nombre: "Laptop Dell XPS 13",
        categoria: "Computadoras",
        cantidad: 5,
        estado: "En uso",
        ubicacion: "Oficina de Desarrollo",
        responsable: "Ana Martínez",
        fechaIngreso: new Date("2024-05-15"),
        descripcion: "Laptop ultradelgada con procesador Intel i7 y 16GB de RAM."
    },
    {
        id: "proyector_001",
        nombre: "Proyector Epson",
        categoria: "Audiovisuales",
        cantidad: 1,
        estado: "En mantenimiento",
        ubicacion: "Laboratorio Leica",
        responsable: "Carlos Rodríguez",
        fechaIngreso: new Date("2024-04-20"),
        descripcion: "Proyector de alta resolución para presentaciones."
    },
    {
        id: "impresora_001",
        nombre: "Impresora HP LaserJet",
        categoria: "Periféricos",
        cantidad: 3,
        estado: "En uso",
        ubicacion: "Oficina de Contabilidad",
        responsable: "María González",
        fechaIngreso: new Date("2024-03-10"),
        descripcion: "Impresora láser multifuncional con conexión inalámbrica."
    }
];