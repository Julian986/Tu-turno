import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import type { Appointment, Service, GalleryImage } from '@/types';
import { Calendar, Image, Scissors, Settings, BarChart } from 'lucide-react';

// Datos de ejemplo
const mockAppointments: Appointment[] = [
  {
    id: '1',
    userId: '1',
    serviceId: '1',
    date: '2024-03-20',
    time: '10:00',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '2',
    serviceId: '2',
    date: '2024-03-20',
    time: '11:00',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
];

const mockServices: Service[] = [
  {
    id: '1',
    name: 'Corte de Cabello',
    description: 'Corte y peinado profesional',
    duration: 30,
    price: 15000,
    image: 'https://picsum.photos/400/300'
  },
  {
    id: '2',
    name: 'Coloración',
    description: 'Tinte profesional con productos de calidad',
    duration: 120,
    price: 25000,
    image: 'https://picsum.photos/400/301'
  },
];

const mockGallery: GalleryImage[] = [
  {
    id: '1',
    url: 'https://picsum.photos/400/300',
    description: 'Corte de cabello moderno',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    url: 'https://picsum.photos/400/301',
    description: 'Peinado para evento',
    createdAt: new Date().toISOString(),
  },
];

type Tab = 'appointments' | 'gallery' | 'services' | 'settings' | 'stats';

export function Admin() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('appointments');

  // Si no hay usuario, redirigir al login
  if (!user) {
    navigate('/login');
    return null;
  }

  const tabs = [
    { id: 'appointments', icon: Calendar, label: 'Turnos' },
    { id: 'gallery', icon: Image, label: 'Galería' },
    { id: 'services', icon: Scissors, label: 'Servicios' },
    { id: 'settings', icon: Settings, label: 'Configuración' },
    { id: 'stats', icon: BarChart, label: 'Estadísticas' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as Tab)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeTab === id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Contenido de las tabs */}
      <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Turnos del Día</h2>
            {mockAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex justify-between items-center p-4 bg-background rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {appointment.time} - {mockServices.find(s => s.id === appointment.serviceId)?.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Estado: {appointment.status}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm">
                    Confirmar
                  </button>
                  <button className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md text-sm">
                    Cancelar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Galería</h2>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Subir Imagen
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {mockGallery.map((image) => (
                <div key={image.id} className="relative aspect-square">
                  <img
                    src={image.url}
                    alt={image.description}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Servicios</h2>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Agregar Servicio
              </button>
            </div>
            <div className="space-y-4">
              {mockServices.map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-center p-4 bg-background rounded-lg"
                >
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.duration} min - ${service.price}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm">
                      Editar
                    </button>
                    <button className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md text-sm">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Configuración</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Horarios de Atención</h3>
                {/* Aquí iría el formulario de horarios */}
              </div>
              <div>
                <h3 className="font-medium mb-2">Información de Contacto</h3>
                {/* Aquí iría el formulario de contacto */}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-medium mb-2">Turnos Hoy</h3>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-medium mb-2">Turnos Pendientes</h3>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 