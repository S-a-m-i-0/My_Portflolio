import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-[350px] min-h-[400px] flex flex-col border-4 border-solid border-indigo-300 overflow-hidden"
      >
        <div className="relative w-full h-[220px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[22px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left`}>My works</p>
        <h2 className={`${styles.sectionHeadText} text-left`}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0, 1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        The world of technology is evolving rapidly, shaping how we live, work,
        and communicate. In recent years, advancements in artificial
        intelligence and machine learning have opened up new possibilities for
        automation, personalization, and data analysis across industries. Smart
        devices and IoT (Internet of Things) technology continue to integrate
        seamlessly into our daily lives, allowing for greater connectivity and
        convenience. In the workplace, collaboration tools and cloud computing
        have made remote work more accessible, empowering teams to work together
        from anywhere in the world. Moreover, the rise of cybersecurity
        awareness has emphasized the need for robust protection measures,
        ensuring our digital lives remain safe. Looking ahead, we anticipate
        breakthroughs in quantum computing, which promise to redefine
        problem-solving capabilities on a massive scale. These innovations not
        only change how we interact with technology but also pave the way for a
        more connected, efficient, and secure future.
      </motion.p>

      <div className="w-full flex">
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
