import React from 'react';

const BlogPost = ({ blog }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="mb-4">{blog.excerpt}</p>
        <a href={blog.link} className="text-blue-500 hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;
