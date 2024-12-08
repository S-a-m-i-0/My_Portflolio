// // Tech.jsx
// import React, { useState, useEffect, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from '../hoc';
// import { technologies } from '../constants';
// import { fadeIn, textVariant } from '../utils/motion';
// import { styles } from '../styles';

// const Tech = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 490px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);



//   // Set items per page based on whether it's mobile view or not
//   const itemsPerPage = isMobile? 5 : 12;
//   const totalPages = Math.ceil(technologies.length / itemsPerPage);

//   // Get the technologies for the current page
//   const currentItems = useMemo(() => {
//     return technologies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
//   }, [currentPage, itemsPerPage]);

//   // Handler for changing pages
//   const handlePageChange = (newPage) => {
//     if (newPage >= 0 && newPage < totalPages) {
//       setLoading(true);
//       setCurrentPage(newPage);
//       setTimeout(() => {
//         setLoading(false);
//       }, 550);
//     }
//   };

//   const Loader = () => (
//     <div className="flex justify-center items-center h-64">
//       <svg
//         className="animate-spin h-8 w-8 text-gray-600"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         ></circle>
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v8H4z"
//         ></path>
//       </svg>
//     </div>
//   );

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-left`}>What Skills I Know</p>
//         <h2 className={`${styles.sectionHeadText} text-left`}>Technical Skills.</h2>
//       </motion.div>

//       {loading ? (
//         <Loader />
//       ) : (
//         <div
//           className={
//             isMobile
//               ? "grid grid-cols-3 justify-center gap-1 mt-8"
//               : "grid grid-cols-6 justify-center gap-1 mt-8"
//           }
//         >
//           {currentItems.map((technology, index) => {
//             // For mobile: If the item is on the second row (index 4 and 5),
//             // place them in the center by using col-start classes.
            

//             return (
//               <div
//                 key={technology.name}
//                 className={isMobile? `flex justify-center items-center w-30 h-20`: `flex justify-center items-center gap-2 w-30 h-30 `}
//               >
//                 <BallCanvas icon={technology.icon} name={technology.name} />
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center mt-8">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 0}
//           className={`mx-4 text-3xl ${
//             currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           &#8592; {/* Left Arrow */}
//         </button>

//         <div className="flex space-x-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index)}
//               className={`px-2 py-1 ${
//                 currentPage === index ? 'font-bold text-blue-500' : ''
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages - 1}
//           className={`mx-4 text-3xl ${
//             currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           &#8594; {/* Right Arrow */}
//         </button>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(React.memo(Tech), "");

// Tech.jsx
// Tech.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 490px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const itemsPerPage = isMobile ? 5 : 12;
  const totalPages = Math.ceil(technologies.length / itemsPerPage);

  const currentItems = useMemo(() => {
    return technologies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setLoading(true);
      setCurrentPage(newPage);
      setTimeout(() => {
        setLoading(false);
      }, 550);
    }
  };

  const Loader = () => (
    <div className="flex justify-center items-center h-64">
      <svg
        className="animate-spin h-8 w-8 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
    </div>
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left`}>What Skills I Know</p>
        <h2 className={`${styles.sectionHeadText} text-left`}>Technical Skills.</h2>
      </motion.div>

      {loading ? (
        <Loader />
      ) : (
        <div
          className={
            isMobile
              ? "grid grid-cols-3 justify-center gap-1 mt-8"
              : "grid grid-cols-6 justify-center gap-1 mt-8"
          }
        >
          {/* First row items (for mobile: 3 items) */}
          {currentItems.map((technology, index) => {
            // On mobile, show only the first 3 items here
            if (isMobile && index >= 3) return null;

            return (
              <div
                key={technology.name}
                className={
                  isMobile
                    ? "flex justify-center items-center w-30 h-20"
                    : "flex justify-center items-center gap-2 w-30 h-30"
                }
              >
                <BallCanvas icon={technology.icon} name={technology.name} />
              </div>
            );
          })}

          {/* If on mobile and there are more than 3 items, center the remaining 2 items */}
          {isMobile && currentItems.length > 3 && (
            <div className="col-span-3 flex justify-center gap-2 mt-1">
              {currentItems.slice(3).map((technology) => (
                <div
                  key={technology.name}
                  className="flex justify-center items-center w-20 h-20"
                >
                  <BallCanvas icon={technology.icon} name={technology.name} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className={`mx-4 text-3xl ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          &#8592; {/* Left Arrow */}
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-2 py-1 ${
                currentPage === index ? 'font-bold text-blue-500' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className={`mx-4 text-3xl ${
            currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(React.memo(Tech), "");
