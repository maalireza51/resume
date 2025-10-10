import Image from "next/image";

const ProfileImg = () => {
  return (
    <div className="bg-skin rounded-full p-1 lg:mb-5">
      <Image
        src="/profileImg3.jpg"
        width={150}
        height={150}
        alt="Alireza Mashayekhi"
        className="rounded-full border-2"
        priority
      />
    </div>
  );
};

export default ProfileImg;
