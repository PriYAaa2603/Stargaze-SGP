/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import back1 from '/blackbg.jpg';

const AstronomyPictureOfDay = ({ apiKey }) => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchApodData();
  }, [apiKey]);

  if (!apodData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-cover bg-center px-8" style={{ backgroundImage: `url(${back1})` }} id='astronomy'>
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">Astronomy Picture of the Day 🔭
</h1>
      {/* sub title */}
      <p className="text-center text-lg text-gray-300 mb-8">Discover the cosmos with the Astronomy Picture of the Day, showcasing the vast beauty of our universe.</p>
      
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-center">
          <div className="lg:w-1/2">
            
            <h2 className="text-2xl font-semibold text-gray-300">{apodData.title}</h2>
            <p className="text-gray-400 mt-4">{apodData.explanation}</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img src={apodData.url} alt={apodData.title} className="w-full h-auto rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyPictureOfDay;
