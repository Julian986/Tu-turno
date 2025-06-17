import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { FaUser, FaPhone } from 'react-icons/fa';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(formData.phone, formData.name);
      navigate('/reservar');
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors ml-4 mt-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Volver
          </button>
          <h2 className="text-2xl font-bold text-center">Bienvenido a TuTurno</h2>
          <div className="w-20" /> {/* Espaciador para centrar el título */}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Ingresa tus datos para continuar
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div className="flex items-center border-b border-gray-400 pb-2">
              <FaUser className="text-gray-400 mr-3" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white placeholder-gray-400 text-base border-none focus:border-none focus:ring-0 focus:outline-none shadow-none"
                placeholder="Tu nombre"
              />
            </div>

            <div className="flex items-center border-b border-gray-400 pb-2">
              <FaPhone className="text-gray-400 mr-3" />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white placeholder-gray-400 text-base border-none focus:border-none focus:ring-0 focus:outline-none shadow-none"
                placeholder="Tu número de teléfono"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white hover:bg-white/90 text-black font-bold py-4 px-6 rounded-xl text-center text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            {isLoading ? 'Cargando...' : 'Continuar'}
          </button>
        </form>
      </div>
    </div>
  );
} 