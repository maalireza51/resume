import { HiUser, HiPhone, HiEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <section>
        <div className="flex border-b-2">
          <HiUser className="w-6 h-6 text-skin" />
          <h3 className="text-lg font-bold ml-2">About Me</h3>
        </div>
        <motion.div
          className="mb-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="my-2">
            <strong>Front-end developer</strong> with 5+ years of experience
            designing and building responsive web design for a variety of
            devices considering different types of industries. Proficient with
            CSS and JS Frameworks, with extensive knowledge of UX and customer
            experience. Notable achievements include boosting the conversion
            rate of an existing website by 60% with improved code and design.
            Able to effectively lead tasks and mentor junior members of the
            team.
          </p>
          <hr />
          <div className="my-1">
            <h3 className="whitespace-nowrap font-semibold text-sm mt-2">
              Programming Languages:
            </h3>
            <p className="pl-2 text-sm">JavaScript (ES6+) | TypeScript</p>
          </div>
          <div className="my-1">
            <h3 className="whitespace-nowrap font-semibold  text-sm mt-2">
              Web Frameworks and Libraries:
            </h3>
            <p className="pl-2  text-sm">
              Next.js | React | Vite | Cypress | Jest | Testing Library |
              GraphQL
            </p>
          </div>
          <div className="my-1 pb-2">
            <h3 className="whitespace-nowrap font-semibold  text-sm mt-2">
              Additional Tools and Technologies:
            </h3>
            <p className="pl-2  text-sm">
              MicroFrontend, Apollo, Redux, MaterialUI, TailwindCSS, Ant Design,
              PWA, Git, GitlabCI/CD, Docker, NestJS, Node.js, LocalStack (AWS)
            </p>
          </div>
          <hr />
          <div>
            <div className=" flex-1 mr-3 pt-2">
              <p className="font-semibold mr-2 pl-1 border-l-2 border-skin ">
                Education
              </p>
              <p>
                Bachelor of Electronics Engineer - Urmia university{" "}
                <small>{"(September 2015–July 2019)"}</small>
              </p>
            </div>
          </div>
          <div>
            <div className=" flex-1 mr-3 pt-2">
              <p className="whitespace-nowrap font-semibold mr-2 pl-1 border-l-2 border-skin ">
                Language
              </p>
              <p>
                English - <small>Professional working proficiency</small>
              </p>
            </div>
          </div>
          {/* <div className="flex flex-wrap gap-1 mt-3">
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              NextJS
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              ReactJS
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              redux/redux-toolkit
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Material UI
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Antdesign
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Styled-Component
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Sass&Scss
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              JavaScript
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              TypeScript
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Git
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Jquery
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              RestAPI
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Tailwind
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              Bootstrap
            </span>
            <span className="rounded-md border border-neutral-800 dark:border-neutral-100 py-1 px-2">
              PWA
            </span>
          </div> */}
        </motion.div>
      </section>
    </>
  );
};
export default index;
