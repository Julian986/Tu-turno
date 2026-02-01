import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const businessInfo = {
  address: 'Rawson 1874',
  hours: [
    { day: 'Lunes a Viernes', hours: '09:00 - 19:00' },
    { day: 'Sábados', hours: '09:00 - 17:00' },
    { day: 'Domingos', hours: 'Cerrado' },
  ],
  phone: '+54 2235484339',
  whatsapp: '+54 2235484339',
  social: {
    instagram: '@tuturno',
    facebook: 'TuTurno Peluquería',
  },
};

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Contacto</h1>

      <div className="space-y-6">
        {/* Dirección */}
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border bg-transparent">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 text-[#f3f3f3]" />
            <div>
            <h3 className="font-semibold text-[#f3f3f3]">Dirección</h3>
              <p className="text-muted-foreground mt-1">{businessInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Horarios */}
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border bg-transparent">
          <div className="flex items-start gap-3">
            <Clock className="text-[#f3f3f3] w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-[#f3f3f3] font-semibold">Horarios de Atención</h3>
              <div className="mt-2 space-y-1">
                {businessInfo.hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground min-w-[110px]">{schedule.day}</span>
                    <span className="text-[#f3f3f3] ml-4">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Teléfono y WhatsApp */}
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border bg-transparent">
          <div className="flex items-start gap-3">
            <Phone className="text-[#f3f3f3] w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-[#f3f3f3] font-semibold">Contacto</h3>
              <div className="mt-2 space-y-2">
                <p>
                  <span className="text-muted-foreground">Teléfono:</span>{' '}
                   <span className='text-[#f3f3f3]'>
                  {businessInfo.phone}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">WhatsApp:</span>{' '}
                  <span className='text-[#f3f3f3]'>
                  {businessInfo.whatsapp}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border bg-transparent">
          <div className="flex items-start gap-3">
            <Instagram className="text-[#f3f3f3] w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-[#f3f3f3] font-semibold">Redes Sociales</h3>
              <div className="mt-2 space-y-2">
                <p>
                  <span className="text-muted-foreground">Instagram:</span>{' '}
                  <span className='text-[#f3f3f3]'>
                  {businessInfo.social.instagram}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">Facebook:</span>{' '}
                  <span className='text-[#f3f3f3]'>
                  {businessInfo.social.facebook}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 