import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";
const ProfileItems = () => {
  return (
    <>
      <p className={`text-2xl font-medium mb-6 text-center hidden lg:flex`}>
        Hi, I&apos;m Alireza Mashayekhi
      </p>
      <p className={`text-sm font-thin mb-3 text-center`}>
        I&apos;m <span className="font-semibold text-skin">FrontEnd</span>{" "}
        Developer
        <br /> I&apos;m trying to be{" "}
        <span className="font-semibold text-skin">Creative</span>
        <br /> and I love to{" "}
        <span className="font-semibold text-skin">Design</span>
        <br />
        and <span className="font-semibold text-skin">Develop</span>
      </p>

      <a
        href="/AlirezaMashayekhi-v2.pdf"
        className="text-skin hover:text-white border border-skin hover:bg-skin rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 cursor-pointer"
        // onClick={()=>window.print()}
      >
        Download CV
      </a>

      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/alireza-mashayekhi">
          <BsLinkedin className="w-6 h-6 text-blue-500 bg-white rounded-md" />
        </a>
        <a href="https://t.me/alirezama76">
          <BsTelegram className="w-6 h-6 text-lightBlue-500 bg-white rounded-full" />
        </a>
        <a href="https://github.com/maalireza51">
          <BsGithub className="w-6 h-6 text-neutral-800 bg-white rounded-full" />
        </a>
      </div>
    </>
  );
};

export default ProfileItems;
