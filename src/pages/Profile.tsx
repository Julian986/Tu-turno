import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosPhonePortrait } from "react-icons/io";
import { useAuth } from '@/context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#18181b]">
      <div className="w-[90%] max-w-md p-6 relative mt-10">
        {!isEditing ? (
          // Estado de visualización
          <div className="space-y-8">
            {/* Encabezado */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Mi Perfil</h2>
              <p className="text-zinc-400 text-sm">Gestiona tu información personal</p>
            </div>

            {/* Tarjeta de información */}
            <div className="bg-[#111112] rounded-2xl p-6 shadow-lg space-y-6">
              {/* Nombre */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <FaUser className="w-4 h-4" />
                  <span>Nombre</span>
                </div>
                <p className="text-white text-lg font-medium pl-6">
                  {formData.name || 'No especificado'}
                </p>
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <IoIosPhonePortrait className="w-4 h-4" />
                  <span>Teléfono</span>
                </div>
                <p className="text-white text-lg font-medium pl-6">
                  {formData.phone || 'No especificado'}
                </p>
              </div>
            </div>

            {/* Botón Editar */}
            <button
              onClick={() => setIsEditing(true)}
              className="w-full py-4 bg-white text-black rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
            >
              Editar Perfil
            </button>
          </div>
        ) : (
          // Estado de edición
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Encabezado */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Editar Perfil</h2>
              <p className="text-zinc-400 text-sm">Actualiza tu información personal</p>
            </div>

            {/* Nombre */}
            <div className="flex items-center border-b border-gray-400 pb-2">
              <FaUser className="text-gray-400 mr-3 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400 text-base border-none focus:border-none focus:ring-0 focus:outline-none shadow-none"
              />
            </div>

            {/* Teléfono */}
            <div className="flex items-center border-b border-gray-400 pb-2">
              <IoIosPhonePortrait className="text-gray-400 mr-3 w-8 h-8" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Celular"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400 text-base border-none focus:border-none focus:ring-0 focus:outline-none shadow-none"
              />
            </div>

            {/* Botón Guardar */}
            <button
              type="submit"
              className="w-full py-4 bg-white text-black rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
            >
              Guardar Cambios
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
