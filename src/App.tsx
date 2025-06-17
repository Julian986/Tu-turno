import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { MainLayout } from '@/components/layout/MainLayout';

// Páginas
import Home from './pages/Home';
import { Login } from '@/pages/Login';
import { Services } from '@/pages/Services';
import { Book } from '@/pages/Book';
import { MyAppointments } from '@/pages/MyAppointments';
import Profile from './pages/Profile';
import { Contact } from './pages/Contact';
import { Admin } from '@/pages/Admin';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          
          {/* Rutas protegidas */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/reservar" element={<Book />} />
            <Route path="/mis-turnos" element={<MyAppointments />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/contacto" element={<Contact />} />
          </Route>

          {/* Ruta de administración */}
          <Route path="/admin" element={<Admin />} />

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
