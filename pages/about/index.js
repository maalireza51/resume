import { HiUser, HiPhone, HiEnvelope } from "react-icons/hi2";

const index = () => {
  return (
    <>
      <section>
        <div className="flex border-b-2">
          <HiUser className="w-6 h-6 text-skin" />
          <h3 className="text-lg font-bold ml-2">About Me</h3>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-thin mb-5 text-neutral-300">Front-end Developer</h3>
          <p className="mb-3">
            I'm a huge passionate about web, designing and coding. Creative
            front-end developer offering +3 years of experience working with
            Javascript, Html/Css skilled in designing, developing and working
            with Reactjs library in Nextjs framework. Adept at contributing to a
            highly collaborative work environment, finding solutions and
            determining customer satisfaction
          </p>
          <hr/>
          <div className="flex flex-col md:flex-row flex-wrap mb-3">
            <div>
              <div className=" flex-1 mr-3 pt-2">
                <span className="font-semibold mr-2 pl-px border-l-2 border-skin ">Age:</span>
                25
              </div>
              <div className=" flex-1 mr-3 pt-2">
                <span className="font-semibold mr-2 pl-px border-l-2 border-skin ">Address:</span>
                <span className="whitespace-nowrap">Tehran Province</span>
              </div>
            </div>
            <div>
              <div className=" flex-1 mr-3 pt-2">
                <span className="whitespace-nowrap font-semibold mr-2 pl-px border-l-2 border-skin ">
                  Working Availablity:
                </span>
                <span className="sm:whitespace-nowrap">
                  Remote | On Site | Freelance
                </span>
              </div>
              <div className=" flex-1 mr-3 pt-2">
                <span className="whitespace-nowrap font-semibold mr-2 pl-px border-l-2 border-skin ">
                  English Skills:
                </span>
                <span className="whitespace-nowrap">Upper Intermediate</span>
              </div>
            </div>
            <div>
              <div className="flex flex-1 pt-2">
                <span className="font-semibold mr-2 pl-px self-start border-l-2 border-skin ">
                  Contact: 
                </span>
                <div className="inline-flex gap-1">
                  <a href="mailto:Maalireza@gmail.com">
                    <span className="inline-block bg-skin rounded-full text-white p-1">
                      <HiEnvelope />
                    </span>
                  </a>
                  <a href="tel:+989393230196">
                    <span className="inline-block bg-skin rounded-full text-white p-1">
                      <HiPhone />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="flex flex-wrap gap-1 mt-3">
            <span className="rounded-md border border-skin py-1 px-2">
              ReactJS
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              redux/redux-toolkit
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              NextJS
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              TypeScript
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              Sass&Scss
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              JavaScript
            </span>
            <span className="rounded-md border border-skin py-1 px-2">Git</span>
            <span className="rounded-md border border-skin py-1 px-2">
              Jquery
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              RestAPI
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              Tailwind
            </span>
            <span className="rounded-md border border-skin py-1 px-2">
              Bootstrap
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default index;
