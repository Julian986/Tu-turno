import image1 from '../../public/1.webp';
import image2 from '../../public/2.webp';
import image3 from '../../public/3.webp';

export type ImageCategory = 'default' | 'corte' | 'barba' | 'color' | 'peinado';

export interface GalleryImage {
  id: number;
  url: string;
  description: string;
  category: ImageCategory;
}

export const galleryImages: GalleryImage[] = [
  // Imágenes por defecto
  {
    id: 1,
    url: image1,
    description: "Corte clásico moderno",
    category: "default"
  },
  {
    id: 2,
    url: image2,
    description: "Corte degradado",
    category: "default"
  },
  {
    id: 3,
    url: image3,
    description: "Corte texturizado",
    category: "default"
  },
  // Imágenes de cortes
  {
    id: 4,
    url: image1,
    description: "Corte pompadour",
    category: "corte"
  },
  {
    id: 5,
    url: image2,
    description: "Corte undercut",
    category: "corte"
  },
  {
    id: 6,
    url: image3,
    description: "Corte fade",
    category: "corte"
  },
  // Imágenes de barba
  {
    id: 7,
    url: "https://homme.mx/wp-content/uploads/2023/10/cada-cuanto-ir-a-la-barberia-homme-luxury-barbers-01.jpg",
    description: "Barba completa",
    category: "barba"
  },
  {
    id: 8,
    url: "https://i.pinimg.com/736x/bf/f4/6e/bff46e0d85682d0f2ce7ef48547a6144.jpg",
    description: "Barba estilizada",
    category: "barba"
  },
  {
    id: 9,
    url: "https://i.pinimg.com/736x/bf/71/ab/bf71abcc025fe6229405db631b94a0f8.jpg",
    description: "Barba recortada",
    category: "barba"
  },
  // Imágenes de color
  {
    id: 10,
    url: "https://i.pinimg.com/736x/68/7e/62/687e62553ee4fc210c48a20d1cd3323c.jpg",
    description: "Tinte rubio",
    category: "color"
  },
  {
    id: 11,
    url: "https://i.pinimg.com/736x/b3/f5/b8/b3f5b8150355d7a2d46ba1d4402d103b.jpg",
    description: "Tinte castaño",
    category: "color"
  },
  {
    id: 12,
    url: "https://i.pinimg.com/736x/d3/43/a6/d343a66bdb1e5cdce8116a0e70484055.jpg",
    description: "Tinte negro",
    category: "color"
  },
  // Imágenes de peinado
  {
    id: 13,
    url: "/images/gallery/peinado1.jpg",
    description: "Peinado pomada",
    category: "peinado"
  },
  {
    id: 14,
    url: "/images/gallery/peinado2.jpg",
    description: "Peinado gel",
    category: "peinado"
  },
  {
    id: 15,
    url: "/images/gallery/peinado3.jpg",
    description: "Peinado natural",
    category: "peinado"
  }
]; 