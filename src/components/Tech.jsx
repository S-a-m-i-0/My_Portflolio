import React from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left`}>
          What Skills I know
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Technical Skills.
        </h2>
      </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-1'>
      

      {technologies.map((technology) => (
        <div key={technology.name} className='w-28 h-28'>
          <BallCanvas icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>

    </>
  );
};

export default SectionWrapper(Tech, "");
