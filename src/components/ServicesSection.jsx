import React from 'react';
import { 
  ScrollText, 
  Microscope, 
  ClipboardCheck,
  Building2,
  FileCheck,
  BadgeCheck,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: ScrollText,
    title: "Product Certification",
    description: "Atoney provides consultation for quality certificates meeting requirements for UAE/KSA/International standards, ensuring the highest standards and prompt delivery.",
    features: ["UAE Standards", "KSA Standards", "International Compliance"],
    color: "blue",
    link: "/services"
  },
  {
    icon: Microscope,
    title: "Inspection Services",
    description: "Our comprehensive inspection services ensure safety and compliance across various equipment and shipments, providing thorough evaluations and detailed reports.",
    features: ["Lifting Equipment Inspection", "Containers Inspection", "Pre-Shipment Inspection"],
    color: "indigo",
    link: "/services"
  },
  {
    icon: ClipboardCheck,
    title: "Management System Consultation",
    description: "Our consultation services assist you in obtaining the certification you seek, ensuring compliance with international standards.",
    features: ["ISO Certification", "Quality Management", "Process Optimization"],
    color: "purple",
    link: "/services"
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    indigo: "from-indigo-500 to-indigo-600",
    purple: "from-purple-500 to-purple-600",
    violet: "from-violet-500 to-violet-600"
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6 space-y-4">
        {/* Icon Header */}
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses[service.color]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-gray-900 font-heading">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features List */}
        <ul className="space-y-2 text-left">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <a
          href={service.link}
          className="mt-6 inline-block w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium text-center rounded-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-2 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;