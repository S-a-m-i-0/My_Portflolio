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

            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div> */}
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
        Through my projects, I gained expertise in machine learning by building models for emotion analysis and NHL winner prediction, learning to preprocess data, handle imbalances, and optimize algorithms. Developing a React.js frontend and Node.js backend taught me full-stack development and API integration. Building Android apps, like the Event Lottery System and book wishlist, enhanced my skills in Java programming, Firebase integration, and mobile UI/UX design. Web scraping and analyzing NHL data deepened my understanding of data engineering and statistical modeling. Additionally, working on Uncalibrated Visual Servoing taught me optimization techniques, while meal planner apps improved my user-centric design skills.
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

export default SectionWrapper(Works, "project");
