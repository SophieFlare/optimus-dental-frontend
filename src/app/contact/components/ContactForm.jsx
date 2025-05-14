"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Swal from "sweetalert2";
import NeonButton from "../../../components/NeonButton";


const ContactForm = () => {
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(300px 300px at ${xPercentage}% ${yPercentage}%, black, transparent)`;
  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current) return;

    const { width, height } = formRef.current.getBoundingClientRect();
    const circumference = width * 2 + height * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options = {
      times,
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b79a95d9-f89d-4632-8b68-3d7997fa094b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    console.log(res);
    if (res.success) {
      Swal.fire({
        title: "Welcome to the Game!",
        text: "Great choice! Your table tennis journey starts now. Let's smash it together!",
        icon: "success",
      });
    }
  };

  return (
<section
  id="section-body"
  className="flex justify-center items-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_top_left,_rgba(67,205,215,0.25)_10%,_rgba(0,0,0,0.4)_50%)] backdrop-blur-sm"
>

      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-2xl w-full"
      >
        {/* Animated Border */}
        <motion.div
          style={{ maskImage }}
          className="absolute -inset-4 sm:-inset-5 border-2 border-[#35e2c4] rounded-2xl pointer-events-none"
        />

        {/* Contact Form */}
        <form
  onSubmit={onSubmit}
  className="relative z-10 p-6 sm:p-8 bg-white/5 border border-white/20 rounded-2xl shadow-lg backdrop-blur-xl w-[90%] sm:w-[85%] md:w-[75%] lg:w-[600px] mx-auto mt-8"
>
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center text-white">
  CONTACT FORM
  </h2>

  {/* Full Name */}
  <div className="mb-4">
    <label className="block text-white text-sm mb-2">Full Name</label>
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      required
      className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/10 text-black backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block text-white text-sm mb-2">Email Address</label>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
      className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/10 text-black backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="block text-white text-sm mb-2">Phone Number</label>
    <input
      type="text"
      name="phone"
      placeholder="Enter your number +995"
      required
      className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/10 text-black backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>

  {/* Found Us */}
  <div className="mb-4">
    <label className="block text-white text-sm mb-2">Found Us</label>
    <input
      type="text"
      name="foundus"
      placeholder="How did you find us?"
      required
      className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/10 text-black backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>

  {/* Message */}
  <div className="mb-4">
    <label className="block text-white text-sm mb-2">Your Message</label>
    <textarea
      name="message"
      placeholder="Enter your message"
      required
      className="w-full min-h-[180px] px-4 py-3 rounded-md bg-white/10 border border-white/10 text-black backdrop-blur-md resize-y focus:outline-none focus:ring-2 focus:ring-cyan-400"
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="w-full flex justify-center">
    <NeonButton
      className="mt-6 w-full sm:w-[250px] py-2 px-4 text-sm flex items-center justify-center"
      type="submit"
    >
      Send Message
    </NeonButton>
  </div>
</form>

      </motion.div>
    </section>
  );
};

export default ContactForm;
