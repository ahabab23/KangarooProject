// LogoCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import dod from '../../Assets/dod.png';
import somalia from '../../Assets/somalia.png';
import kiambu from '../../Assets/kiambu2.png';

// Example logos
const logos = [
  { src: somalia, alt: 'Federal Government of Somalia' },
  { src: dod, alt: 'Department Of Defence - Kenya' },
  { src: kiambu, alt: 'County Government Of Kiambu - Kenya' },
  { src: somalia, alt: 'Federal Government of Somalia' },
  { src: dod, alt: 'Department Of Defence - Kenya' },
  { src: kiambu, alt: 'County Government Of Kiambu - Kenya' },
];

const Carousel = () => {
  return (
    <div className="py-8 bg-gray-50">
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-36 h-auto mx-auto filter grayscale hover:grayscale-0 transition duration-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
