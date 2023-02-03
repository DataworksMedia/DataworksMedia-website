import React from 'react';

const About = () => {
  return (
    <div name="About" className="w-full my-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="text-3xl py-6 sm:px-32 text-black ">
            We are a data driven and results focused digital marketing agency
            centered on helping businesses grow. It has always been our passion
            to enrich the lives of every person we come across. We are client
            obsessed and only deliver unrivaled results. Our business only
            succeeds when you do. Come see what Dataworks Media can do for you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-Red">GROW</p>
            <p className="text-gray-400 mt-2">Your Business</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-Red">100%</p>
            <p className="text-gray-400 mt-2">Customer Satisfaction</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-Red">RESULTS</p>
            <p className="text-gray-400 mt-2">Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
