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
  const itemsPerPage = 4;
  const totalPages = Math.ceil(technologies.length / itemsPerPage);
  const [loading, setLoading] = useState(false);

  // Get the technologies for the current page
  const currentItems = useMemo(() => {
    return technologies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  }, [currentPage, itemsPerPage]);


  // Handler for changing pages
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setLoading(true);
      setCurrentPage(newPage);
      setTimeout(() => {
        setLoading(false);
      }, 550); // Adjust the timeout as needed
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
      {/* w-30 h-30 */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-6 justify-center gap-1 mt-8">
          {currentItems.map((technology) => (
            <div key={technology.name} className="w-16 h-16">
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          ))}
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
