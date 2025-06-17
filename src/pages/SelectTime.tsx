import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function SelectTime() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/seleccionar-servicio')}
            className="text-white"
          >
            ← Volver
          </Button>
          <h2 className="text-2xl font-bold text-center">Selecciona un horario</h2>
          <div className="w-20" /> {/* Espaciador para centrar el título */}
        </div>

        <div className="space-y-4">
          {/* Aquí irán los horarios disponibles */}
          <div className="grid grid-cols-3 gap-4">
            {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map((time) => (
              <button
                key={time}
                onClick={() => navigate('/confirmar-turno')}
                className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 