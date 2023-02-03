import React from 'react';
import {
  CameraIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/24/solid';

import dwm from '../assets/bg.jpg';
import { Link, animateScroll as scroll } from 'react-scroll';

const Services = () => {
  return (
    <div name="Services" className="w-full  mt-24">
      <div className="w-full h-[950px] bg-black/70 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={dwm}
          alt=""
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-gray-200 uppercase text-center">
            Services
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            All Your Business Solutions In One Place
          </h3>
          <p className="py-4 text-3xl text-gray-200">
            Here at Dataworks Media we don't work for our clients, we work with
            them, every step of the way so that all they have to worry about is
            providing the goods or services they are known for. In other words,
            we help you obtain new clients while you focus on serving them. With
            our services, you will be able to get the most out of your business
            and grow to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-xl">
            <div className="p-8">
              <PresentationChartLineIcon className="w-16 p-4 bg-Red text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Advertising</h3>
              <p className="text-gray-600 text-xl">
                Reach your customers quickly and with precision with a
                data-driven PPC campaign. Our PPC experts specialize in Google
                and Facebook Ads, so you can rest easy knowing your campaign is
                in the hands of professionals.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-black cursor-pointer hover:text-Red duration-300">
                <Link to="Contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
                <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl">
            <div className="p-8">
              <CameraIcon className="w-16 p-4 bg-Red text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Content Creation</h3>
              <p className="text-gray-600 text-xl">
                Visual Content is powerful and engaging when done right. Our
                media experts have years of experience and will take your brand
                to the next level as well as increase your customer engagement.
                If you can vision it we can create it.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-black cursor-pointer hover:text-Red duration-300">
                <Link to="Contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
                <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl">
            <div className="p-8">
              <ComputerDesktopIcon className="w-16 p-4 bg-Red text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Website Design</h3>
              <p className="text-gray-600 text-xl">
                Capture your target audiences’ attention with a professional
                custom web design that highlights your business’ unique value
                propositions. We analyze your industry demands and provide
                ongoing site maintenance.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-black cursor-pointer hover:text-Red duration-300">
                <Link to="Contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
                <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl">
            <div className="p-8">
              <MagnifyingGlassIcon className="w-16 p-4 bg-Red text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">SEO</h3>
              <p className="text-gray-600 text-xl">
                Establish a strong online foundation with on-point technical SEO
                and internet marketing services. Our technical SEO experts run
                crawl error reports, check your HTTPS status codes, optimize
                your site speed, and audit redirects.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-black cursor-pointer hover:text-Red duration-300">
                <Link to="Contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
                <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
