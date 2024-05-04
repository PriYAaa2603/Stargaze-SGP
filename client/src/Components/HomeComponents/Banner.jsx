import React from 'react';
import BannerImg from '/9.png'; // Import your banner image
import back11 from '/bg5.png'; // Import your background image

export default function Banner() {
  return (
    <div className=" py-12 px-4 md:px-0" >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - site description */}
        <div className="text-white md:w-2/3 mb-8 rounded-full px-10 py-8 md:mb-0 md:mr-8 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-[400px] flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-center text-blue-300">Embark on a Journey Through the Cosmos with <span className='text-blue-100'> StarGaze</span></h1>
          <p className="text-lg text-center">Immerse yourself in the wonders of space and astronomy with StarGaze. Explore breathtaking images captured by NASA's telescopes and spacecraft, showcasing the beauty of distant galaxies, nebulae, and planets.</p>
          <p className="text-lg mt-2 text-center">Delve into the latest news and discoveries in space exploration and technology transfer, and learn about the impact of space research on our daily lives.</p>
        </div>


        {/* Right side - banner image */}
        <div className="md:w-1/3">
          <img src={BannerImg} alt="Banner" className="h-[480px]  w-96 animate-bounce-slow" />

        </div>
      </div>
    </div>
  );
}
