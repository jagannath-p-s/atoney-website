// pages/Services.jsx
import React, { useEffect } from 'react';
import {
  FaCheckCircle,
  FaCogs,
  FaUsers,
  FaShippingFast,
} from 'react-icons/fa';

const CheckItem = ({ children }) => (
  <li className="flex items-center space-x-3 mt-2 text-gray-700">
    <FaCheckCircle className="text-indigo-600 flex-shrink-0 w-5 h-5" />
    <span className="text-base">{children}</span>
  </li>
);

const Section = ({ title, children, icon: Icon, id }) => (
  <section className="my-12" id={id}>
    <div className="flex items-center space-x-4 mb-6">
      {Icon && (
        <div className="bg-white p-3 rounded-lg">
          <Icon className="text-indigo-700 w-6 h-6" />
        </div>
      )}
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-6">{children}</div>
  </section>
);

const ServiceCard = ({ title, description, items, id }) => (
  <div
    id={id}
    className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mb-6"
  >
    <h4 className="text-2xl font-bold text-indigo-900 mb-2">{title}</h4>
    <p className="text-gray-700 mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <CheckItem key={idx}>{item}</CheckItem>
      ))}
    </ul>
  </div>
);

const Services = () => {
  useEffect(() => {
    // Handle scroll to section if hash is present in URL
    const hash = window.location.hash;
    if (hash) {
      // Add a slight delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const headerOffset = 100; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10">
      {/* Hero Section */}
      <div className="relative bg-black py-16 rounded-lg overflow-hidden mb-10 mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-500/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Services
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Certification Section */}
        <div className="mb-12">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Why Product Certification is Important?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Product certification indicates that a product is safe and trustworthy. It serves as a benchmark of quality and helps consumers identify reputable manufacturers. Reputable companies reduce and minimize risks, demonstrating their commitment to quality and safety through certification.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Often required by government procurement policies, product certification is increasingly crucial as the market for low-cost, quick-to-market items grows. Organizations are adhering to these standards to ensure compliance and maintain trust.
            </p>
          </div>
        </div>

        {/* KSA Services Section */}
        <Section title="KSA Services">
          <ServiceCard
            id="saber"
            title="SABER Certification"
            description="SABER is an electronic platform that helps exporters and importers register products for the Saudi market. We assist in obtaining the Certificate of Conformity (CoC) for regulated products, ensuring they meet SASO standards and technical regulations."
            items={[
              'Textiles',
              'Food Contact Materials',
              'Packaging Products',
              'Electric Batteries',
              'Telecommunication Devices',
              'Personal Protective Equipment',
              'Machinery Products',
              'Others',
            ]}
          />
          <ServiceCard
            id="faseh"
            title="FASEH / SFDA"
            description="FASEH/SFDA is responsible for food, drug, and medical devices in Saudi Arabia. We guide you through the registration process and ensure product compliance for safe entry into the KSA market."
            items={[
              'Food Products',
              'Cosmetics',
              'Personal Care Products',
            ]}
          />
        </Section>

        {/* UAE Services Section */}
        <Section title="UAE Services">
          <ServiceCard
            id="inspection"
            title="Inspection"
            description="We offer comprehensive inspection services to ensure products meet UAE standards before entering the market."
            items={['SASO Inspection', 'Pre-Shipment Inspection', 'Container Inspection']}
          />
          <ServiceCard
            id="laboratory"
            title="Laboratory Testing (ISO 17025)"
            description="Our ISO 17025-accredited labs provide reliable testing services, ensuring compliance with UAE regulations for:"
            items={['Cosmetics', 'Perfumes', 'Food Contact Materials', 'Food', 'Others']}
          />
          <ServiceCard
            id="municipality"
            title="Dubai Municipality"
            description="Dubai Municipality requires product registration to safeguard public health and ensure consumer safety."
            items={['Montaji', 'Food Registration']}
          />
          <ServiceCard
            id="moiat"
            title="MOIAT (ECAS / EQM)"
            description="The Ministry of Industry and Advanced Technology (MOIAT) enforces standards for product safety and quality. Two major programs are:"
            items={[
              'ECAS (Emirates Conformity Assessment Scheme)',
              'EQM (Emirates Quality Mark)',
            ]}
          />
          <ServiceCard
            id="tdra"
            title="TDRA Registration"
            description="The Telecommunications and Digital Government Regulatory Authority (TDRA) regulates and certifies telecom devices to ensure their compliance with UAE telecom standards."
            items={['Telecommunication Devices']}
          />
        </Section>

        {/* Other Service Sections */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-12">
          {/* Management System Consultation */}
          <div id="consultation" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <FaCogs className="text-indigo-700 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Management System Consultation
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              We provide consultation services to assist you in obtaining various ISO certifications and ensuring compliance with international standards.
            </p>
            <ul className="space-y-2">
              <CheckItem>ISO 22000 Consultation & Certification</CheckItem>
              <CheckItem>HACCP Implementation</CheckItem>
              <CheckItem>ISO 9001 Consultation & Certification</CheckItem>
              <CheckItem>GMP Consultation & Certification</CheckItem>
            </ul>
          </div>

          {/* Training & Development */}
          <div id="training" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <FaUsers className="text-indigo-700 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Training & Development
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              We offer accredited training courses to empower your team with the skills and knowledge to maintain compliance.
            </p>
            <ul className="space-y-2">
              <CheckItem>ISO 9001 Lead Auditor Training</CheckItem>
              <CheckItem>ISO 22000 Lead Auditor Training</CheckItem>
              <CheckItem>ISO 45001 Lead Auditor Training</CheckItem>
              <CheckItem>HALAL Awareness Training</CheckItem>
            </ul>
          </div>

          {/* Shipment Clearance Services */}
          <div id="shipment" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <FaShippingFast className="text-indigo-700 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Shipment Clearance Services
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              We provide expert customs clearance services to ensure your goods adhere to the regulatory requirements, minimizing delays and unexpected costs.
            </p>
            <ul className="space-y-2">
              <CheckItem>Customs Documentation Submission</CheckItem>
              <CheckItem>Regulatory Compliance for Goods</CheckItem>
              <CheckItem>Efficient Import/Export Processing</CheckItem>
              <CheckItem>Compliance with International Trade Regulations</CheckItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
