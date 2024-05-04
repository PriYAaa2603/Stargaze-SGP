import React from 'react';
import back11 from '/bg7.png'; // Import your background image
import FeatureImage1 from '/feed1.jpg';
import FeatureImage2 from '/feed2.jpeg';
import FeatureImage3 from '/feed3.jpg';

export default function Features() {
  return (
    <div className=" py-20 ">
      <div className="max-w-7xl mx-auto py-8 px-8 sm:px-6 lg:px-8 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-3xl ">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-100">Explore the Universe with StarGaze</h2>
          <p className="mt-4 text-lg text-gray-300">Discover the wonders of space through stunning images, captivating articles, and interactive features.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <img src={FeatureImage1} alt="Feature 1" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">Astronomy News</h3>
              <p className="mt-2 text-gray-600">Stay updated with the latest news and discoveries in the field of astronomy.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <img src={FeatureImage2} alt="Feature 2" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">Space Exploration</h3>
              <p className="mt-2 text-gray-600">Learn about current and past space exploration missions, and the mysteries of the cosmos.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <img src={FeatureImage3} alt="Feature 3" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">Interactive Tools</h3>
              <p className="mt-2 text-gray-600">Explore the night sky, planets, and celestial events with our interactive tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}