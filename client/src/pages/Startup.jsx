import React from 'react';
import BannerImg from '/banner.svg'; // Assuming banner.svg is in the same directory
import back11 from '/bg3.jpg'; // Assuming bg3.jpg is in the same directory
import { Link } from 'react-router-dom';

export default function Startup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${back11})` }}>
      <div className="max-w-3xl md:mt-32 py-4 lg:mt-16 gap-y-36 mx-auto rounded-3xl text-center ">
        
        <div className="bg-clip-padding  rounded-3xl p-4 backdrop-filter backdrop-blur-md bg-opacity-0">
        <div className='mb-4'>
        <h1 className="text-5xl font-bold text-blue-400">Welcome to <span className='text-blue-100'>StarGaze</span></h1>
        <p className="text-lg text-white  mt-4 md:mt-4 px-8">Explore the wonders of the universe with daily astronomy news, breathtaking images, and insightful articles.</p>
        <div className=" ">
          <img src={BannerImg} alt="Banner" className="w-80 h-80 max-w-full mx-auto" />
        </div>
        <Link to="/sign-up">
        <span className="mt-8 md:mt-8 mb-2  px-6 py-3 bg-blue-100 text-blue-900 text-base  font-extrabold rounded-lg shadow-md hover:bg-blue-200 focus:outline-none">Start Here</span>
        </Link>
        </div>
        </div>
       
      </div>
    </div>
  );
}
