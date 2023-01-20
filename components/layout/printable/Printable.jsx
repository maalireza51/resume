import Image from "next/image";
import {
  BsFillDiamondFill,
  BsFillEnvelopeFill,
  BsPhone,
  BsPinMapFill,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

const Printable = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-2 flex flex-col items-center text-white bg-skin relative py-2 border-r-2 border-r-skin">
        <div
          className="border-white rounded-full mb-3"
          style={{ borderWidth: "6px" }}
        >
          <Image
            src="/profileImg.jpg"
            width={170}
            height={170}
            alt="Alireza Mashayekhi"
            className="rounded-full border-8 border-transparent"
          />
        </div>
        <div className="text-lg font-bold">Alireza Mashayekhi</div>
        <div className=" mb-5">
          <a
            href="https://www.alireza-mashayekhi.ir"
            className="underline underline-offset-4"
            target="_blank"
          >
            www.alireza-mashayekhi.ir
          </a>
        </div>
        <div className="bg-black/50 w-full text-center py-2 mb-3">
          Front-end Developer
        </div>
        <div className="text-left w-full pl-2 mb-3">
          <ul>
            <li className="flex">
              <BsFillDiamondFill className="mr-2 h-6" />
              <span className="font-semibold mr-2">Born:</span>August 2, 1997
            </li>
            <li className="flex">
              <BsFillDiamondFill className="mr-2 h-6" />
              <span className="font-semibold mr-2">Marriage:</span>Not Married
            </li>
            <li className="flex mb-3">
              <BsFillDiamondFill className="mr-2 h-6" />
              <span className="font-semibold mr-2">Military Service:</span>
              Finished
            </li>
            <li className="flex">
              <BsFillEnvelopeFill className="mr-2 h-6" />
              <span className="font-semibold mr-2">Email:</span>
              Maalireza51@gmail.com
            </li>
            <li className="flex">
              <BsPhone className="mr-2 h-6" />
              <span className="font-semibold mr-2">Phone:</span>+989393230196
            </li>
            <li className="flex">
              <BsPinMapFill className="mr-2 h-6" />
              <span className="font-semibold mr-2">Location:</span>Tehran
              Province, Tehran
            </li>
          </ul>
        </div>
        <div className="w-4/5 mb-3">
          <div className="flex justify-center py-2 border-2 rounded-sm border-white font-bold mb-3">
            Language
          </div>
          <div className="flex justify-between">
            <span className="font-semibold py-2">English</span>
            <span className="bg-black/30 p-2 rounded-md">
              Upper Intermediate
            </span>
          </div>
        </div>
        <div className="w-4/5 mb-3">
          <div className="flex justify-center py-2 border-2 rounded-sm border-white font-bold mb-3">
            Skills
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Html/Css/Javascript</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Sass/Scss</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Jquery</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Bootstrap</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Tailwind Css</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">GIT</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Rest API</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">ES6/ES7</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">ReactJS</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Redux/redux-toolkit</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">NextJS</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
        </div>
        <div className="w-4/5">
          <div className="flex justify-center py-2 border-2 rounded-sm border-white font-bold mb-3">
            Have knowledge
          </div>
          <div className="flex justify-between">
            <span className="font-semibold py-1">TypeScript</span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold py-1">
              Adobe Illustrator/Xd/photoshop
            </span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col relative p-6">
        <div className="mb-6">
          <h3 className="flex font-bold text-2xl bg-neutral-700 text-white p-2 rounded-md mb-2 dark:bg-neutral-500">
            <ImProfile className="h-8 mr-1" /> Profile
          </h3>
          <p className="font-light">
            I'm a huge passionate about web, designing and coding. Creative
            front-end developer offering +3 years of experience working with
            Javascript, Html/Css skilled in designing, developing and working
            with Reactjs library in Nextjs framework. Adept at contributing to a
            highly collaborative work environment, finding solutions and
            determining customer satisfaction.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="flex font-bold text-2xl bg-neutral-700 text-white p-2 rounded-md mb-2 dark:bg-neutral-500">
            <FaGraduationCap className="h-8 mr-1" />
            Education
          </h3>
          Bachelor of Electronics engineer, University of Urmia, West Azarbijan
          <small className="block">September 2015 - September 2019</small>
        </div>
        <div className="">
          <h3 className="flex font-bold text-2xl bg-neutral-700 text-white p-2 rounded-md mb-2 dark:bg-neutral-500">
            <AiOutlineHistory className="h-8 mr-1" />
            Employment History
          </h3>
          <div className="p-3">
            <ol class="relative border-l border-gray-200 dark:border-gray-500">
              <li class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-white dark:bg-neutral-700 border border-skin rounded-full -left-3 ring-8 ring-white dark:ring-neutral-700">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-skin"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <a
                  class="flex items-center mb-1 text-lg font-semibold text-gray-900 underline dark:text-white"
                  href="https://www.qmoil.com"
                  target="_blank"
                >
                  Qmoil.com
                </a>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  March 2022
                </time>
                <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                  <ul className="list-disc pl-6">
                    <li>Design and develop admin panel</li>
                    <li>working with charts and api</li>
                    <li>Dark & light mode</li>
                  </ul>
                </div>
              </li>
              <li class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-white dark:bg-neutral-700 border border-skin rounded-full -left-3 ring-8 ring-white dark:ring-neutral-700">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-skin"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Portfolio template
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  September 2021
                </time>
                <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                  <ul className="list-disc pl-6">
                    <li>Freelancing a themeforest project</li>
                    <li>Copyright rules</li>
                    <li>Dark & light mode</li>
                  </ul>
                </div>
              </li>
              <li class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-white dark:bg-neutral-700 border border-skin rounded-full -left-3 ring-8 ring-white dark:ring-neutral-700">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-skin"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <a
                  href="https://www.shopenet.ir"
                  class="flex items-center mb-1 text-lg font-semibold text-gray-900 underline dark:text-white"
                  target="_blank"
                >
                  Shopenet.ir
                </a>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  Augest 2020
                </time>
                <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                  <ul className="list-disc pl-6">
                    <li>Create landing page</li>
                    <li>Illustrator objects</li>
                  </ul>
                </div>
              </li>
              <li class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-white dark:bg-neutral-700 border border-skin rounded-full -left-3 ring-8 ring-white dark:ring-neutral-700">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-skin"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3
                  class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                  href="https://www.qmoil.com"
                  target="_blank"
                >
                  DekaTech
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  September 2018
                </time>
                <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                  <ul className="list-disc pl-6">
                    <li>Design and develop landing</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Printable;
