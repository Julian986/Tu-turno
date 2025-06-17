export interface User {
  id: string;
  name: string;
  phone: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // en minutos
  price: number;
  image: string;
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  description: string;
  createdAt: string;
}

export interface BusinessHours {
  day: number; // 0-6 (domingo-sábado)
  open: string;
  close: string;
  isOpen: boolean;
} 