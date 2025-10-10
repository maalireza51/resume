'use client'
import { HiClipboardDocumentList } from "react-icons/hi2";
import { motion } from "motion/react";

const Resume = () => {
  return (
    <section>
      <div className="flex justify-between border-b-2">
        <div className="flex">
          <HiClipboardDocumentList className="w-6 h-6 text-skin" />
          <h3 className="text-lg font-bold ml-2">Resume</h3>
        </div>
      </div>
      <div className="p-3">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <motion.li
            className="mb-7 pl-4"
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="absolute w-3 h-3 bg-skin rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 ring-8 ring-white dark:ring-neutral-800"></div>
            <div>
              <sub>Software Engineer</sub>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Qanun.bio (AI-Powered Healthcare Research Platform)
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Next.js, React, TypeScript, DuckDB, ECharts, SQL, ShadCN/UI, 
              Agentic AI, Data Analysis, Notebook Systems
            </p>
            <ul className="pl-5 list-disc text-sm">
              <li>
                Developed comprehensive data science platform enabling researchers to 
                transform clinical and genomic datasets into actionable scientific insights
              </li>
              <li>
                Built interactive dataset analysis and exploration tools with advanced 
                visualization using ECharts and real-time SQL queries via DuckDB
              </li>
              <li>
                Implemented AI-powered chatbot system that guides researchers through 
                data analysis workflows and provides explainable AI recommendations
              </li>
              <li>
                Created Jupyter-style notebook interface for collaborative research 
                with version control, reproducible pipelines, and audit-ready reports
              </li>
              <li>
                Designed and developed landing pages and admin panels for the Clinical Data Studio, 
                Agentic AI Workspace, and Genomic Data Studio products
              </li>
              <li>
                Integrated secure data upload, metadata preservation, and end-to-end 
                encryption features ensuring compliance with healthcare data regulations
              </li>
              <li>
                Collaborated with AI engineers to implement autonomous agents that plan, 
                execute, and explain complex scientific analyses with full traceability
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="mb-7 pl-4"
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ring-8 ring-white dark:ring-neutral-800"></div>
            <div>
              <sub>Software Engineer</sub>
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
                Architected and implemented scalable search functionality using
                Leaflet, resulting in a 40% increase in user engagement and 10%
                search to product conversion rate measured by heap analytics.
              </li>
              <li>
                Optimized application performance by 20% through code splitting,
                image optimization, and bundle size reduction techniques.
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
              <li>
                Mentored junior software engineers and led technical code
                reviews.
              </li>
              <li>
                Collaborated in Agile development environment using Trello for
                project management, working closely with cross-functional teams
                including product managers, designers, and backend engineers
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
            <div>
              <sub>Full-Stack Developer</sub>
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
                Architected and developed full-stack automation system from
                scratch to monitor and manage 4 warehouses with real-time data
                processing.
              </li>
              <li>
                Built comprehensive data visualization dashboard using Chart.js
                and backend APIs to reduce data analysis time by 50%.
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
            <div>
              <sub>Full-Stack Developer</sub>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dekatech (AI Solutions Platform)
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              React, Next.js, AI Integration, REST API, 
              WebSocket, Bootstrap, Responsive Design, Git, Github
            </p>
            <ul className="pl-5 list-disc text-sm">
              <li>
                Developed intelligent AI-driven flows for enterprise clients, improving customer engagement by 35%
              </li>
              <li>
                Built real-time systems and AI communication platforms 
                using WebSocket technology for seamless user interactions
              </li>
              <li>
                Integrated machine learning services to create context-aware AI assistants
              </li>
              <li>
                Collaborated with AI engineers to implement agentic systems 
                that could autonomously handle complex business workflows
              </li>
              <li>
                Created responsive admin dashboards for managing AI bot configurations, 
                training data, and performance analytics across multiple client deployments
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
            <div>
              <sub>Frontend Engineer</sub>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              RasmSafar (Travel booking platform)
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              React, Next.js, TypeScript, REST API, TailwindCSS, 
              Material UI, Git, Figma, Responsive Design
            </p>
            <ul className="pl-5 list-disc text-sm">
              <li>
                Developed user-friendly travel booking interface with search filters 
                and booking management system
              </li>
              <li>
                Implemented responsive design ensuring optimal user experience 
                across desktop and mobile devices
              </li>
              <li>
                Built comprehensive admin dashboard for managing bookings, 
                travel packages, and customer data
              </li>
              <li>
                Integrated payment gateways and booking confirmation systems 
                to streamline the reservation process
              </li>
              <li>
                Collaborated with design team to implement pixel-perfect UI 
                components following Figma specifications
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="mb-7 pl-4"
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ring-8 ring-white dark:ring-neutral-800"></div>
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
