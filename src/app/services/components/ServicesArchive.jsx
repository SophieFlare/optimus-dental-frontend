import React, { useState } from "react";
import ServiceDetail from "./ServiceDetail";

import "../styles/services.css";
import "../styles/servicesArchive.css";


const serviceItems = [
  {
    title: "Orthodontics",
    image: "/optimus-cases/poster-01.jpg"
  },
  {
    title: "Therapy",
    image: "/optimus-cases/poster-02.jpg"
  },
  {
    title: "Orthopedics",
    image: "/optimus-cases/poster-03.jpg"
  },
  {
    title: "Implantology",
    image: "/optimus-cases/poster-04.jpg"
  },
  {
    title: "Surgery",
    image: "/optimus-cases/poster-05.jpg"
  },
  {
    title: "Injectable Cosmetology",
    image: "/optimus-cases/poster-06.jpg"
  }
];

export default function ServicesArchive() {
  const [hoverImage, setHoverImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleOpenDetail = (index) => {
    setActiveServiceIndex(index);
  };

  const handleCloseDetail = () => {
    setActiveServiceIndex(null);
  };

  const handlePrev = () => {
    setActiveServiceIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : serviceItems.length - 1
    );
  };

  const handleNext = () => {
    setActiveServiceIndex((prevIndex) =>
      prevIndex < serviceItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <section className="archive" onMouseMove={handleMouseMove}>
        <div className="archive-header">
          <p>Our Services</p>
        </div>

        {serviceItems.map((service, index) => (
          <div
            className="archive-item"
            key={index}
            onMouseEnter={() => setHoverImage(service.image)}
            onMouseLeave={() => setHoverImage(null)}
            onClick={() => handleOpenDetail(index)}
          >
            <h2>{service.title}</h2> {/* Replacing "OPTIMUS" with the service title */}
            <div className="archive-line" />
          </div>
        ))}
      </section>

      {hoverImage && (
        <img
          src={hoverImage}
          alt="Preview"
          className="hover-image show"
          style={{ top: mousePos.y, left: mousePos.x }}
        />
      )}

      <ServiceDetail
        service={serviceItems[activeServiceIndex]}
        onClose={handleCloseDetail}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
