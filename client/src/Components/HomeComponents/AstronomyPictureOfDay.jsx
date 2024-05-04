import React, { useState, useEffect } from 'react';

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
    <div className="max-w-3xl bg-slate-50 p-10 mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Astronomy Picture of the Day</h2>
      <img src={apodData.url} alt={apodData.title} className="w-full h-auto rounded-lg shadow-md" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{apodData.title}</h3>
        <p className="mt-2 text-gray-600">{apodData.explanation}</p>
      </div>
    </div>
  );
};

export default AstronomyPictureOfDay;
