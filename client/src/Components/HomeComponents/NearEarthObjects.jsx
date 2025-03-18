// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import back1 from '/blackbg.jpg';
// import { GrNext, GrPrevious } from "react-icons/gr";

// const NearEarthObjects = ({ apiKey }) => {
//   const [neoData, setNeoData] = useState(null);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const fetchNeoData = async () => {
//       try {
//         const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
//         const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apiKey}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log("Raw API Response:", data); 
//         // Extract the relevant NEO data for today
//             const neoObjects = data.near_earth_objects[today];

//             const formattedData = neoObjects.map(neo => ({
//                 name: neo.name,
//                 date: today,
//                 diameter_min: neo.estimated_diameter.kilometers.estimated_diameter_min,
//                 diameter_max: neo.estimated_diameter.kilometers.estimated_diameter_max,
//                 hazardous: neo.is_potentially_hazardous_asteroid ? "Yes" : "No",
//                 velocity_kph: neo.close_approach_data[0]?.relative_velocity.kilometers_per_hour,
//                 miss_distance_km: neo.close_approach_data[0]?.miss_distance.kilometers
//             }));

//             console.table(formattedData); // Display data in table format
//             setNeoData(formattedData); // Update state
//         setNeoData(data);
//       } catch (error) {
//         console.error('Error fetching NEO data:', error);
//       }
//     };

//     fetchNeoData();
//   }, [apiKey]);

//   const nextSlide = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const prevSlide = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   if (!neoData) {
//     return <div>Loading...</div>;
//   }

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 1,
//     slidesToShow: 3, // Number of slides to show initially
//     /* no slide buttons */
//     arrows: false,


//     responsive: [
//       {
//         breakpoint: 1024, // Medium screens and above
//         settings: {
//           slidesToShow: 3,
//         }
//       },
//       {
//         breakpoint: 768, // Small screens
//         settings: {
//           slidesToShow: 1,
//         }
//       },
//       {
//         breakpoint: 480, // Extra small screens
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} id='objects'>
//       <div className="max-w-6xl text-center py-10 p-4 mx-auto">
//         <h2 className="text-4xl font-bold text-center  text-gray-100">Near Earth Objects 🛰</h2>
//         <p className="mt-4 text-lg text-gray-300 text-center mb-8">Explore the Near Earth Objects (NEOs) detected today by NASA.</p>
//         <div className="relative">
//           <Slider ref={sliderRef} {...settings}>
//             {Object.keys(neoData.near_earth_objects).map((date) => (
//               neoData.near_earth_objects[date].map((neo) => (
//                 <div key={neo.id} className="mx-auto relative mb-12 cursor-pointer  px-8">
//                   <div className=" rounded-lg  shadow-md p-4 border-2" >
//                     <h3 className="text-lg font-semibold mb-2">{neo.name}</h3>
//                     <p className='text-slate-400'><strong className='text-slate-300'>Close Approach Date:</strong> {neo.close_approach_data[0].close_approach_date_full}</p>
//                     <p className='text-slate-300'><strong className='text-slate-300'>Diameter:</strong> {neo.estimated_diameter.meters.estimated_diameter_min} - {neo.estimated_diameter.meters.estimated_diameter_max} meters</p>
//                     <p className='text-slate-300'><strong className='text-slate-300'>Relative Velocity:</strong> {neo.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
//                     <p className='text-slate-300'><strong className='text-slate-300'>Miss Distance:</strong> {neo.close_approach_data[0].miss_distance.kilometers} kilometers</p>
//                     <p className='text-slate-300'><strong className='text-slate-300'>Potentially Hazardous:</strong> {neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
//                   </div>
//                 </div>
//               ))
//             ))}
//           </Slider>
//           <button className="absolute top-1/2 transform -translate-y-1/2 left-2   text-white  border-2 bg-[#03010a] p-1 rounded-full" onClick={prevSlide}><GrPrevious size={32} /></button>
//           <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white border-2 bg-[#03010a] p-1 rounded-full" onClick={nextSlide}><GrNext size={32} /></button>
//         </div>
//       </div>
//     </div>
//   );
// };

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import back1 from '/blackbg.jpg';
import { GrNext, GrPrevious } from "react-icons/gr";

const NearEarthObjects = ({ apiKey }) => {
  const [neoData, setNeoData] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchNeoData = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10);
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apiKey}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log("Raw API Response:", data);

        const neoObjects = data.near_earth_objects[today] || [];

        const formattedData = neoObjects.map(neo => ({
          id: neo.id,
          name: neo.name,
          closeApproachDate: neo.close_approach_data[0]?.close_approach_date_full || 'Unknown',
          diameter_min: neo.estimated_diameter.meters.estimated_diameter_min,
          diameter_max: neo.estimated_diameter.meters.estimated_diameter_max,
          velocity_kph: neo.close_approach_data[0]?.relative_velocity.kilometers_per_hour || 'N/A',
          miss_distance_km: neo.close_approach_data[0]?.miss_distance.kilometers || 'N/A',
          hazardous: neo.is_potentially_hazardous_asteroid ? "Yes" : "No"
        }));

        console.table(formattedData);
        setNeoData(formattedData); // Properly setting the extracted NEO data
      } catch (error) {
        console.error('Error fetching NEO data:', error);
      }
    };

    fetchNeoData();
  }, [apiKey]);

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

  if (!neoData.length) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} id='objects'>
      <div className="max-w-6xl text-center py-10 p-4 mx-auto">
        <h2 className="text-4xl font-bold text-gray-100">Near Earth Objects 🛰</h2>
        <p className="mt-4 text-lg text-gray-300 mb-8">Explore the Near Earth Objects (NEOs) detected today by NASA.</p>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {neoData.map((neo) => (
              <div key={neo.id} className="mx-auto relative mb-12 cursor-pointer px-8">
                <div className="rounded-lg shadow-md p-4 border-2">
                  <h3 className="text-lg font-semibold mb-2 text-white">{neo.name}</h3>
                  <p className='text-slate-400'><strong className='text-slate-300'>Close Approach Date:</strong> {neo.closeApproachDate}</p>
                  <p className='text-slate-300'><strong>Diameter:</strong> {neo.diameter_min} - {neo.diameter_max} meters</p>
                  <p className='text-slate-300'><strong>Relative Velocity:</strong> {neo.velocity_kph} km/h</p>
                  <p className='text-slate-300'><strong>Miss Distance:</strong> {neo.miss_distance_km} km</p>
                  <p className='text-slate-300'><strong>Potentially Hazardous:</strong> {neo.hazardous}</p>
                </div>
              </div>
            ))}
          </Slider>
          <button className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white border-2 bg-[#03010a] p-1 rounded-full" onClick={prevSlide}>
            <GrPrevious size={32} />
          </button>
          <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white border-2 bg-[#03010a] p-1 rounded-full" onClick={nextSlide}>
            <GrNext size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NearEarthObjects;

