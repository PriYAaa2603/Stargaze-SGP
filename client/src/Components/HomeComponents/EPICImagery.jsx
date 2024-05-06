/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import back1 from '/blackbg.jpg';
import { GrNext, GrPrevious } from "react-icons/gr";

const EPICImagery = ({ apiKey }) => {
  const [imageryData, setImageryData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEPICImagery = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch EPIC imagery');
        }
        const data = await response.json();
        setImageryData(data);
      } catch (error) {
        console.error('Error fetching EPIC imagery:', error);
      }
    };

    fetchEPICImagery();
  }, [apiKey]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageryData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageryData.length - 1 : prevIndex - 1));
  };

  if (!imageryData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} id="epic">
    <div className="max-w-3xl mx-auto py-20 relative">
      <h2 className="text-4xl font-bold text-center  text-gray-100">EPIC Imagery 🪐</h2>
      <p className="mt-4 text-lg text-gray-300 text-center mb-8">Explore Earth as seen by NASA&apos;s EPIC camera aboard the DSCOVR spacecraft</p>
      <div className="relative overflow-hidden">
        <div className="flex">
          {imageryData.map((item, index) => (
            <div key={item.identifier} className={`w-full ${index === currentIndex ? '' : 'hidden'}`}>
              <div className=" rounded-lg shadow-md p-4">
                
                <img
                  src={`https://api.nasa.gov/EPIC/archive/natural/${item.date.slice(0, 4)}/${item.date.slice(5, 7)}/${item.date.slice(8, 10)}/png/${item.image}.png?api_key=${apiKey}`}
                  alt={item.caption}
                  className="h-auto  rounded-full mb-4"
                />
                <h3 className="text-sm text-center text-[#647094] font-semibold mb-2">{item.caption}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 transform -translate-y-1/2 left-2   text-white  border-2 bg-[#03010a] p-1 rounded-full" onClick={prevSlide}><GrPrevious size={32} /></button>
      
        <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white border-2 bg-[#03010a] p-1 rounded-full" onClick={nextSlide}><GrNext size={32} /></button>
        
      </div>
    </div>
    </div>
  );
};

export default EPICImagery;
