"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motionSlides";

import Image from "next/image";
import NeonButton from "../../../components/NeonButton";
import OptimusLogo from "../../three-js/OptimusLogo"

interface HeroContentProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const HeroContent: React.FC<HeroContentProps> = ({ contactRef }) => {
  const handleScrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <main className="z-50">
 <motion.div
  initial="hidden"
  animate="visible"
  className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 mt-[5vh] w-full z-[20] gap-8"
>
  <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-center">
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-2 mt-6 font-bold text-white"
    >
      <span className="text-transparent bg-clip-text bg-white text-3xl sm:text-4xl md:text-4xl">
        OPTIMUS DENTAL STUDIO
      </span>
    </motion.div>

    <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-base sm:text-lg text-gray-400 my-3 max-w-[600px] mx-auto md:mx-0"
    >
      We offer expert care for all your dental needs, from routine check-ups to advanced treatments. Our team is here to ensure your smile stays bright and healthy.
    </motion.p>

    <motion.div
  variants={slideInFromLeft(1)}
  className="w-full flex justify-center md:justify-center"
>
  <NeonButton className="mt-4 sm:mt-[10px] w-full sm:w-[250px] flex items-center justify-center">
    Contact Us!
  </NeonButton>
</motion.div>

  </div>

  <motion.div
    variants={slideInFromRight(0.8)}
    className="w-full h-full flex justify-center items-center"
  >
   <div
  className="
    relative 
    w-[200px] h-[200px]
    sm:w-[300px] sm:h-[300px]
    md:w-[400px] md:h-[400px]
    lg:w-[500px] lg:h-[500px]
    flex items-center justify-center
    md:-translate-y-[1rem] lg:-translate-y-[1rem]
    transition-all duration-500
  "
>

      <OptimusLogo />


    </div>
  </motion.div>

</motion.div>
      <div className="absolute bottom-[240px] right-[1120px] translate-x-[20%] translate-y-[50%] max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
        <Image
          src="/images/monster1.png"
          alt="Optimus Monster"
          width={150}
          height={150}
        />
      </div>
      <div className="absolute bottom-[250px] right-[720px] translate-x-[20%] translate-y-[50%] max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
        <Image
          src="/images/monster.png"
          alt="Optimus Monster"
          width={120}
          height={120}
        />
      </div>
    </main>
  );
};

export default HeroContent;


