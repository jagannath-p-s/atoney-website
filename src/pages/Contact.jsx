// src/pages/Contact.js
import React, { useState } from 'react';
import SEO from '../components/SEO';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Loader2,
  CheckCircle,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const [touched, setTouched] = useState({});

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getFieldError = (fieldName) => {
    if (!touched[fieldName]) return '';
    
    switch (fieldName) {
      case 'name':
        return formData.name.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !validateEmail(formData.email) ? 'Please enter a valid email' : '';
      case 'subject':
        return formData.subject.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return formData.message.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ ...formState, isSubmitting: true });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTouched({});
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-7 h-7 text-indigo-600" />,
      content: "ATONEY\nAL Mansoori Building \nOffice 414 \nAl Quasis Dubai",
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-600" />,
      content: "+971 65460620\n+971 527451896\n+971 52451803",
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      content: "info@atoney.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Contact Us - Atoney"
        description="Get in touch with Atoney for your product certification needs in UAE and KSA. Reach out to us via email, phone, or visit our office in Dubai."
      />

      {/* Hero Section */}
      <div className="relative bg-black px-4 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We're here to help you with your product certification and compliance needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div className="mt-1 transform group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600 font-bold whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div className="flex items-start">
                <div className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
                  <div className="flex space-x-4 mt-4">
                    {[
                      { Icon: Facebook, href: "https://www.facebook.com/servyxcertification" },
                      { Icon: Linkedin , href: "https://www.linkedin.com/company/servyx-certification/" },
                      { Icon: Instagram, href: "https://www.instagram.com/atoneyquality?utm_source=qr&igsh=MWV5ZGpxb2NvbmN%20hMg==" },
                    ].map(({ Icon, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {formState.isSubmitted && (
              <Alert className="mb-6 bg-green-50 border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Thank you for contacting us! We'll get back to you shortly.
                </AlertDescription>
              </Alert>
            )}

            {formState.error && (
              <Alert className="mb-6 bg-red-50 border-red-200">
                <AlertDescription className="text-red-800">
                  {formState.error}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-gray-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      touched[field] && getFieldError(field)
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-indigo-500'
                    } focus:outline-none focus:ring-2 transition-colors`}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  />
                  {touched[field] && getFieldError(field) && (
                    <p className="mt-1 text-sm text-red-600">{getFieldError(field)}</p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    touched.message && getFieldError('message')
                      ? 'border-red-300 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-indigo-500'
                  } focus:outline-none focus:ring-2 transition-colors`}
                  rows="5"
                  placeholder="Your Message"
                />
                {touched.message && getFieldError('message') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={formState.isSubmitting}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg ${
                  formState.isSubmitting
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white font-medium transition-colors duration-300`}
              >
                {formState.isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Location</h2>
          <div className="bg-white p-4 rounded-2xl shadow-xl">
  <a
    href="https://maps.app.goo.gl/R8AzAiDbjLgqLMfXA"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <iframe
      title="Atoney Office Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.145631407507!2d55.3847552!3d25.2806408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536416936d4bc49%3A0x6f5ee12677ffb1a!2sATONEY%20QUALITY%20AND%20STANDARDIZATION%20CONSULTANCY!5e0!3m2!1sen!2sin!4v1706523456789!5m2!1sen!2sin"
      width="100%"
      height="450"
      allowFullScreen=""
      loading="lazy"
      className="rounded-lg pointer-events-none"
    />
  </a>
</div>


        </div>
      </div>
    </div>
  );
};

export default Contact;