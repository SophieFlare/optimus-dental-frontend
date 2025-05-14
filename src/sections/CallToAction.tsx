"use client"

import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect } from "react";
import NeonButton from "../components/NeonButton"
import Link from "next/link";

const useRelativeMousePosition = (to: React.RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;

    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(15% 30% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
          animate={{
            backgroundPositionX: "500px", // Adjusting for a movement effect
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {/* Background Layer */}
          <div
            className="absolute inset-0 bg-[rgb(74,132,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>

          {/* Mouse Mask Layer */}
          <motion.div
            className="absolute inset-0 bg-[rgb(255,255,255)]  bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>

          {/* Text Content */}
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
            OPTIMUS Driven SEO for Everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity
            </p>
            <div className="flex justify-center mt-8">
            <Link href="/about">
              <NeonButton>Learn More</NeonButton>
            </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
