import React from 'react';
import BannerPng from "../../assets/banner.png";
import { motion } from 'framer-motion';

const Banner2 = () => {
  return (
    <section>
      <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='flex flex-col justify-center items-center md:items-start text-center md:text-left'
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-4xl font-bold space-y-4 md:text-4xl !leading-snug'
          >
            Join Our Community to Start Your Journey
          </motion.h1>
          <p className='text-dark2 text-2xl mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sint numquam eligendi commodi veritatis earum!
          </p>
          <a 
            href="#" 
            className='inline-block bg-primary hover:bg-secondary rounded-2xl py-3 px-6 mt-8 font-bold text-white'
          >
            Join Now
          </a>
        </motion.div>

        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng} 
            className='w-[350px] object-cover drop-shadow md:w-[450px]' 
            alt="Banner"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner2;
