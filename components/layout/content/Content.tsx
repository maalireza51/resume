import PagesLayout from "./PagesLayout";
import Profile from "../profile/Profile";
import { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-full ">
      <div className="basis-1/3 max-w-96 hidden lg:block">
        <Profile />
      </div>
      <div className="relative overflow-hidden lg:flex-1 border-left border-gray-500 p-5">
        <div className="overflow-auto h-full dark:text-neutral-50">
          <PagesLayout>{children}</PagesLayout>
        </div>
      </div>
    </div>
  );
};

export default Content;
