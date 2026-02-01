import type { Service } from '@/types';

// Datos de ejemplo para los servicios
const services: Service[] = [
  {
    id: '1',
    name: 'Corte de pelo',
    description: 'Corte y peinado profesional',
    duration: 30,
    price: 15000,
    image: 'https://res.cloudinary.com/dnnxgzqzv/image/upload/v1750193114/haircut-6798031_1280_wjgqpc.webp'
  },
  {
    id: '2',
    name: 'Barba',
    description: 'Renová tu estilo con actitud',
    duration: 20,
    price: 10000,
    image: 'https://res.cloudinary.com/dnnxgzqzv/image/upload/v1750193114/photo-1503951914875-452162b0f3f1_wtjp3g.webp'
  },
  {
    id: '3',
    name: 'Corte y barba',
    description: 'Peinados con estilo y personalidad',
    duration: 45,
    price: 20000,
    image: 'https://res.cloudinary.com/dnnxgzqzv/image/upload/v1750193115/17327852138719_kpb2pz.webp'
  },
  {
    id: '4',
    name: 'Color',
    description: 'Tinte profesional con productos de calidad',
    duration: 60,
    price: 25000,
    image: 'https://res.cloudinary.com/dnnxgzqzv/image/upload/v1750193114/b740431b8ae29ae68aca1cb27b7cbde7_nziast.webp'
  },
];

export function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Nuestros Servicios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span>⏱️ {service.duration} min</span>
                  </div>
                </div>
                <div className="text-lg font-semibold">
                  ${service.price.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 