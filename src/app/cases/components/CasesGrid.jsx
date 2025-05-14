import React, { useState } from 'react'
import CaseDetail from './CaseDetail'

const CasesGrid = () => {
  const [selectedCase, setSelectedCase] = useState(null)

  const cases = [...Array(9)].map((_, index) => ({
    id: index,
    name: `Case ${index + 1}`,
    description: `Detailed description of Case ${index + 1}.`,
    imageUrl: `/images/optimus-logo03 copy.jpg`,
    afterImageUrl: `/optimus-cases/poster-1${index + 1}.jpg`,
  }))

  const handleNext = () => {
    setSelectedCase((prev) => (prev + 1) % cases.length)
  }

  const handlePrev = () => {
    setSelectedCase((prev) => (prev - 1 + cases.length) % cases.length)
  }

  if (selectedCase !== null) {
    const { imageUrl, afterImageUrl, name, description } = cases[selectedCase]
    return (
<CaseDetail
  imageUrl={imageUrl}
  afterImageUrl={afterImageUrl}
  caseName={name}
  description={description}
  onClose={() => setSelectedCase(null)}
  onNext={handleNext}
  onPrev={handlePrev}
/>

    )
  }

  return (
    <section className="py-12 px-6 no-scrollbar">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
 <div
 key={index}
 onClick={() => setSelectedCase(index)}
 className="relative cursor-pointer w-full max-w-[360px] shadow-lg flex flex-col group overflow-hidden mx-auto"
>
 {/* Image Container */}
 <div className="relative h-60 bg-gray-200">
   <img
     src={item.imageUrl}
     alt={item.name}
     className="w-full h-full object-cover"
   />
   <div className="absolute inset-0 bg-[#10c9c3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10" />
 </div>

 {/* Text */}
 <div className="flex-grow p-4 flex flex-col justify-between z-20 relative">
   <h3 className="text-lg font-medium text-white group-hover:text-[#10c9c3] transition-colors duration-300 ease-in-out">
     {item.name}
   </h3>
 </div>
</div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default CasesGrid
