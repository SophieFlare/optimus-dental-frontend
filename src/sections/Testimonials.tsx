"use client"

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "“I had a wonderful experience at the dental studio. The staff was professional, and my teeth have never looked better!”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“The treatment was quick and painless. The dentist explained everything in detail, which made me feel at ease.”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“I was nervous about my dental procedure, but the team made me feel comfortable every step of the way. Highly recommend!”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“The clinic has a modern and clean environment, and the staff is so friendly. I’m very happy with the results!”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Beyond Expectations.</h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">Optimus Dental Studio redefines care with exceptional quality and precision.</p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
  initial={{
    translateX: '-50%' // Start off-screen
  }}
  animate={{
    translateX: '0%' // End at 0%, so the testimonials move horizontally
  }}
  transition={{
    repeat: Infinity,
    ease: "linear",
    duration: 30, // Controls the speed of the movement
  }}
  className="flex gap-5 pr-5 flex-none"
>
  {[...testimonials, ...testimonials].map((testimonial) => (
    <div
      key={testimonial.name}
      className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(100,255,255,.3),black)] max-w-xs md:max-w-md flex-none"
    >
      <div className="text-lg tracking-tight md:text-2xl">{testimonial.text}</div>
      <div className="flex items-center gap-3 mt-5">
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(110,255,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
          <Image
            src={testimonial.avatarImg}
            alt={`Avatar for ${testimonial.name}`}
            className="h-11 w-11 rounded-lg grayscale"
          />
        </div>
        <div className="">
          <div className="">{testimonial.name}</div>
          <div className="text-white/50 text-sm">{testimonial.title}</div>
        </div>
      </div>
    </div>
  ))}
  </motion.div>
        </div>
      </div>
    </section>
  );
};