import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import logo from "/logo.png";
import back11 from "/blogo2.png";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '../redux/user/userSlice';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsProfileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleSignOut = async () => {
        try {
            dispatch(signOutUserStart());
            const res = await fetch('/api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                dispatch(deleteUserFailure(data.message));
                return;
            }
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserFailure(data.message));
        }
    };

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header ref={headerRef} className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-50  ${isSticky ? "border-b border-gray-200" : ""}`} style={{ backgroundImage: `url(${back11})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
            <nav className="py-3 lg:px-14 px-4 ">
                <div className="flex justify-between items-center text-base gap-8">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="h-14 w-42" />
                    </Link>

                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) =>
                            <ScrollLink key={path} to={path} spy={true} smooth={true} offset={-100} className="block text-base text-gray-300 hover:text-blue-500 hover:text-brandPrimary">{link}</ScrollLink>
                        )}
                    </ul>

                    <div className=" flex flex-row gap-4">
                        <div className="md:hidden  pt-2">
                            <button onClick={toggleMenu} className="focus:outline-none bg-[#39497e] rounded-sm ">
                                {isMenuOpen ? (<FaTimes className="h-6 w-6 text-neutralDgrey" />) : (<FaBars className="h-6 w-6 text-neutralDgrey" />)}
                            </button>
                            <div className={`space-y-4 px-4 mt-4 rounded-xl py-7 h-full bg-gray-800 ${isMenuOpen ? "block fixed top-14 right-0" : "hidden"}`} style={{ backgroundImage: `url(${back11})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                                {navItems.map(({ link, path }) =>
                                    <ScrollLink key={path} to={path} spy={true} smooth={true} offset={-100} onClick={toggleMenu} className="block text-base text-white hover:text-brandPrimary first:font-medium p-4 rounded-md">{link}</ScrollLink>
                                )}
                            </div>
                        </div>

                        <button onClick={currentUser ? toggleProfileMenu : () => window.location.href='/sign-in'}>
                            {currentUser ? (
                                <img
                                    src={currentUser.avatar}
                                    alt='profile'
                                    className="w-11 h-10 -mr-2 rounded-full shadow-md border-2 border-white"
                                />
                            ) : (
                                <span className="text-white">Sign In</span>

                            )}
                        </button>

                        {isProfileMenuOpen && currentUser && (
                            <div className="absolute top-14 right-0 mt-4  rounded-xl py-2  md:mr-8 shadow-lg bg-gray-400 " style={{ backgroundImage: `url(${back11})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                              
                               {/* button to link to profile */}
                               <Link to="/profile" className="block text-white hover:text-blue-500 hover:text-brandPrimary first:font-medium px-4 py-2">Profile</Link>
                            {/* Logout */}
                              <button onClick={handleSignOut} className="block text-white  hover:text-red-300  first:font-medium px-4 py-2">Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
