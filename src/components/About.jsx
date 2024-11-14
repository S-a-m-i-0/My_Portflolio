import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText} >Overview.</h2>
    </motion.div>

    <motion.p variants = {fadeIn("","",0.1,1)}
    className = "mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">

Certainly! Here’s a brief sample of 150 words:

The world of technology is evolving rapidly, shaping how we live, work, and communicate. In recent years, advancements in artificial intelligence and machine learning have opened up new possibilities for automation, personalization, and data analysis across industries. Smart devices and IoT (Internet of Things) technology continue to integrate seamlessly into our daily lives, allowing for greater connectivity and convenience. In the workplace, collaboration tools and cloud computing have made remote work more accessible, empowering teams to work together from anywhere in the world. Moreover, the rise of cybersecurity awareness has emphasized the need for robust protection measures, ensuring our digital lives remain safe. Looking ahead, we anticipate breakthroughs in quantum computing, which promise to redefine problem-solving capabilities on a massive scale. These innovations not only change how we interact with technology but also pave the way for a more connected, efficient, and secure future
    
    </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");





