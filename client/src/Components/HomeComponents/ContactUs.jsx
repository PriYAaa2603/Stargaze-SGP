import React from 'react';
import back1 from '/blackbg.jpg';
import contact from '/logo.png';

const ContactUs = () => {
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="contact" style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className=" border-2 rounded-lg shadow-md p-8 flex flex-col">
                    <h2 className="text-3xl font-semibold text-center text-[#7195cc] mb-6">Contact Information</h2>
                    <div className="flex-grow">
                        <p className="text-gray-100 mb-2">Phone: +91 9104426305</p>
                        <p className="text-gray-100 mb-2">Email: priyavagh005@gmail.com</p>
                    </div>
                    <div className="flex justify-center  mb-10">
                        <img src={contact} alt="Contact" className="w-64 h-48" />
                    </div>
                </div>
                <div className=" border-2 rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-semibold text-center text-[#7195cc]">Contact Form</h2>
                    <form className="mt-6">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-400 font-semibold">Name</label>
                            <input type="text" id="name" name="name" className="w-full border-2 rounded-md mt-2 px-4 py-2 text-slate-400 focus:outline-none focus:ring focus:border-blue-300" style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-400 font-semibold">Email</label>
                            <input type="email" id="email" name="email" className="w-full border-2 rounded-md mt-2 px-4 py-2 text-slate-400 focus:outline-none focus:ring focus:border-blue-300" style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-400 font-semibold">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full border-2 rounded-md mt-2 px-4 text-slate-400 py-2 focus:outline-none focus:ring focus:border-blue-300"style={{ backgroundImage: `url(${back1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
