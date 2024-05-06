/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import back1 from '/blackbg.jpg';
import { GrNext, GrPrevious } from "react-icons/gr";

const Asteroids = ({ apiKey }) => {
  const [asteroids, setAsteroids] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const startDate = new Date(); // Today's date
        const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days after start date
        const formattedStartDate = startDate.toISOString().split('T')[0]; // Format start date as YYYY-MM-DD
        const formattedEndDate = endDate.toISOString().split('T')[0]; // Format end date as YYYY-MM-DD

        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedStartDate}&end_date=${formattedEndDate}&api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch asteroids');
        }
        const data = await response.json();
        setAsteroids(data.near_earth_objects[formattedStartDate]);
      } catch (error) {
        console.error('Error fetching asteroids:', error);
      }
    };

    fetchAsteroids();
  }, [apiKey]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4, // Number of slides to show initially
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Medium screens and above
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  if (asteroids.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-10' style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl p-8  mx-auto ">
        <h2 className="text-4xl font-bold text-center  text-gray-100">Near Earth Asteroids 🚀</h2>
        <p className="mt-4 text-lg text-gray-300 text-center mb-8">Explore asteroids passing close to Earth detected by NASA</p>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {asteroids.map((asteroid) => (
              <div key={asteroid.id} className="mx-auto relative mb-12 cursor-pointer px-8">
                <div className="border-2 rounded-lg shadow-md p-4">
                  <h3 className="text-lg text-slate-300  font-semibold mb-2">{asteroid.name}</h3>
                  <p className='text-slate-400'><strong className='text-slate-300'>Estimated Diameter (meters):</strong> {asteroid.estimated_diameter.meters.estimated_diameter_max}</p>
                </div>
              </div>
            ))}
          </Slider>
          <button className="absolute top-1/2 transform -translate-y-1/2 left-2   text-white border-2 bg-[#03010a] p-1 rounded-full" onClick={prevSlide}><GrPrevious size={32} /></button>
          <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white border-2 bg-[#03010a] p-1 rounded-full" onClick={nextSlide}><GrNext size={32} /></button>
        </div>
      </div>
    </div>
  );
};

export default Asteroids;
