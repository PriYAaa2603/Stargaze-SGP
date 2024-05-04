import Footer from '../Components/Footer';
import AstronomyPictureOfDay from '../Components/HomeComponents/AstronomyPictureOfDay';
import Banner from '../Components/HomeComponents/Banner';
import FeaturedContent from '../Components/HomeComponents/FeaturedContent';

import back11 from '/bg7.jpg'; // Import your background image
export default function Home() {
    const apiKey = '8wam3qZnZsmW0Iw29msGZVSJj8m6HN6rgmIWO8Wq';
    return (
        <div className='mt-20'style={{ backgroundImage: `url(${back11})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
           <div >
               <Banner />
               <FeaturedContent />
               <AstronomyPictureOfDay apiKey={apiKey} />
            </div>
            {/* Footer */}
            <div className=''>
                <Footer />
            </div>
        </div>

    );
}
