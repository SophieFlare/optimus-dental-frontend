"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 1 });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      delay: 0.5,
    });
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-white">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading opacity-0 translate-y-5 transition-all duration-500">
            Ideas For Better Health 
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link opacity-0 translate-y-5 transition-all duration-500">
              Watch the video
              <img src="/assets/images/watch.svg" alt="watch" className="ml-2" />
            </p>
            <p className="link opacity-0 translate-y-5 transition-all duration-500">
              Book an appointment
              <img src="/assets/images/right.svg" alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
