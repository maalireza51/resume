import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { specs } from "./specs";

const ItemSpecs = ({ handler, img }) => {
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}>
      <HiOutlineArrowLeft onClick={handler} className="cursor-pointer" />
      <div
        className="relative overflow-hidden rounded-md shadow-md shadow-neutral-900
     bg-slate-50 m-5 "
      >
        <Image
          alt={img}
          src={`/${img}.jpg`}
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="p-5">
        <h5 className="font-bold mb-2">{specs[img].title}</h5>
        <div className="pl-2">
          <p className="mb-4">{specs[img].description}</p>
          {specs[img].link.length ? (
            <a
              href={specs[img].link}
              className="p-2 px-5 rounded-full bg-skin text-white capitalize"
            >
              {specs[img].title}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ItemSpecs;
