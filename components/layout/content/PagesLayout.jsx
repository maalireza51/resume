import { MoonLoader } from "react-spinners";
import { uiContext } from "../../../context/context";
import { useContext, useEffect } from "react";
const PagesLayout = ({ children }) => {
  const { pageChange, setPageChange } = useContext(uiContext);

  useEffect(() => {
    setTimeout(() => {
      setPageChange(false);
    }, 1000);
  }, [pageChange]);

  return (
    <div className="overflow-auto h-full dark:text-neutral-50">
      {pageChange ? (
        <div className="lg:absolute top-0 left-0 w-full h-full flex justify-center items-center lg:bg-neutral-900/5 lg:dark:bg-neutral-50/5">
          <MoonLoader color="rgba(200, 200, 200, 1)" />
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default PagesLayout;
