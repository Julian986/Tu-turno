import type { ReactNode } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Home, Scissors, Calendar, User, Phone } from 'lucide-react';
import '../layout.css';

interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/servicios', icon: Scissors, label: 'Servicios' },
    { path: '/mis-turnos', icon: Calendar, label: 'Mis Turnos' },
    { path: '/perfil', icon: User, label: 'Perfil' },
    { path: '/contacto', icon: Phone, label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen bg-background fondoApp">
      <main className="pb-16">
        {children}
        <Outlet />
      </main>

      {/* Navegación móvil */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center w-full h-full ${
                isActive(path)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
} 