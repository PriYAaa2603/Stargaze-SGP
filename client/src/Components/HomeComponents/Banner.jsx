
import BannerImg from '/9.png'; 
import back1 from '/blackbg.jpg';

export default function Banner() {
  return (
    <div className=" py-12 px-4 md:px-0" style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} id='home'>
      <div className="max-w-7xl mt-40 md:mt-20 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - site description */}
        <div className="text-white md:w-2/3 mb-8 rounded-full px-10 py-8 md:mb-0 md:mr-8  bg-opacity-0 h-[400px] flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10 text-center gap-y-4 text-blue-100 ">Embark on a Journey Through the Cosmos with <span className='text-blue-300'>StarGaze 💫</span></h1>
          <p className="text-lg text-center">Immerse yourself in the wonders of space and astronomy with StarGaze. Explore breathtaking images captured by NASA&apos;s telescopes and spacecraft, showcasing the beauty of distant galaxies, nebulae, and planets.</p>
          <p className="text-lg mt-2 text-center">Delve into the latest news and discoveries in space exploration and technology transfer, and learn about the impact of space research on our daily lives.</p>
        </div>


        {/* Right side - banner image */}
        <div className="md:w-1/3">
          <img src={BannerImg} alt="Banner" className="h-[420px]  mt-20 md:mt-1  w-96 animate-bounce-slow" />

        </div>
      </div>
    </div>
  );
}
