import React from 'react';

const CasesHero = () => {
  return (
    <div className="mt-28 px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Section (Text) */}
      <div className="text-center lg:text-left max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Transform Your Smiles</h2>
        <div className="my-4 h-0.5 w-24 bg-gray-300 mx-auto lg:mx-0 rounded-full" />
        <p className="text-gray-300 text-base sm:text-lg">
          See real transformations from our patients. These before & after cases showcase how Optimus Dental Studio changes lives, one smile at a time.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center">
        <img
          src="/images/optimus-logo01.png"
          alt="Smile"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default CasesHero;
