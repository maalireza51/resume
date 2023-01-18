import { HiNewspaper } from "react-icons/hi2";
import Post from "../../components/layout/content/blog/post";
import { postsList } from "../../components/layout/content/blog/postsList";

const Blog = () => {
  const posts = postsList.map((post) => <Post key={post.id} post={post} />);
  return (
    <section>
      <div className="flex border-b-2 mb-3">
        <HiNewspaper className="w-6 h-6 text-skin" />
        <h3 className="text-lg font-bold ml-2">Blog</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts}
      </div>
    </section>
  );
};

export default Blog;
