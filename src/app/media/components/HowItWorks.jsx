import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../../utils/animations";
import { explore1, explore2, exploreOptLogo, implants, implants1 } from "../../utils";

const HowItWorks = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    // Reveal title
    animateWithGsap("#how_title", { y: 0, opacity: 1 });

    // Trigger video play on scroll
    gsap.to("#how_video", {
      scrollTrigger: {
        trigger: "#how_video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });

    // Scale in images
    animateWithGsap(
      ".how_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );

    // Slide-in text blocks
    animateWithGsap(".how_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1
            id="how_title"
            className="section-heading opacity-0 translate-y-20"
          >
             Discover Precision. Experience Confidence.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Teeth.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
            Perfected at Optimus.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="how_video"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreOptLogo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={implants}
                    alt="titanium"
                    className="feature-video how_grow opacity-0 scale-[1.03]"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={implants1}
                    alt="titanium 2"
                    className="feature-video how_grow opacity-0 scale-[1.03]"
                  />
                </div>
              </div>

              <div className="feature-text-container">
  <div className="flex-1 flex-center">
    <p className="feature-text how_text opacity-0 translate-y-10">
      At Optimus Dental Studio, we use{" "}
      <span className="text-white">cutting-edge implant technology</span> to
      restore your smile with unmatched precision and durability. Each implant
      is designed for comfort, longevity, and aesthetics.
    </p>
  </div>

  <div className="flex-1 flex-center">
    <p className="feature-text how_text opacity-0 translate-y-10">
      Our titanium implants are{" "}
      <span className="text-white">crafted with aerospace-grade materials</span>
      , offering superior strength and integration. It's not just a treatment —
      it's a transformation you'll feel from day one.
    </p>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
