// import { React ,useState, useEffect} from 'react';
// import { styles } from '../styles';
// import { motion } from 'framer-motion';
// import { ComputersCanvas, EarthCanvas } from './canvas';
// import { image } from '../assets';

// const Hero = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of `isMobile`
//     setIsMobile(mediaQuery.matches);

//     // Update `isMobile` when the media query status changes
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-between`}>
//         <div className="flex flex-row items-start gap-5">

//           <div className="flex flex-col justify-center items-center mt-5">
//             <div className="w-5 h-5 rounded-full bg-[#d8e2dc]" />
//             <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#d8e2dc] to-[#000000]" />
//           </div>
          
//           <div>
//             <h1 className={`${styles.heroHeadText} text-white`}>
//               Hi, I'm <span className='text-[#f4d35e]'>Sami</span>
//             </h1>
//             <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//               I am a full stack developer <br className='sm:block hidden' />
//               passionate about Artificial Intelligence
//             </p>
//           </div>
          
//         </div>

//         <img
//           src={image}
//           alt="project_image"
//           className={`${isMobile? 'w-[80px] h-[80px]' : 'w-[200px] h-[200px]'} object-contain rounded-full`}
//         />
//       </div>

//       <EarthCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-left items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { React ,useState, useEffect, useRef } from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { ComputersCanvas, EarthCanvas } from './canvas';
import { image } from '../assets';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of `isMobile`
    setIsMobile(mediaQuery.matches);

    // Update `isMobile` when the media query status changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile && heroRef.current) {
      let startY = 0;
      let endY = 0;

      const handleTouchStart = (e) => {
        startY = e.touches[0].clientY;
      };

      const handleTouchMove = (e) => {
        endY = e.touches[0].clientY;
      };

      const handleTouchEnd = () => {
        const deltaY = startY - endY;
        // Only trigger if the swipe is significant enough
        if (Math.abs(deltaY) > 50) {
          if (deltaY > 0) {
            // Swiped up: Scroll down one viewport height
            window.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          } else {
            // Swiped down: Scroll up one viewport height
            window.scrollBy({
              top: -window.innerHeight,
              behavior: 'smooth'
            });
          }
        }
      };

      const heroElement = heroRef.current;
      heroElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      heroElement.addEventListener('touchmove', handleTouchMove, { passive: true });
      heroElement.addEventListener('touchend', handleTouchEnd, { passive: true });

      // Cleanup to avoid memory leaks
      return () => {
        heroElement.removeEventListener('touchstart', handleTouchStart);
        heroElement.removeEventListener('touchmove', handleTouchMove);
        heroElement.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile]);

  return (
    <section ref={heroRef} className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-between`}>
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#d8e2dc]" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#d8e2dc] to-[#000000]" />
          </div>
          
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#f4d35e]'>Sami</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a full stack developer <br className='sm:block hidden' />
              passionate about Artificial Intelligence
            </p>
          </div>
        </div>

        <img
          src={image}
          alt="project_image"
          className={`${isMobile? 'w-[80px] h-[80px]' : 'w-[200px] h-[200px]'} object-contain rounded-full`}
        />
      </div>

      <EarthCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-left items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
