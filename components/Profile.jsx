import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-skin rounded-full p-1 mb-5">
        <Image
          src="/profileImg.jpg"
          width={150}
          height={150}
          alt="Alireza Mashayekhi"
          className="rounded-full border-2 border-white"
        />
      </div>
      <p className={`text-2xl font-medium mb-6 text-center`}>
        Hi, I'm Alireza Mashayekhi
      </p>
      <p className={`text-sm font-thin mb-6 text-center`}>
        I'm <span className="font-semibold text-skin">FrontEnd</span> Developer
        <br /> I'm trying to be <span className="font-semibold text-skin">Creative</span>
        <br /> and I love to <span className="font-semibold text-skin">Design</span>
        <br />
        and <span className="font-semibold text-skin">Develope</span>
      </p>

      <a
        href="/AlirezaMashayekhi-Resume.pdf"
        className="text-skin hover:text-white border border-skin hover:bg-skin rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300"
      >
        Download CV
      </a>

      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/alireza-mashayekhi">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0774da"
            className="w-6 h-6"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
          </svg>
        </a>
        <a href="https://t.me/alirezama76">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 333334 333334"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            className="w-6 h-6"
          >
            <defs>
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1="162482"
                y1="307276"
                x2="170852"
                y2="26057.5"
              >
                <stop offset="0" stopColor="#19a8dd" />
                <stop offset=".678" stopColor="#2ab2e2" />
                <stop offset="1" stopColor="#3cbde8" />
              </linearGradient>
            </defs>
            <circle cx="166667" cy="166667" r="166667" fill="url(#a)" />
            <path
              d="M246886 91205l-29735 149919s-4158 10396-15594 5404l-68618-52606-24952-12059-42002-14140s-6446-2288-7069-7277c-624-4992 7277-7694 7277-7694l166970-65498s13722-6030 13722 3951z"
              fill="#fefefe"
            />
            <path
              d="M127666 239440s-2003-188-4499-8089c-2495-7901-15178-49487-15178-49487l100846-64043s5822-3535 5614 0c0 0 1040 623-2079 3534s-79222 71320-79222 71320l-5481 46765z"
              fill="#d4e6f1"
            />
            <path
              d="M159250 214094l-27141 24745s-2122 1609-4443 601l5197-45965 26387 20619z"
              fill="#b6d0e5"
            />
          </svg>
        </a>
        <a href="https://github.com/maalireza51">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 border border-white"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Profile;
