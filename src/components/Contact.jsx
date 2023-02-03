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
        <div className="justify-center md:items-start w-full px-2 py-8 bg-slate-200 rounded-xl  shadow-xl">
          <h1 className="py-4 text-5xl md:text-7xl font-bold">
            Request a consultation
          </h1>
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true "
          >
            <p className="hidden h-0">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <input
                className="bg-slate-200 placeholder:italic shadow-md focus:invalid:border-Red focus:outline-none text-2xl my-2 w-full"
                type="text"
                placeholder="Name..."
                required
              />
            </div>
            <div>
              <input
                className="bg-slate-200 placeholder:italic shadow-md focus:invalid:border-Red focus:outline-none text-2xl my-2 w-full "
                type="text"
                placeholder="Company Name..."
                required
              />
            </div>
            <div>
              <input
                className="bg-slate-200 placeholder:italic shadow-md focus:invalid:border-Red focus:outline-none text-2xl my-2 w-full "
                type="email"
                placeholder="Email..."
                required
              />
            </div>
            <div>
              <input
                className="bg-slate-200 placeholder:italic shadow-md focus:invalid:border-Red focus:outline-none text-2xl my-2 w-full "
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
              value="Send"
              class="button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
