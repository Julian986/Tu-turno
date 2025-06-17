import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import StepProgressBar, { type Step } from '@/components/ui/stepper';


const steps: Step[] = [
  { id: '01', name: 'Seleccionar turno', status: 'complete' },
  { id: '02', name: 'Confirmar datos', status: 'current' },
  { id: '03', name: 'Finalizar', status: 'upcoming' }
]

export function SelectService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/login')}
            className="text-white"
          >
            ← Volver
          </Button>
          <h2 className="text-2xl font-bold text-center">Selecciona un servicio</h2>
          <div className="w-20" /> {/* Espaciador para centrar el título */}
        </div>

        <StepProgressBar
          steps= {steps}
        />

        <div className="space-y-4">
          {/* Aquí irán los servicios */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/seleccionar-horario')}
              className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-semibold">Corte de Cabello</h3>
              <p className="text-sm text-gray-400">30 min</p>
            </button>
            <button
              onClick={() => navigate('/seleccionar-horario')}
              className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-semibold">Barba</h3>
              <p className="text-sm text-gray-400">20 min</p>
            </button>
            {/* Agregar más servicios aquí */}
          </div>
        </div>
      </div>
    </div>
  );
} 