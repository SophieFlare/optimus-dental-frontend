import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const highlightSlides = [
  {
    src: "/assets/videos/highlight-first.mp4",
    captions: [""],
  },
  {
    src: "/assets/videos/hightlight-third.mp4",
    captions: ["Titanium.", "So strong. So light. So Pro."],
  },
  {
    src: "/assets/videos/hightlight-third.mp4",
    captions: ["iPhone 15 Pro Max has the", "longest optical zoom in", "iPhone ever. Far out."],
  },
  {
    src: "/assets/videos/hightlight-fourth.mp4",
    captions: ["All-new Action button.", "What will yours do?"],
  },
];

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  // Scroll-triggered slide animation and video play
  useGSAP(() => {
    gsap.to(".video-slider", {
      xPercent: -100 * videoId,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".video-slide", {
      scrollTrigger: {
        trigger: ".video-slide",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [videoId]);

  // Progress animation
  useEffect(() => {
    const span = videoSpanRef.current[videoId];
    const wrapper = videoDivRef.current[videoId];
    let currentProgress = 0;

    if (span && wrapper) {
      const anim = gsap.to(span, {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(wrapper, {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span, {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(wrapper, { width: "12px" });
            gsap.to(span, { backgroundColor: "#afafaf" });
          }
        },
      });

      const updateAnimProgress = () => {
        const vid = videoRef.current[videoId];
        if (vid?.duration) {
          anim.progress(vid.currentTime / vid.duration);
        }
      };

      if (isPlaying) {
        gsap.ticker.add(updateAnimProgress);
      } else {
        gsap.ticker.remove(updateAnimProgress);
      }

      return () => gsap.ticker.remove(updateAnimProgress);
    }
  }, [videoId, startPlay, isPlaying]);

  // Handle video play/pause
  useEffect(() => {
    const current = videoRef.current[videoId];
    if (current) {
      if (startPlay && isPlaying) {
        current.play().catch(console.error);
      } else {
        current.pause();
      }
    }
  }, [startPlay, videoId, isPlaying]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo({
          isEnd: false,
          startPlay: false,
          videoId: 0,
          isLastVideo: false,
          isPlaying: true,
        });
        break;
      case "pause":
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        break;
    }
  };

  const handleLoadedMetaData = (i) => {
    if (i === 0) {
      setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true }));
    }
  };

  return (
    <>
      {/* Video Slider */}
      <div className="flex items-center overflow-hidden">
        {highlightSlides.map((slide, i) => (
          <div key={i} className="video-slider sm:pr-20 pr-10">
            <div className="video-carousel_container relative">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  className="video-slide pointer-events-none"
                  playsInline
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== highlightSlides.length - 1
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={() => handleLoadedMetaData(i)}
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {slide.captions.map((text, j) => (
                  <p key={j} className="md:text-2xl text-xl font-medium">{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar + Controls */}
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {highlightSlides.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button className="control-btn ml-4">
          <img
            src={
              isLastVideo
                ? "/assets/images/replay.svg"
                : !isPlaying
                ? "/assets/images/play.svg"
                : "/assets/images/pause.svg"
            }
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : () => handleProcess(isPlaying ? "pause" : "play")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
