import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import './layout.css'

export function Layout() {
  return (
    <div className="min-h-screen text-foreground fondoApp">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
} 