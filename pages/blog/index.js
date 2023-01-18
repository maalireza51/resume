import { HiNewspaper } from "react-icons/hi2";

const Blog = () => {
    return (
        <section>
        <div className="flex border-b-2">
          <HiNewspaper className="w-6 h-6 text-skin" />
          <h3 className="text-lg font-bold ml-2">Blog</h3>
        </div>
        </section>
    );
}

export default Blog;