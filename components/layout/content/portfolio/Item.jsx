import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BsFullscreen } from "react-icons/bs";

const Item = ({ img, handler }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-md shadow-md shadow-neutral-900
     bg-slate-50 mb-5"
      onClick={()=>handler(img)}
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
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-900/60
        flex justify-center items-center text-white font-extrabold capitalize"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{ opacity: hover ? 1 : 0 }}
      >
        {img}
        <span className="absolute bottom-0 right-0 m-2 hover:text-white cursor-pointer">
          <BsFullscreen className="w-6 h-6" />
        </span>
      </motion.div>
    </div>
  );
};

export default Item;
