import React, { useEffect, useState } from 'react';

const logos = [
  "https://servyxcertify.com/logo/logosaber.png",
  "https://servyxcertify.com/logo/logogcm.png",
  "https://servyxcertify.com/logo/logodm.png",
  "https://servyxcertify.com/logo/logoesma.png",
  "https://servyxcertify.com/logo/logomhp.png",
  // Repeat logos to create an infinite scroll effect
  "https://servyxcertify.com/logo/logosaber.png",
  "https://servyxcertify.com/logo/logogcm.png",
  "https://servyxcertify.com/logo/logodm.png",
  "https://servyxcertify.com/logo/logoesma.png",
  "https://servyxcertify.com/logo/logomhp.png",
];

const LogoScroll = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Add custom keyframe animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-scroll {
        animation: scroll 30s linear infinite;
      }

      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Double the logos array for seamless scrolling
  const scrollLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-4 md:py-2 relative overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Logo Container */}
      <div 
        className="flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex space-x-1 md:space-x-16 animate-scroll ${isHovered ? 'animation-play-state-paused' : ''}`}>
          {scrollLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
            >
              {/* Logo Card */}
              <div className="bg-white rounded-lg shadow-md p-0 md:p-6 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="h-24 md:h-16 lg:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;