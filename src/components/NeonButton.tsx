import React from 'react';
import { motion } from 'framer-motion';
import './NeonButton.css';  // Assuming you have custom styles for the button

interface NeonButtonProps {
  children: React.ReactNode; // Allow the button to accept any children
  onClick?: () => void;
  className?: string; // Optional className prop for styling
  variants?: any; // Optional variants prop for animation (framer-motion)
}

const NeonButton: React.FC<NeonButtonProps> = ({ children, onClick, className, variants }) => {
  return (
    <motion.div
      className={`button-shiny-cta ${className}`} // Combine className for custom styles
      onClick={onClick}
      variants={variants} // Pass the variants for framer-motion animation
    >
      <span>{children}</span> {/* Render the children inside the button */}
    </motion.div>
  );
}

export default NeonButton;
