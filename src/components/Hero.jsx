import React from 'react';
import {
  CameraIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

import dwm from '../assets/DATAWORKSMEDIA.png';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-white flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <motion.div
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: -100,
            opacity: 0.1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col justify-center md:items-start w-full px-2 py-8"
        >
          <p className="text-2xl">Data Driven & Results Focused</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Digital Marketing
          </h1>
          <p className="text-2xl">That's Our Business.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            className="py-3 lg:mx-0 mx-24 px lg:px-4  my-4"
          >
            <Link
              className="w-full px-8"
              to="Services"
              smooth={true}
              offset={-16}
              duration={500}
            >
              Get Started
            </Link>
          </motion.button>
        </motion.div>
        <motion.div
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: 1000,
            opacity: 0.1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <img className="w-full" src={dwm} alt="Business logo" />
        </motion.div>
        {/*}
        <motion.div
            animate={{
              opacity:1,
            }}
            initial={{
              opacity:0.0
            }}
            transition={{
              delay: 1,
              duration: 1
            }}
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] 
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-white border border-slate-300 rounded-xl
        text-center shadow-xl"
        >
          <p>Marketing Solutions</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <PresentationChartLineIcon className="h-6 text-Red" /> Advertising{' '}
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <CameraIcon className="h-6 text-Red" /> Content Creation{' '}
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ComputerDesktopIcon className="h-6 text-Red" /> Webaite Design{' '}
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <MagnifyingGlassIcon className="h-6 text-Red" /> SEO{' '}
            </p>
          </div>
        </motion.div>
          */}
      </div>
    </div>
  );
};

export default Hero;
