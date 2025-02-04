import React, { useState, useEffect } from 'react';
import banner1 from '../assets/images/banners/banner1.png';
import banner2 from '../assets/images/banners/banner2.png';
import banner3 from '../assets/images/banners/banner3.png';

const Banner = () => {
  const banners = [banner1, banner2, banner3];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-sm p-4">
      {/* Banner Container */}
      <div className="relative h-48 sm:h-64 md:h-96 max-h-[480px] rounded-sm">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transition: 'opacity 1s ease-in-out', // Smooth fade animation
            }}
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-0 rounded-full transition-colors focus:outline-none
              ${
                currentSlide === index
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
