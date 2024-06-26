import { useRef, useState } from "react";
import { HiOutlineArrowRight, HiRectangleGroup } from "react-icons/hi2";
import Item from "../../components/layout/content/experiences/Item";
import ItemSpecs from "../../components/layout/content/experiences/ItemSpecs";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState("");

  const handleSpecs = (img = "") => {
    setOpen(!open);
    setClicked(img);
  };
  return (
    <section>
      <div className="flex border-b-2 mb-5 justify-between">
        <div className="flex">
          <HiRectangleGroup className="w-6 h-6 text-skin" />
          <h3 className="text-lg font-bold ml-2">Experiences</h3>
        </div>
        {open && (
          <span
            className="flex items-center justify-between cursor-pointer px-3 mr-5 mb-2 bg-skin rounded-full text-white hover:shadow-md"
            onClick={handleSpecs}
          >
            back
            <HiOutlineArrowRight />
          </span>
        )}
      </div>
      {!open ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-3 p-4">
          <Item img={"shopenet"} handler={handleSpecs} priority />
          <Item img={"portfolio"} handler={handleSpecs} />
          <Item img={"shab"} handler={handleSpecs} />
          <Item img={"qmoil"} handler={handleSpecs} />
          <Item img={"hubispot"} handler={handleSpecs} />
          <Item img={"dekapay"} handler={handleSpecs} />
          <Item img={"rasmSafar"} handler={handleSpecs} />
        </div>
      ) : (
        <ItemSpecs handler={handleSpecs} img={clicked} />
      )}
    </section>
  );
};

export default Portfolio;
