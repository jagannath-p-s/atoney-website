import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Banner from '../components/Banner';
import LogoScroll from '../components/LogoScroll';
import ServicesSection from '../components/ServicesSection';
import LatestBlogs from '../components/LatestBlogs';

const ShiningDecoration = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
    <div className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
  </div>
);

const ScrollRevealSection = ({ children, className = "" }) => {
  return (
    <div className={`opacity-0 translate-y-10 animate-reveal ${className}`}>
      {children}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    // Add custom styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shine {
        from {
          transform: translateX(-100%) rotate(45deg);
        }
        to {
          transform: translateX(200%) rotate(45deg);
        }
      }
      
      @keyframes blob {
        0% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }

      .animate-reveal {
        animation: reveal 0.8s ease-out forwards;
      }

      @keyframes reveal {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="font-sans antialiased overflow-hidden">
      <SEO
        title="Atoney - Product Certification UAE"
        description="Atoney provides top-notch certification and standardization consulting services in UAE and KSA. Get certified, get secured."
      />

      {/* Hero Section */}
      <div className="relative">
        <ShiningDecoration />
        <Banner />
      </div>

      {/* Welcome Section */}
      <section className="container mx-auto px-4 md:px-6 py-7 md:py-2 text-center bg-white relative">
        <ScrollRevealSection className="max-w-4xl mx-auto">
          <div className="relative inline-block">
            <h1 className="text-2xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              Welcome to{" "}
              <span className="relative inline-block text-blue-600">
                Atoney
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:shine" />
              </span>
            </h1>
          </div>
          <p className="text-lg   md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto indent-4 p-1">
            Atoney is a UAE-based firm founded in 2015 that provides certification and standardization consulting services. 
            Our expert team ensures transparency and excellence to meet your needs in innovative ways.
          </p>
          
        </ScrollRevealSection>
      </section>

      {/* Logo Scroll Section with Gradient Overlay */}
      <section className="relative py-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-80" />
        <LogoScroll />
      </section>

      {/* Services Section with Card Grid */}
      <ScrollRevealSection>
        <section className="container mx-auto px-4 md:px-6 py-10 md:py-10 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Explore a wide range of certification and consulting services tailored to your business needs.
            </p>
          </div>
          <ServicesSection />
        </section>
      </ScrollRevealSection>

      {/* Saudi Arabia Requirements with Glassmorphism */}
      <ScrollRevealSection>
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="relative backdrop-blur-sm bg-white/30 p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-indigo-900 mb-6">
                Saudi Arabia Requirements
              </h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 max-w-2xl mx-auto">
                Ensure your products meet regulatory standards and get approval on the SABER platform.
              </p>
              <a
                href="https://saber.sa/home/hscodes"
                className="group inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Check Requirements</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[45deg] -translate-x-full group-hover:animate-shine" />
              </a>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Blog Section with Card Grid */}
      <ScrollRevealSection>
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              Latest Blogs
            </h2>
          </div>
          <LatestBlogs />
        </section>
      </ScrollRevealSection>
    </div>
  );
};

export default Home;