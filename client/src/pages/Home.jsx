import Footer from '../Components/Footer';
import Asteroids from '../Components/HomeComponents/Asteroids';
import AstronomyPictureOfDay from '../Components/HomeComponents/AstronomyPictureOfDay';
import Banner from '../Components/HomeComponents/Banner';
import ContactUs from '../Components/HomeComponents/ContactUs';
import EPICImagery from '../Components/HomeComponents/EPICImagery';
import FeaturedContent from '../Components/HomeComponents/FeaturedContent';


import NearEarthObjects from '../Components/HomeComponents/NearEarthObjects';

export default function Home() {
    const apiKey = 'GoVBbaVMS2c1ESnrNk99mugUWO505BMBgVpj6O0q';

   
    return (
        <div >
           <div >
               <Banner className=' '/>
               <FeaturedContent />
               <AstronomyPictureOfDay apiKey={apiKey} />
               <NearEarthObjects apiKey={apiKey} />
               <Asteroids apiKey={apiKey} />
               <EPICImagery apiKey={apiKey} />
               <ContactUs />

            </div>
            {/* Footer */}
            <div className=''>
                <Footer />
            </div>
        </div>

    );
}
