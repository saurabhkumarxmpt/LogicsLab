import React from "react";

const BlogCard = ({ image, date, readTime, title, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border max-w-4xl mx-auto my-4">
      
      {/* Image */}
      <div className="md:w-1/3 w-full h-60 md:h-auto">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div className="text-sm text-gray-500 mb-2">
          {date} &nbsp; • &nbsp; {readTime}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default BlogCard;
