import React from 'react';
import { FaBell } from 'react-icons/fa';
import BgImage from "../../assets/bg.png";
import { motion } from 'framer-motion';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const Subscribe = () => {
  return (
    <section className='bg-[#f7f7f7]'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle} 
        className='container py-14 md:py-24 lg:py-48 px-4 md:px-8'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center"
        >
          <div className='text-center space-y-4 lg:max-w-[435px] mx-auto'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-snug'>
              450K+ Students Are Learning from Us 
            </h1>
            <p className='text-sm md:text-base lg:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facilis?
            </p>
            <a href="#" className='bg-primary mt-6 md:mt-8 gap-4 group inline-flex items-center hover:bg-secondary px-6 py-3 md:px-8 md:py-4 font-bold text-white rounded-2xl'>
              Subscribe Now <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200' />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Subscribe;
