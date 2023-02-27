import Image from "next/image";
import { motion } from "framer-motion";

const Post = ({ post }) => {
  return (
    <motion.div
      className="relative shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:shadow-black rounded-lg m-3 overflow-hidden" initial={{y:"10%",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}}
    >
      <div>
        <Image
          alt={post?.title}
          src={post?.imgsrc}
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="p-2 pb-8">
        <h5 className="font-bold mb-2">{post?.title}</h5>
        <p className="mb-5 line-clamp-3">{post?.body}</p>
        <a
          href={post?.link}
          className="absolute left-2 bottom-2 capitalize rounded-lg py-1 px-3 border border-gray-400"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          read more
        </a>
      </div>
    </motion.div>
  );
};

export default Post;
