import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Service } from '@/types';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import StepProgressBar, { type Step } from '@/components/ui/stepper';

// Datos de ejemplo para los servicios
const services: Service[] = [
  {
    id: '1',
    name: 'Corte de pelo',
    description: 'Corte y peinado profesional',
    duration: 30,
    price: 15000,
    image: 'https://cdn.pixabay.com/photo/2021/11/15/12/40/haircut-6798031_1280.jpg'
  },
  {
    id: '2',
    name: 'Barba',
    description: 'Renová tu estilo con actitud',
    duration: 120,
    price: 10000,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Corte y barba',
    description: 'Peinados con estilo y personalidad',
    duration: 45,
    price: 20000,
    image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/11/28/17327852138719.jpg'
  },
  {
    id: '4',
    name: 'Color',
    description: 'Tinte profesional con productos de calidad',
    duration: 60,
    price: 25000,
    image: 'https://i.pinimg.com/736x/b7/40/43/b740431b8ae29ae68aca1cb27b7cbde7.jpg'
  },
];

// Horarios disponibles (ejemplo)
const availableHours = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

type BookingStepType = 'service' | 'datetime' | 'confirm';

export function Book() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [step, setStep] = useState<BookingStepType>('service');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    // Desplazamiento suave hacia arriba al cambiar de paso
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [user, navigate, step]);

  if (!user) {
    return null;
  }

  // Paso 1: Selección de servicio
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep('datetime');
  };

  // Paso 2: Selección de fecha y hora
  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep('confirm');
  };

  // Paso 3: Confirmación
  const handleConfirm = async () => {
    // Aquí iría la lógica para guardar la reserva
    console.log('Reserva confirmada:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    });
    navigate('/mis-turnos');
  };

  const handleBack = () => {
    switch (step) {
      case 'datetime':
        setStep('service');
        break;
      case 'confirm':
        setStep('datetime');
        break;
      default:
        navigate('/');
    }
  };

  // Encabezado de pasos
  const steps: Step[] = [
    { id: '01', name: 'Servicio', status: 'upcoming' },
    { id: '02', name: 'Horario', status: 'upcoming' },
    { id: '03', name: 'Confirmar', status: 'upcoming' },
  ];

  const currentStepIndex = (() => {
    switch (step) {
      case 'service':
        return 0;
      case 'datetime':
        return 1;
      case 'confirm':
        return 2;
      default:
        return 0;
    }
  })();

  // Ajusta los estados de los pasos según el currentStepIndex
  const updatedSteps = steps.map((s: Step, i) => ({
    ...s,
    status: (i < currentStepIndex ? 'complete' : i === currentStepIndex ? 'current' : 'upcoming') as Step['status']
  }));

  return (
    <div className="min-h-screen bg-[#18181b] p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Botón de regreso */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors ml-4 mt-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver
        </button>

        {/* Encabezado de pasos */}
        <div className="mt-4">
          <StepProgressBar 
            steps={updatedSteps}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative">
          {/* Paso 1: Selección de servicio */}
          {step === 'service' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className="rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 cursor-pointer bg-[none] hover:scale-[1.02] hover:border-yellow-400/50"
                >
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-white">{service.name}</h3>
                        <p className="text-zinc-400 text-sm mt-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
                          <span>⏱️ {service.duration} min</span>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Paso 2: Selección de fecha y hora */}
          {step === 'datetime' && (
            <div className="space-y-6 bg-[#111112] rounded-2xl p-6 shadow-lg">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Fecha
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  placeholder="Selecciona una fecha"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Hora
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {availableHours.map((hour) => (
                    <button
                      key={hour}
                      onClick={() => setSelectedTime(hour)}
                      disabled={!selectedDate}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        selectedTime === hour
                          ? 'bg-white text-black scale-105'
                          : 'bg-zinc-800/50 hover:bg-zinc-700 text-white'
                      } ${!selectedDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {hour}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => handleDateTimeSelect(selectedDate, selectedTime)}
                disabled={!selectedDate || !selectedTime}
                className={`w-full py-4 px-6 rounded-xl text-center text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-bold ${
                  selectedDate && selectedTime
                    ? 'bg-white hover:bg-gray-100 text-black'
                    : 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                }`}
              >
                Siguiente
              </Button>
            </div>
          )}

          {/* Paso 3: Confirmación */}
          {step === 'confirm' && selectedService && (
            <div className="space-y-6 bg-[#111112] rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Servicio</h3>
                    <p className="text-zinc-300">{selectedService.name}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Duración</h3>
                    <p className="text-zinc-300">{selectedService.duration} minutos</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Fecha y Hora</h3>
                    <p className="text-zinc-300">
                      {new Date(selectedDate).toLocaleDateString()} - {selectedTime}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Precio</h3>
                    <p className="text-zinc-300">${selectedService.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleConfirm}
                className="w-full bg-white hover:bg-gray-100 text-black font-bold py-4 px-6 rounded-xl text-center text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Confirmar turno
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 