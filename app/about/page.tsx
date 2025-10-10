"use client";
import {
  HiUser,
  HiCog,
  HiLightBulb,
  HiGlobeAlt,
  HiHeart,
  HiTrophy,
  HiRocketLaunch,
} from "react-icons/hi2";
import { motion } from "motion/react";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = {
    languages: [
      { name: "JavaScript", level: 95, years: "5+" },
      { name: "TypeScript", level: 90, years: "3+" },
      { name: "Python", level: 80, years: "2+" },
    ],
    frontend: [
      { name: "React.js", level: 95, years: "4+" },
      { name: "Next.js", level: 90, years: "3+" },
      { name: "TailwindCSS", level: 95, years: "3+" },
    ],
    backend: [
      { name: "Node.js", level: 90, years: "4+" },
      { name: "Express.js", level: 85, years: "3+" },
      { name: "NestJS", level: 80, years: "2+" },
      { name: "GraphQL", level: 50, years: "2+" },
    ],
    tools: [
      { name: "Docker", level: 85, years: "3+" },
      { name: "AWS", level: 80, years: "2+" },
      { name: "Git", level: 95, years: "5+" },
      { name: "Kubernetes", level: 70, years: "1+" },
    ],
  };

  const achievements = [
    {
      icon: HiTrophy,
      title: "Performance Optimization Expert",
      description:
        "Improved system performance by 60% through advanced code optimization and architectural redesigns",
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: HiRocketLaunch,
      title: "Team Leadership",
      description:
        "Successfully led cross-functional teams of 5-8 engineers on multiple high-impact projects",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: HiLightBulb,
      title: "Innovation Driver",
      description:
        "Introduced modern development practices that reduced deployment time by 40%",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: HiGlobeAlt,
      title: "Global Impact",
      description:
        "Built scalable solutions serving 100K+ users across multiple countries",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  const interests = [
    { name: "System Architecture", emoji: "🏗️" },
    { name: "AI Agents", emoji: "🤖" },
    { name: "Cloud Computing", emoji: "☁️" },
    { name: "Open Source", emoji: "🌟" },
    { name: "Tech Mentoring", emoji: "👨‍🏫" },
    { name: "Continuous Learning", emoji: "📚" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center border-b-2 border-skin/20 pb-4 mb-6">
          <HiUser className="w-8 h-8 text-skin mr-3" />
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            About Me
          </h1>
        </div>
      </motion.section>

      {/* Professional Summary */}
      <motion.section
        variants={itemVariants}
        className="bg-gradient-to-r from-transparent to-gray-500/5 p-6 rounded-2xl"
      >
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
          <HiLightBulb className="w-6 h-6 text-skin mr-2" />
          Professional Journey
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">
            {"I'm a passionate "}
            <strong className="text-skin">Software Engineer</strong> with over 5
            years of experience crafting innovative digital solutions. My
            journey began with a curiosity about how technology can solve
            real-world problems, and it has evolved into a deep expertise in
            building scalable, user-centric applications.
          </p>
          <p className="leading-relaxed">
            {`Throughout my career, I've had the privilege of working with diverse
            teams across various industries, from fintech startups to
            established marketplace platforms. I specialize in full-stack
            development, system architecture, and team leadership, always
            focusing on delivering exceptional user experiences while
            maintaining robust, scalable codebases.`}
          </p>
          <p className="leading-relaxed">
            My approach combines technical excellence with strategic thinking,
            ensuring that every solution I build not only meets immediate
            requirements but also scales gracefully as businesses grow.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section variants={itemVariants}>
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
          <HiCog className="w-6 h-6 text-skin mr-2" />
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-900 dark:bg-neutral-900"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4 capitalize flex items-center">
                <div className="w-3 h-3 bg-skin rounded-full mr-2"></div>
                {category === "languages"
                  ? "Programming Languages"
                  : category === "frontend"
                  ? "Frontend Technologies"
                  : category === "backend"
                  ? "Backend Technologies"
                  : "DevOps & Tools"}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-700/50 rounded-lg hover:bg-skin/10 dark:hover:bg-skin/20 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-skin rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span className="font-medium text-gray-800 dark:text-white group-hover:text-skin transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-medium px-2 py-1 bg-skin/20 text-skin rounded-full">
                        {skill.years} years experience
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section variants={itemVariants}>
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
          <HiTrophy className="w-6 h-6 text-skin mr-2" />
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-900 dark:bg-neutral-900"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg bg-gray-50 dark:bg-neutral-700`}
                >
                  <achievement.icon
                    className={`w-6 h-6 ${achievement.color}`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Languages & Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Interests */}
        <motion.section variants={itemVariants}>
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
            <HiHeart className="w-5 h-5 text-skin mr-2" />
            Interests & Passion
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-900 dark:bg-neutral-900">
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <motion.div
                  key={interest.name}
                  className="flex items-center space-x-2 px-3 py-2 bg-skin/10 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-lg">{interest.emoji}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {interest.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
// export default index;
