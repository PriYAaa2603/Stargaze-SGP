

import Footer from '../Components/Footer';

export default function Home() {

    return (
        <div className=' bg-blue-100'>
           <div className='flex justify-center items-center h-screen'>
                <h1 className='text-4xl font-bold text-center'>Welcome to the Home Page</h1>
            </div>
  
          


          
            {/* Footer */}
            <div className='mt-10'>
                <Footer />
            </div>
        </div>

    );
}
