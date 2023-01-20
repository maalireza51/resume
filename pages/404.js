import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h3 className=" font-bold text-lg text-skin mb-2">Page Not Found!</h3>
      <Link className="rounded-full bg-skin text-white py-1 px-3" href="/">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
