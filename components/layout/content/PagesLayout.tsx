import { ReactNode } from "react";

const PagesLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-auto overflow-x-hidden h-full dark:text-neutral-50">
      {children}
    </div>
  );
};

export default PagesLayout;
