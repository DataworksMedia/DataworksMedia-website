import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name="Contact" className="w-full  mt-24">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Are you ready to reach new customers?
          </h1>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Let <span className="text-Red">Dataworks</span> Media help you
            bridge the gap.
          </h1>
        </div>
        <div className="justify-center md:items-start w-full px-2 py-8 bg-white rounded-xl  shadow-xl">
          <h1 className="py-4 text-5xl md:text-7xl font-bold">
            Request a consultation
          </h1>
          <form
            name="contact"
            action="/contact"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <input
                name="name"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-Red focus:ring-Red focus:ring-1 sm:text-sm "
                type="text"
                placeholder="Name..."
                required
              />
            </div>
            <div>
              <input
                name="company-name"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-Red focus:ring-Red focus:ring-1 sm:text-sm "
                type="text"
                placeholder="Company Name..."
                required
              />
            </div>
            <div>
              <input
                name="email"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-Red focus:ring-Red focus:ring-1 sm:text-sm "
                type="email"
                placeholder="Email..."
                required
              />
            </div>
            <div>
              <input
                name="phone"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-Red focus:ring-Red focus:ring-1 sm:text-sm "
                type="tel"
                placeholder="Phone Number..."
                required
              />
            </div>
            <motion.input
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              className="text-white border text-xl bg-Red border-Red hover:bg-transparent hover:text-Red duration-300 rounded-md py-3 px-6 sm:w-[60%] my-4"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
