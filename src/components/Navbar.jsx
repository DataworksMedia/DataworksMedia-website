import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] bg-white fixed drop-shadow-lg z-20">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold sm:text-4xl text-Red ">
            DATAWORKS
          </h1>
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">MEDIA</h1>
          <ul className="hidden md:flex">
            <motion.li
              className="cursor-pointer hover:text-Red duration-300"
              whileTap={{ scale: 0.7 }}
            >
              <Link to="Home" smooth={true} duration={500}>
                Home
              </Link>
            </motion.li>
            <motion.li
              className="cursor-pointer hover:text-Red duration-300"
              whileTap={{ scale: 0.7 }}
            >
              <Link to="About" smooth={true} offset={-150} duration={500}>
                About
              </Link>
            </motion.li>
            <motion.li
              className="cursor-pointer hover:text-Red duration-300"
              whileTap={{ scale: 0.7 }}
            >
              <Link to="Services" smooth={true} offset={-50} duration={500}>
                Services
              </Link>
            </motion.li>
            {/*}
            <motion.li
              className="cursor-pointer hover:text-Red duration-300"
              whileTap={{ scale: 0.7 }}
            >
              <Link
                to="Testimonials"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Testimonials
              </Link>
            </motion.li>
  */}
          </ul>
        </div>

        <div className="hidden lg:flex pr-8">
          <motion.button whileTap={{ scale: 0.7 }} className="px-8 py-3">
            <Link to="Contact" smooth={true} duration={500}>
              Contact Us
            </Link>
          </motion.button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-8" /> : <XMarkIcon className="w-8" />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
        <motion.li
          className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-Red duration-300"
          whileTap={{ scale: 0.7 }}
        >
          <Link onClick={handleClose} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </motion.li>
        <motion.li
          className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-Red duration-300"
          whileTap={{ scale: 0.7 }}
        >
          <Link
            onClick={handleClose}
            to="About"
            smooth={true}
            offset={-150}
            duration={500}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-Red duration-300"
          whileTap={{ scale: 0.7 }}
        >
          <Link
            onClick={handleClose}
            to="Services"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Services
          </Link>
        </motion.li>
        {/*
        <motion.li
          className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-Red duration-300"
          whileTap={{ scale: 0.7 }}
        >
          <Link
            onClick={handleClose}
            to="Testimonials"
            smooth={true}
            offset={-150}
            duration={500}
          >
            Testimonials
          </Link>
        </motion.li>
*/}
        <div className="my-4">
          <motion.button whileTap={{ scale: 0.7 }} className="px-8 py-3">
          <Link onClick={handleClose} to="Contact" smooth={true} offset={-50} duration={500}>
              Contact Us
            </Link>
          </motion.button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
