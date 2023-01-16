import PagesLayout from "./PagesLayout";
import Profile from "../profile/Profile";

const Content = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-full ">
      <div className="basis-1/3 hidden lg:block">
        <Profile />
      </div>
      <div className="relative overflow-hidden lg:basis-2/3 border-left border-gray-500 p-5">
        <div className="overflow-auto h-full dark:text-neutral-50">
          <PagesLayout>{children}</PagesLayout>
        </div>
      </div>
    </div>
  );
};

export default Content;
