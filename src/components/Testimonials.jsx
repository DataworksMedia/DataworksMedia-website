import React from 'react';
import logo from '../assets/placeholder.png';
import quote1 from '../assets/quotes2.png';
import quote2 from '../assets/quotes3.png';

const Testimonials = () => {
  return (
    <div name="Testimonials" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">
          What are Clients saying about us
        </h2>
        <p className="text-2xl py-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi
          odio doloremque tenetur id asperiores reprehenderit aut perferendis,
          inventore, accusantium iste perspiciatis suscipit! Dolorum illum,
          facere adipisci ad nesciunt suscipit?
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="relative bg-Red text-white p-8 rounded-lg shadow-xl lg:col-span-2">
            <img
              className="absolute h-40 lg:h-16 top-[-50px] lg:top-[-25px] right-4 z-0"
              src={quote1}
              alt="quote"
            />
            <div className="relative z-10 flex justify-start space-x-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-black"
                src={logo}
                alt="Placeholder for logo"
              />
              <div>
                <h2 className="font-bold text-2xl ">Company 1</h2>
                <h3 className="text-xl opacity-70">Title</h3>
              </div>
            </div>
            <p className="mt-4 font-bold text-xl leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quasi odio doloremque tenetur id asperiores reprehenderit aut
              perferendis,
            </p>
            <p className="relative z-10 mt-4 text-lg opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore molestias corporis expedita voluptatem deserunt ut vero,
              ipsum exercitationem ducimus necessitatibus, neque nesciunt
              blanditiis asperiores. Vel dolorem iste odio voluptatum?
            </p>
          </div>
          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl">
            <div className="relative z-10 flex justify-start space-x-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-black"
                src={logo}
                alt="Placeholder for logo"
              />
              <div>
                <h2 className="font-bold text-2xl ">Company 2</h2>
                <h3 className="text-xl opacity-70">Title</h3>
              </div>
            </div>
            <p className="mt-4 font-bold text-xl leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quasi odio doloremque tenetur id asperiores reprehenderit aut
              perferendis,
            </p>
            <p className="relative z-10 mt-4 text-lg opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore molestias corporis expedita voluptatem deserunt ut vero,
              ipsum exercitationem ducimus necessitatibus, neque nesciunt
              blanditiis asperiores. Vel dolorem iste odio voluptatum?
            </p>
          </div>
          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl lg:row-start-2">
            <div className="relative z-10 flex justify-start space-x-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-black"
                src={logo}
                alt="Placeholder for logo"
              />
              <div>
                <h2 className="font-bold text-2xl ">Company 2</h2>
                <h3 className="text-xl opacity-70">Title</h3>
              </div>
            </div>
            <p className="mt-4 font-bold text-xl leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quasi odio doloremque tenetur id asperiores reprehenderit aut
              perferendis,
            </p>
            <p className="relative z-10 mt-4 text-lg opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore molestias corporis expedita voluptatem deserunt ut vero,
              ipsum exercitationem ducimus necessitatibus, neque nesciunt
              blanditiis asperiores. Vel dolorem iste odio voluptatum?
            </p>
          </div>
          <div className="relative bg-White text-black p-8 rounded-lg shadow-xl lg:col-span-2">
            <div className="relative z-10 flex justify-start space-x-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-black"
                src={logo}
                alt="Placeholder for logo"
              />
              <div>
                <h2 className="font-bold text-2xl ">Company 2</h2>
                <h3 className="text-xl opacity-70">Title</h3>
              </div>
            </div>
            <p className="mt-4 font-bold text-xl leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quasi odio doloremque tenetur id asperiores reprehenderit aut
              perferendis,
            </p>
            <p className="relative z-10 mt-4 text-lg opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore molestias corporis expedita voluptatem deserunt ut vero,
              ipsum exercitationem ducimus necessitatibus, neque nesciunt
              blanditiis asperiores. Vel dolorem iste odio voluptatum?
            </p>
          </div>
          <div className="relative bg-Red text-white p-8 rounded-lg shadow-xl lg:row-span-2 lg:row-start-1 lg:col-start-4">
            <img
              className="absolute h-40 lg:h-16 top-[-50px] lg:top-[-25px] right-4 z-0"
              src={quote2}
              alt="quote"
            />
            <div className="relative z-10 flex justify-start space-x-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-black"
                src={logo}
                alt="Placeholder for logo"
              />
              <div>
                <h2 className="font-bold text-2xl ">Company 2</h2>
                <h3 className="text-xl opacity-70">Title</h3>
              </div>
            </div>
            <p className="mt-4 font-bold text-xl leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quasi odio doloremque tenetur id asperiores reprehenderit aut
              perferendis,
            </p>
            <p className="relative z-10 mt-4 text-lg opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore molestias corporis expedita voluptatem deserunt ut vero,
              ipsum exercitationem ducimus necessitatibus, neque nesciunt
              blanditiis asperiores. Vel dolorem iste odio voluptatum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
