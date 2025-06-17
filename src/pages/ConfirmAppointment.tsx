import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function ConfirmAppointment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/seleccionar-horario')}
            className="text-white"
          >
            ← Volver
          </Button>
          <h2 className="text-2xl font-bold text-center">Confirmar turno</h2>
          <div className="w-20" /> {/* Espaciador para centrar el título */}
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Servicio</h3>
              <p className="text-gray-400">Corte de Cabello</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fecha y Hora</h3>
              <p className="text-gray-400">Lunes, 15 de Abril - 10:00</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Duración</h3>
              <p className="text-gray-400">30 minutos</p>
            </div>
          </div>

          <Button
            onClick={() => navigate('/turno-confirmado')}
            className="w-full bg-white hover:bg-white/90 text-black font-bold py-4 px-6 rounded-xl text-center text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Confirmar turno
          </Button>
        </div>
      </div>
    </div>
  );
} 