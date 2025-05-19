"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis'
import "../styles/media.css";

const Iphone = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <main>
      <section className="relative flex flex-col md:flex-row h-screen w-full px-10 py-10">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          
        </div>

        {/* Left side - Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-[1]">
          <div className="text-left max-w-md">
            <h1 className="text-4xl font-bold">OPTIMUS MEDIA</h1>
            <p className="mt-10 text-lg">  Discover the artistry, innovation, and real stories behind Optimus Dental Studio. 
            Explore videos and visuals that define excellence.</p>
          </div>
        </div>

        {/* Right side - iPhone with image frame */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative z-[1]">
          <div className="relative w-[300px] h-[600px]">
            <img
              src="/images/frame.png"
              alt="iPhone Frame"
              className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
            />
            <video
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              className="absolute top-[9%] left-[10.5%] w-[79%] h-[82%] object-cover rounded-[28px] z-0"
            >
              <source src="/videos/01.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Previously used CSS iPhone (commented out) */}
        {/*
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="iphone">
            <div className="iphone-frame">
              <div className="dynamic-island"></div>
              <div className="iphone-screen">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  className="w-[calc(100%+200px)] h-full object-cover "
                >
                  <source src="/videos/22.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        */}
      </section>
    </main>
  );
};

export default Iphone;
