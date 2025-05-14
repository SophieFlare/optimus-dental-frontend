import React from "react";

import "../styles/servicesDetail.css";

export default function ServicesDetail({ service, onClose, onPrev, onNext }) {
  if (!service) return null;

  return (
    <div className="services-detail-overlay" onClick={onClose}>
      {/* Left Arrow - outside the card */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="fixed top-1/2 left-4 -translate-y-1/2 h-12 w-12 flex items-center justify-center bg-[#0ba4a0]/70 hover:bg-[#0ba4a0] cursor-pointer z-50 rounded-full transition-colors duration-300"
        aria-label="Previous Service"
      >
        <span className="text-3xl text-white hover:text-black transition-colors duration-300">
          &lt;
        </span>
      </div>

      {/* Right Arrow - outside the card */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="fixed top-1/2 right-4 -translate-y-1/2 h-12 w-12 flex items-center justify-center bg-[#0ba4a0]/70 hover:bg-[#0ba4a0] cursor-pointer z-50 rounded-full transition-colors duration-300"
        aria-label="Next Service"
      >
        <span className="text-3xl text-white hover:text-black transition-colors duration-300">
          &gt;
        </span>
      </div>

      {/* Card */}
      <div
        className="services-detail-card"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={service.image}
          alt={service.title}
          className="services-detail-image"
        />
        <h2>{service.title}</h2>
        <p>This is a detailed description for {service.title}.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
