import { HiClipboardDocumentList } from "react-icons/hi2";
import {motion} from "framer-motion"

const Resume = () => {
  return (
    <section>
      <div className="flex border-b-2">
        <HiClipboardDocumentList className="w-6 h-6 text-skin" />
        <h3 className="text-lg font-bold ml-2">Resume</h3>
      </div>
      <div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <motion.li className="mb-7 ml-4" initial={{x:"10%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              NextJS Framework
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Not long since I started it but the beauty of this major pushed me
              to design and develop my CV template by NextJS
            </p>
          </motion.li>
          <motion.li className="mb-7 ml-4" initial={{x:"10%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              ReactJS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I got deep in ReactJS which is a great library in client side. I
              learned class components and when react 17 released functional
              components with Hooks.
            </p>
          </motion.li>
          <motion.li className="mb-7 ml-4" initial={{x:"10%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Front-end Development
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Learned Html/CSS/JS and Bootstrap Jquery and established some
              projects such as Portfolio, Admin Panel and . . .
            </p>
          </motion.li>
          <motion.li className="mb-7 ml-4" initial={{x:"10%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1.5}}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2018
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              UI/UX Design
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Learned Adobe Illustrator and Adobe XD
            </p>
          </motion.li>
          <motion.li className="mb-7 ml-4" initial={{x:"10%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:2}}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2017
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              DekaTech IOT StartUp
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I worked on an IOT based product with a lovely group of other
              universities. After a year the product considered as a knowledge
              based IOT automation.
            </p>
          </motion.li>
          <motion.li className="mb-7 ml-4" initial={{x:"10%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5, delay:2.5}}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2015
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Electronics Urmia University
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Because of my interest in coding I learned many programming
              languages in this time such as C/C++ and Java by android studio.
            </p>
          </motion.li>
        </ol>
      </div>
    </section>
  );
};

export default Resume;
