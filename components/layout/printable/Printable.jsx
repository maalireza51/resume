import Image from "next/image";
import {
  BsFillCircleFill,
  BsFillEnvelopeFill,
  BsFillStarFill,
  BsPhone,
  BsPhoneFill,
  BsPinMapFill,
  BsStar,
  BsStarHalf,
} from "react-icons/bs";

const Printable = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-2 flex flex-col items-center text-white bg-skin relative py-2">
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
        <div className="text-lg font-bold mb-5">Alireza Mashayekhi</div>
        <div className="bg-black/50 w-full text-center py-2 mb-5">
          Front-end Developer
        </div>
        <div className="text-left w-full pl-2 mb-3">
          <ul>
            <li className="flex">
              <BsFillCircleFill className="mr-2 h-6" />{" "}
              <span className="font-semibold mr-2">Born:</span>August 2, 1997
            </li>
            <li className="flex">
              <BsFillCircleFill className="mr-2 h-6" />{" "}
              <span className="font-semibold mr-2">Marriage:</span>Not Married
            </li>
            <li className="flex mb-6">
              <BsFillCircleFill className="mr-2 h-6" />{" "}
              <span className="font-semibold mr-2">Military Service:</span>
              Finished
            </li>
            <li className="flex">
              <BsFillEnvelopeFill className="mr-2 h-6" />{" "}
              <span className="font-semibold mr-2">Email:</span>
              Maalireza51@gmail.com
            </li>
            <li className="flex">
              <BsPhone className="mr-2 h-6" />{" "}
              <span className="font-semibold mr-2">Phone:</span>+989393230196
            </li>
            <li className="flex">
              <BsPinMapFill className="mr-2 h-6" />{" "}
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
              Adobe Illustrator/Xd/photoshope
            </span>
            <span className="bg-black/30 rounded-md"></span>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col relative p-6">
        <div className="mb-6">
          <h3 className="font-bold text-2xl bg-neutral-700 text-white p-2 rounded-md mb-2">
            Profile
          </h3>
          I'm a huge passionate about web, designing and coding. Creative
          front-end developer offering +3 years of experience working with
          Javascript, Html/Css skilled in designing, developing and working with
          Reactjs library in Nextjs framework. Adept at contributing to a highly
          collaborative work environment, finding solutions and determining
          customer satisfaction.
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-2xl bg-neutral-700 text-white p-2 rounded-md mb-2">
            Education
          </h3>
          Bachelor of Electronics engineer, University of Urmia, West Azarbijan
          <small className="block">September 2015 - September 2019</small>
        </div>
        <div className="">
          <h3 className="font-bold text-2xl bg-neutral-700 text-white p-2 rounded-md mb-2">
            Employment History
          </h3>
          Bachelor of Electronics engineer, University of Urmia, West Azarbijan
          <small className="block">September 2015 - September 2019</small>
        </div>
      </div>
    </div>
  );
};

export default Printable;
