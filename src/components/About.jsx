import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-6xl leading-[30px]'
      >
        I am a 3rd-year Computing Science student at the University of Alberta with a strong passion for Machine Learning and Artificial Intelligence. 
        I have developed innovative projects in Python, Node.js, and machine learning, including text analysis and predictive modeling. My professional 
        experience includes internships with organizations like Save the Children, where I contributed to impactful, mission-driven software development projects. 
        I excel in collaborative environments and am eager to explore innovative solutions in AI and machine learning. Please feel free to contact me for 
        opportunities or collaborations—I am excited to connect and create meaningful impact together.
      </motion.p>

      {/* Updated button below the paragraph */}
      <div className='flex justify-center mt-6'>
        <button
          onClick={() => window.open('https://sadmansami.tiiny.site/', '_blank', 'noopener,noreferrer')}
          className='bg-black text-white px-6 py-3 rounded-md hover:bg-gray-700'
          style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderImageSlice: 1,
            borderImageSource: 'linear-gradient(to right, purple, pink, red)',
          }}
        >
          Go to YouTube
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
