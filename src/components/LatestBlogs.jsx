import React from 'react';

// Import images directly
import ledLights from '../assets/led-lights.jpeg';
import moiatGreen from '../assets/moiat-green.webp';
import gso from '../assets/gso.png';
import saberSystem from '../assets/saber-system.jpg';
import gsoStandards from '../assets/gso-standards.jpg';

const BlogPost = ({ blog }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {blog.excerpt}
        </p>
        <a
          href={blog.link}
          className="inline-block mt-4 text-blue-600 font-medium hover:underline hover:text-blue-700"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

const LatestBlogs = () => {
  const blogs = [
    {
      title: "SASO Tightens Certification for LED Lamps",
      image: ledLights,
      excerpt: "SASO has introduced new certification requirements for self-ballasted LED lamps, focusing on energy efficiency. These updates are crucial for importers and manufacturers aiming to enter the Saudi market.",
      link: "#"
    },
    {
      title: "MoIAT launches Green ICV to reward companies for adopting sustainable practices",
      image: moiatGreen,
      excerpt: "Abu Dhabi-UAE – The Ministry of Industry and Advanced Technology (MoIAT) has announced the adoption of the new Green ICV criteria and bonus within the National In Country Value (ICV) Program to encourage sustainability practices throughout various supply chains.",
      link: "#"
    },
    {
      title: "GSO Expands Certification for Electrical Products - Gulf Conformity Assessment Programs",
      image: gso,
      excerpt: "The Gulf Standardization Organization (GSO) has expanded its certification services for low voltage electrical products across the GCC, ensuring compliance with new technical regulations.",
      link: "#"
    },
    {
      title: "SASO Saber System Streamlines Import Process",
      image: saberSystem,
      excerpt: "SASO's Saber system continues to improve the importation process for regulated products in Saudi Arabia, reducing counterfeit goods and ensuring faster clearance.",
      link: "#"
    },
    {
      title: "MoIAT And EDCC Sign A MoU To Boost Local Defense Companies And Exports",
      image: moiatGreen, // Reusing the same image
      excerpt: "The Ministry of Industry and Advanced Technology (MoIAT) and the Emirates Defense Companies Council (EDCC) have signed a memorandum of understanding (MoU) to bolster local defence industries and promote exports.",
      link: "#"
    },
    {
      title: "GSO Aligns Standards with International Bodies",
      image: gsoStandards,
      excerpt: "GSO's partnership with international organizations ensures that certification standards across the GCC are aligned with global best practices, facilitating smoother trade.",
      link: "#"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600">
            Stay updated with the latest insights and news in certification and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogPost key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;