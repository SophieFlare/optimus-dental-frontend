import React, { useEffect, useState } from 'react'

const CaseDetail = ({
  imageUrl,
  afterImageUrl,
  caseName,
  description,
  onClose,
  onNext,
  onPrev
}) => {
  const [currentImage, setCurrentImage] = useState(imageUrl)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setCurrentImage(imageUrl)
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setCurrentImage(prev => (prev === imageUrl ? afterImageUrl : imageUrl))
        setFade(false)
      }, 500)
    }, 2300)

    return () => clearInterval(interval)
  }, [imageUrl, afterImageUrl])

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-[#10c9c3] px-4 py-8 sm:px-8 overflow-y-auto">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-black bg-white/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-sm transition-all"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Navigation Arrows */}
      <div
        onClick={onPrev}
        className="absolute left-0 top-0 h-full w-10 sm:w-12 flex items-center justify-center bg-[#0ba4a0]/70 hover:bg-[#0ba4a0] cursor-pointer transition"
        aria-label="Previous"
      >
        <span className="text-2xl sm:text-3xl text-white hover:text-black transition">
          &lt;
        </span>
      </div>

      <div
        onClick={onNext}
        className="absolute right-0 top-0 h-full w-10 sm:w-12 flex items-center justify-center bg-[#0ba4a0]/70 hover:bg-[#0ba4a0] cursor-pointer transition"
        aria-label="Next"
      >
        <span className="text-2xl sm:text-3xl text-white hover:text-black transition">
          &gt;
        </span>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Image */}
        <div className="aspect-video md:h-[500px] w-full relative">
          <img
            src={currentImage}
            alt={caseName}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{caseName}</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseDetail
