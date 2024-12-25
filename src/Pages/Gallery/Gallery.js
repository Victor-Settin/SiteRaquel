import React from 'react';
import './Gallery.css';
import img1 from '../../Images/a1.jpg';
import img2 from '../../Images/a2.jpg';
import img3 from '../../Images/a3.jpg';
import img4 from '../../Images/a4.jpg';
import img5 from '../../Images/a5.jpg'; 
import img6 from '../../Images/a6.jpg'; 
import img7 from '../../Images/a7.jpg'; 
import { motion } from 'framer-motion'; // Importa o framer-motion

const Gallery = () => {
  return (
    <div className="gallery-container">
      <motion.div 
        className="title"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Photo Gallery
      </motion.div>

      <div className="photos-container">
        <motion.div 
          className="photos-grid"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.5 }} 
        >
          <motion.img 
            src={img1} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          <motion.img 
            src={img2} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.6 }}
          />
          <motion.img 
            src={img5} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.7 }}
          />
          <motion.img 
            src={img4} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.8 }}
          />
          <motion.img 
            src={img3} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.9 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.9 }}
          />
          <motion.img 
            src={img7} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.9 }}
          />
          </motion.div>
      </div>
    </div>
  );
};

export default Gallery;