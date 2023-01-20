import Head from "next/head";
import ProfileImg from "../components/layout/profile/ProfileImg";
import ProfileItems from "../components/layout/profile/ProfileItems";

export default function Home() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex items-center lg:hidden mt-20">
          <ProfileImg />
        </div>
        <div className="my-5 text-center">
          <h1 className="text-2xl font-black text-skin">Alireza Mashayekhi</h1>
          <p className="">NextJs FrontEnd Developer</p>
        </div>
        <div className="flex flex-col items-center lg:hidden">
          <ProfileItems />
        </div>
      </div>
    </>
  );
}