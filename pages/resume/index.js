import { HiClipboardDocumentList } from "react-icons/hi2";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section>
      <div className="flex justify-between border-b-2">
        <div className="flex">
          <HiClipboardDocumentList className="w-6 h-6 text-skin" />
          <h3 className="text-lg font-bold ml-2">Resume</h3>
        </div>
        <a
          href="/AlirezaMashayekhi.pdf"
          className="mx-3 text-skin text-sm px-5 text-center hover:underline"
          target="_blank"
        >
          Download CV
        </a>
      </div>
      <div className="p-3">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <motion.li
            className="mb-7 pl-4"
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ring-8 ring-white dark:ring-neutral-800"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2023–Present
            </time>
            <div>
              <sub>Front-end Software Developer</sub>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Shab (Short-term house rental marketplace)
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              TypeScript, MicroFrontend, Next.js, React, Redux, Redux-Thunk ,
              MaterialUI, PWA, REST API, Leaflet, Jest, Testing Library,
              Analytics, Node.js, Express Figma, Trello, Git, Docker
            </p>
            <ul className="pl-5 list-disc text-sm">
              <li>
                Transformed search experience by improving maps using Leaflet.
                It leads to a 40% increase in user engagement and 10% search to
                product conversion rate measured by heap analytics.
              </li>
              <li>
                Reduced first-load bundle size of home page by 20% through the
                implementation of webp image format.
              </li>
              <li>
                Provided specialized tools to monitor OKRs and analytics, Caused
                20% improvement in goals alignment and performance tracking like
                A/B testing.
              </li>
              <li>
                Collaborated with designers to construct a new design system
                based on MaterialUI.
              </li>
              <li>
                Implemented progressive web application to have app-like look
                and performance improvements
              </li>
              <li>Experienced mentoring other front-end developers.</li>
              <li>
                Agile worked by using Trello as task management and worked
                closely with product managers and designers
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="mb-7 pl-4"
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ring-8 ring-white dark:ring-neutral-800"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 2021–December 2022
            </time>
            <div>
              <sub>Front-end Engineer</sub>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Qmoil (Recycling oil warehouses automation)
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Next.js, React, Vite, MicroFrontend, Redux-toolkit, REST API,
              TailwindCSS, Ant Design, Jest, Git, Docker, CI/CD
            </p>
            <ul className="pl-5 list-disc text-sm">
              <li>
                Created automation admin panel from A to Z in order to monitor 4
                warehouses.
              </li>
              <li>
                Integrated data visualization libraries and charts (Chart.js)
                into the admin panel to reduce the time required to analyze
                complex datasets.
              </li>
              <li>Configured micro frontend by editing Vite configs</li>
              <li>
                Facilitated asynchronous data fetching by using state management
                (Redux-toolkit) to maintain data consistency.
              </li>
              <li>
                Dockerized the project to ensure seamless deployment and
                consistency across different environments.
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="mb-7 pl-4"
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ring-8 ring-white dark:ring-neutral-800"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2020–October 2021
            </time>
            <div>
              <sub>Front-end Developer</sub>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dekatech (IoT platform)
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              React, Bootstrap, JQuery, Responsive design, REST API, Socket,
              Node.js, Git, Github
            </p>
            <ul className="pl-5 list-disc text-sm">
              <li>
                Developed admin panel and landing by converting 15 JQuery pages
                to React
              </li>
              <li>
                Used both Socket and HTTP to create connections between devices
                and host
              </li>
              <li>
                Established responsive design and development using AdobeXD
              </li>
              <li>
                Worked nearly with hardware engineers to prototype and test IoT
                solutions. Validating functionalities into the panel
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="mb-7 pl-4"
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ring-8 ring-white dark:ring-neutral-800"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 2018–March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Freelance
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              HTML, CSS, JavaScript, JQuery, Responsive design, CMS, Git,
              Photoshop
            </p>
            <ul className="pl-5 list-disc text-sm">
              <li>
                Built and tested pages for presenting +30 ecommerce templates.
              </li>
              <li>
                Streamlined client workflows by providing guidance on website
                content management systems, Resulting in a 25% reduction in
                unnecessary communication and increased client autonomy.
              </li>
              <li>
                Successfully developed corporate and eCommerce websites for 10+
                clients
              </li>
              <li>
                Consulted with clients to understand their business needs and
                recommended the most suitable web solutions.
              </li>
              <li>
                Crafted a CV template from photoshop design to list in
                Themeforest.
              </li>
            </ul>
          </motion.li>
        </ol>
      </div>
    </section>
  );
};

export default Resume;
