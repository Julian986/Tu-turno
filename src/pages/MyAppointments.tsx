import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import type { Appointment, Service } from '@/types';
import { FaCalendarAlt, FaClock, FaTimes } from 'react-icons/fa';

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
    userId: '1',
    serviceId: '2',
    date: '2024-03-25',
    time: '15:00',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
];

const mockServices: Record<string, Service> = {
  '1': {
    id: '1',
    name: 'Corte de Cabello',
    description: 'Corte y peinado profesional',
    duration: 30,
    price: 1500,
    image: 'https://cdn.pixabay.com/photo/2021/11/15/12/40/haircut-6798031_1280.jpg'
  },
  '2': {
    id: '2',
    name: 'Coloración',
    description: 'Tinte profesional con productos de calidad',
    duration: 120,
    price: 3500,
    image: 'https://i.pinimg.com/736x/b7/40/43/b740431b8ae29ae68aca1cb27b7cbde7.jpg'
  },
};

export function MyAppointments() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [appointments, setAppointments] = useState(mockAppointments);

  // Si no hay usuario, redirigir al login
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleCancel = async (appointmentId: string) => {
    // Aquí iría la lógica para cancelar la reserva
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === appointmentId
          ? { ...apt, status: 'cancelled' as const }
          : apt
      )
    );
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/10 text-green-500';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'cancelled':
        return 'bg-red-500/10 text-red-500';
      default:
        return 'bg-zinc-500/10 text-zinc-500';
    }
  };

  const getStatusText = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmado';
      case 'pending':
        return 'Pendiente';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#18181b] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Mis Turnos</h1>
          <p className="text-zinc-400 text-sm">Gestiona tus reservas y citas</p>
        </div>

        {/* Lista de turnos */}
        <div className="space-y-4">
          {appointments.map((appointment) => {
            const service = mockServices[appointment.serviceId];
            return (
              <div
                key={appointment.id}
                className="bg-[#111112] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    {/* Servicio y Estado */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white">{service.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                        {getStatusText(appointment.status)}
                      </span>
                    </div>

                    {/* Detalles del turno */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(appointment.date).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <FaClock className="w-4 h-4" />
                        <span className="text-sm">{appointment.time}</span>
                      </div>
                    </div>

                    {/* Precio */}
                    <div className="text-white font-medium">
                      ${service.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Botón Cancelar */}
                  {appointment.status !== 'cancelled' && (
                    <button
                      onClick={() => handleCancel(appointment.id)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
                    >
                      <FaTimes className="w-4 h-4" />
                      Cancelar
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {appointments.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-[#111112] rounded-2xl p-8">
                <p className="text-zinc-400 text-lg mb-4">No tienes turnos reservados</p>
                <button
                  onClick={() => navigate('/reservar')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                >
                  Reservar un turno
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 