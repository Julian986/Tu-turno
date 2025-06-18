import { Search, Scissors, User, Calendar, Bell } from 'lucide-react';
import { CoverCarousel } from "@/components/ui/cover-carousel";
import barber from "../../public/barber.png"
import { useState } from "react";
import type { ImageCategory } from "@/data/gallery-images";

const categories = [
  { icon: Scissors, label: 'Corte', category: 'corte' as ImageCategory },
  { icon: User, label: 'Barba', category: 'barba' as ImageCategory },
  { icon: Calendar, label: 'Color', category: 'color' as ImageCategory },
  /* { icon: BookOpen, label: 'Peinado', category: 'peinado' as ImageCategory }, */
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory>("corte");

  const handleCategoryClick = (category: ImageCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Header de bienvenida */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={barber} alt="avatar" className="w-12 h-12" />
          <div>
            <p className="text-xs text-muted-foreground">Bienvenido</p>
            <h2 className="font-semibold text-lg">Tú Barberia </h2>

          </div>
        </div>
        <button className="bg-card p-2 rounded-full border border-border shadow-sm">
          <Bell className="text-muted-foreground w-5 h-5" />
        </button>
      </div>

      {/* Buscador */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar servicios o estilos..."
          className="w-full bg-secondary rounded-xl py-3 pl-12 pr-4 placeholder:text-muted-foreground text-foreground focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
      </div>

      {/* Categorías */}
      <section>
        <h3 className="text-sm font-semibold text-muted-foreground mb-2">Explorá servicios</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.category)}
              className={`flex flex-col items-center bg-card shadow-sm rounded-xl px-4 py-3 min-w-[80px] hover:bg-muted transition ${
                selectedCategory === cat.category ? 'ring-2 ring-primary' : ''
              }`}
            >
              <cat.icon className={`w-6 h-6 mb-1 ${
                selectedCategory === cat.category ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <span className={`text-xs ${
                selectedCategory === cat.category ? 'text-primary font-medium' : 'text-foreground'
              }`}>{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Carrusel con botón de acción */}
      <CoverCarousel selectedCategory={selectedCategory} />
    </div>
  );
}









{/* Ofertas */}
{/*    <div className="bg-card rounded-2xl p-4 flex flex-col shadow-lg mb-6">
  <div className="relative">
    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" className="rounded-xl w-full h-40 object-cover" />
    <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold">★ 5.2</span>
  </div>
  <div className="mt-3">
    <div className="font-bold text-base">Razor Work Fred</div>
    <div className="text-muted-foreground text-xs">Quality, Trusted Services.</div>
    <button className="mt-3 bg-primary text-primary-foreground rounded-xl px-4 py-2 font-bold flex items-center gap-2">
      Reservar
    </button>
  </div>
</div> */}