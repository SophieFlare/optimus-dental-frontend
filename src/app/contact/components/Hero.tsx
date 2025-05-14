import React from "react";
import HeroContent from "./HeroContent";

interface HeroProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ contactRef }) => {
  return (
    <div className="relative flex flex-col h-screen w-screen" id="contact hero">
      
      {/* Video Background */}
      {/* Uncomment if needed */}
      {/*
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-380px] h-full w-full left-0 z-[1] object-cover"
        style={{
          filter: "hue-rotate(260deg) saturate(110%) brightness(0.95) contrast(115%)",
        }}
      >
        <source src="/contact-public/blackhole.webm" type="video/webm" />
      </video>
      */}

      {/* Glowing Radial Overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen bg-[radial-gradient(75%_75%_at_center,rgba(140,255,255,0.4)_15%,rgba(14,5,16,0.6)_80%,transparent)]" />

      {/* Glow Orb */}
      {/* Uncomment if needed */}
      {/*
      <div className="absolute h-64 w-64 md:h-96 md:w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] 
      bg-[radial-gradient(50%_50%_at_30%_30%,white,rgb(148,222,255)_40%,rgb(0,115,110))]
      rounded-full shadow-[0_0_60px_rgba(120,255,255,0.5),0_0_120px_rgba(0,255,200,0.2)] opacity-60" />
      */}

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full z-[20] flex items-center justify-center">
        <HeroContent contactRef={contactRef} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-b from-transparent via-black/80 to-black z-[10]" />


    </div>
  );
};

export default Hero;
