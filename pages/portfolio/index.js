import { useState } from "react";
import { HiRectangleGroup } from "react-icons/hi2";
import Item from "../../components/layout/content/portfolio/Item";
import ItemSpecs from "../../components/layout/content/portfolio/ItemSpecs";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState("");
  const handleSpecs = (img = "") => {
    setOpen(!open);
    setClicked(img);
  };
  return (
    <section>
      <div className="flex border-b-2 mb-5">
        <HiRectangleGroup className="w-6 h-6 text-skin" />
        <h3 className="text-lg font-bold ml-2">Portfolio</h3>
      </div>
      {!open ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-3 p-4">
          <Item img={"shopenet"} handler={handleSpecs} />
          <Item img={"qmoil"} handler={handleSpecs} />
          <Item img={"hubispot"} handler={handleSpecs} />
          <Item img={"portfolio"} handler={handleSpecs} />
          <Item img={"dekapay"} handler={handleSpecs} />
        </div>
      ) : (
          <ItemSpecs handler={handleSpecs} img={clicked} />
      )}
    </section>
  );
};

export default Portfolio;
