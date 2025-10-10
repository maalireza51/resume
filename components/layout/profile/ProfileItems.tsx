"use client";
import { BsLinkedin, BsEnvelope } from "react-icons/bs";
import { motion } from "motion/react";

const ProfileItems = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center space-y-4"
    >
      {/* Greeting */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white hidden lg:block">
          Hi, I&apos;m{" "}
          <span className="text-skin">
            Alireza Mashayekhi
          </span>
        </h2>
      </motion.div>

      {/* Professional Description */}
      <motion.div variants={itemVariants} className="text-center max-w-xs">
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <div className="text-sm leading-relaxed">
            I&apos;m a{" "}
            <span className="font-semibold text-skin">Software Engineer</span>
            <br />
            Passionate about{" "}
            <span className="font-semibold text-skin">System Architecture</span>
            <br />
            and I love to{" "}
            <span className="font-semibold text-skin">Design</span>
            {" & "}
            <span className="font-semibold text-skin">Build</span>
            <br />
            scalable solutions
          </div>
        </div>
      </motion.div>

      {/* Download CV Button */}
      <motion.div variants={itemVariants}>
        <a
          href="/AlirezaMashayekhi-v2.pdf"
          className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-skin border-2 border-skin rounded-full hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-skin/25"
        >
          <span className="absolute inset-0 w-full h-full bg-skin rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
          <span className="relative flex items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download CV</span>
          </span>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-4"
      >
        <div className="flex space-x-3">
          <motion.a
            href="https://www.linkedin.com/in/alireza-mashayekhi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <BsLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </motion.a>

          <motion.a
            href="mailto:maalireza51@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-3 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
          >
            <BsEnvelope className="w-5 h-5 text-red-500 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors" />
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </motion.a>
        </div>
      </motion.div>

      {/* Status Badge */}
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-2"
      >
        <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-700 dark:text-green-400">
            Available for opportunities
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileItems;
