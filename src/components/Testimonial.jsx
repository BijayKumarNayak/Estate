import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container w-full py-10 mx-auto overflow-hidden lg:px-32"
      id="Testimonials"
    >
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
        Customer{" "}
        <span className="font-light underline underline-offset-4 decoration-1 under">
          Testimonials
        </span>
      </h1>
      <p className="mx-auto mb-8 text-center text-gray-500 max-w-80">
        Real Stories From Those Who Found Home From Us
      </p>
      <div className="flex items-center justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 mx-auto mb-4 rounded-full "
            />
            <h2 className="text-xl font-medium text-gray-800">{testimonial.name}</h2>
            <p className="mb-4 text-sm text-gray-500">{testimonial.title}</p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
