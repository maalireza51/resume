"use client";
import { motion } from "motion/react";
import {
  HiArrowDown,
  HiCommandLine,
  HiCog,
  HiCircleStack,
} from "react-icons/hi2";
import ProfileImg from "../components/layout/profile/ProfileImg";
import ProfileItems from "../components/layout/profile/ProfileItems";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const skills = [
    {
      name: "Frontend",
      icon: HiCommandLine,
      desc: "React, Next.js, TypeScript",
    },
    { name: "Backend", icon: HiCog, desc: "Node.js, Express, Nest, APIs" },
    { name: "Database", icon: HiCircleStack, desc: "PostgreSQL, MongoDB" },
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Technologies Mastered" },
  ];

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-full px-6 overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Mobile Profile Image */}
      <motion.div
        className="flex items-center lg:hidden mb-8"
        variants={itemVariants}
      >
        <ProfileImg />
      </motion.div>

      {/* Main Hero Section */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <motion.div
          className="inline-block p-4 bg-gradient-to-r from-transparent to-gray-500/10 rounded-2xl"
          animate={floatingAnimation}
        >
          <h1 className="md:hidden text-3xl md:text-4xl font-black text-skin mb-2">
            Alireza Mashayekhi
          </h1>
          <h1 className="hidden md:block text-3xl md:text-4xl font-black text-skin mb-2">
            Software Engineer
          </h1>
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Passionate about building scalable systems and crafting exceptional
            user experiences with modern technologies
          </p>
        </motion.div>
      </motion.div>

      {/* Skills Preview */}
      <motion.div className="w-full max-w-2xl mb-8" variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group p-4 bg-white dark:border-neutral-900 dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-skin/10 rounded-lg mb-3 group-hover:bg-skin/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-skin" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Statistics */}
      <motion.div className="w-full max-w-3xl mb-8" variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-gradient-to-br from-transparent to-gray-500/5 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-skin mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Profile Items */}
      <motion.div
        className="flex flex-col items-center lg:hidden mb-8"
        variants={itemVariants}
      >
        <ProfileItems />
      </motion.div>
    </motion.div>
  );
}
