import { motion } from "framer-motion";
import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="py-28 bg-light container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 text-center md:text-left">
          <div className="space-y-4 max-w-[300px] mx-auto md:mx-0">
            <h1 className="text-2xl font-bold">The Hussain Code</h1>
            <p className="text-dark2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              consequatur nam laboriosam voluptates libero enim. Pariatur,
              provident sapiente mollitia aliquid culpa dignissimos, numquam
              ipsa officiis quia nihil earum sequi impedit?
            </p>
          </div>
          <div className="space-y-4 max-w-[300px] mx-auto md:mx-0">
            <h1 className="font-bold text-2xl">Courses</h1>
            <div className="text-dark2">
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Web development
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Software development
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  App development
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  E-learning
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4">
            <div className="space-y-4 max-w-[300px] mx-auto md:mx-0">
              <h1 className="font-bold text-2xl">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact us
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 max-w-[400px] mx-auto md:mx-0">
              <h1 className="text-2xl font-bold">Get In Touch</h1>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="rounded-s-xl p-3 w-full py-4  bg-white focus:outline-none placeholder:text-dark2 text-lg mb-4 md:mb-0 md:mr-2"
                />
                <button className="bg-primary py-4 md:py-1 px-6 rounded-e-xl hover:bg-secondary shadow text-white font-bold">
                  Go
                </button>
              </div>
              <div className="flex justify-center md:justify-start space-x-6 pt-4">
                <FaWhatsapp className="cursor-pointer hover:text-primary text-2xl" />
                <FaInstagram className="cursor-pointer hover:text-primary text-2xl" />
                <TbWorldWww className="cursor-pointer hover:text-primary text-2xl" />
                <FaYoutube className="cursor-pointer hover:text-primary text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
