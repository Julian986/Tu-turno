import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            TuTurno
          </Link>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/book"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Reservar
                </Link>
                <Link
                  to="/mis-turnos"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Mis Turnos
                </Link>
                <Link
                  to="/profile"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Perfil
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 