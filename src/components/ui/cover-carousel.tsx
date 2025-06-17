import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './cover-carousel.css'
import type { ImageCategory } from "@/data/gallery-images";
import { galleryImages } from "@/data/gallery-images";

interface CoverCarouselProps {
  selectedCategory?: ImageCategory;
}

export function CoverCarousel({ selectedCategory = "default" }: CoverCarouselProps) {
  const swiperRef = useRef<any>(null);
  const [key, setKey] = useState<number>(0); // Key para forzar reinicio del Swiper

  // Filtrar imágenes según la categoría seleccionada
  const filteredImages = galleryImages.filter(
    (image) => image.category === selectedCategory
  );

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    // 1. Forzar reinicio del Swiper cuando cambia la categoría
    setKey((prev: number) => prev + 1);
    
    // 2. Pequeño delay para asegurar que el DOM se ha actualizado
    setTimeout(() => {
      if (swiperRef.current?.swiper) {
        const swiper = swiperRef.current.swiper;
        swiper.update();
        swiper.slideTo(1, 0);
      }
    }, 50);
  }, [selectedCategory]);

  return (
    <div className="w-full bg-[#121212] py-2 px-4">
      <div className="relative h-[30vh]">
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />
        
        <Swiper
          key={key} // Key para forzar reinicio
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.6}
          spaceBetween={20}
          loop={true}
          initialSlide={1}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          speed={500}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Mousewheel, Autoplay, Pagination]}
          className="w-full h-full custom-coverflow-swiper [&_.swiper-pagination-bullet]:!bg-white/50 [&_.swiper-pagination-bullet-active]:!bg-white"
          onAfterInit={(swiper) => {
            swiper.update();
            swiper.slideTo(1, 0);
          }}
        >
          {filteredImages.map((image) => (
            <SwiperSlide
              key={image.id}
              className="flex items-center justify-center h-full !overflow-visible"
            >
              <img
                src={image.url}
                alt={image.description}
                className="rounded-2xl shadow-xl object-cover w-[220px] h-[260px] bg-[#121212]"
                loading="eager" // Forzar carga inmediata
                onLoad={() => {
                  if (swiperRef.current?.swiper) {
                    const swiper = swiperRef.current.swiper;
                    swiper.update();
                    swiper.updateSlides();
                  }
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link 
        to="/login" 
        className="block w-full bg-white hover:bg-white/90 text-black font-bold py-4 px-6 rounded-xl text-center text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] mt-4"
      >
        Quiero reservar un turno
      </Link>
    </div>
  );
}