// src/pages/About.js

import React from 'react';
import SEO from '../components/SEO';
import {
  Users,
  Eye,
  Goal,
  Star,
  Shield,
  Zap,
} from 'lucide-react'; // Importing the selected Lucide React icons

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="About Us - Atoney"
        description="Learn more about Atoney, our vision, mission, and how we assist exporters, importers, and manufacturers in the MENA region."
      />

      {/* Hero Section */}
      <div className=" m-2 bg-black relative  py-10 lg:py-32 rounded-lg p-2">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-500/30 rounded-full blur-3xl " />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About Atoney
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted partner in certification and compliance across the MENA region
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Who We Are Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" /> {/* Updated Icon */}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Atoney specializes in assisting exporters, importers, and manufacturers in gaining market access for regulated products in the MENA region. Our technically competent team provides comprehensive support for product certification and compliance.
              </p>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" /> {/* Updated Icon */}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be a global partner for a "safe and excellent world." We aim to be our clients' trusted partner for quality, safety, security, and sustainability solutions that deliver real value in both physical and digital worlds.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Goal className="w-7 h-7 text-white" /> {/* Updated Icon */}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To help our clients access GCC and Middle East markets through certified excellence. We provide services with the highest level of trustworthiness, dependability, and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Excellence */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" /> {/* Updated Icon */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards in all our services, ensuring quality and professionalism in every interaction.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" /> {/* Updated Icon */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Integrity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We operate with complete transparency and honesty, building lasting trust with our clients and partners.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" /> {/* Updated Icon */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We continuously evolve our services to meet changing market needs and embrace new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
