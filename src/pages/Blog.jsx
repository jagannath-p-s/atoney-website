// Blog.jsx
import React from 'react';
import SEO from '../components/SEO';
import BlogPost from '../components/BlogPost';
import ledLights from '../../assets/led-lights.jpeg';
import moiatGreen from '../../assets/moiat-green.webp';

import saberSystem from '../../assets/saber-system.jpg';
import gsoStandards from '../../assets/gso-standards.jpg';

const Blog = () => {
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
      image: saberSystem,
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
    <div className="container mx-auto p-4">
      <SEO 
        title="Blog - Atoney" 
        description="Stay updated with the latest news and insights on product certification and regulatory standards in UAE and KSA." 
      />
      <h1 className="text-2xl font-bold mb-4 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogPost key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
