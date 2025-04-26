import { useState, useEffect } from "react";
import { fetchBlogs } from "../api/blogApi";
import BlogCard from "../components/BlogCard";
import space from "../assets/space.json";
import Lottie from "lottie-react";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    getBlogs();
  }, []);

  return (
    <>
      <div className="blog relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <Lottie animationData={space} loop autoplay className="absolute top-0 left-0 w-full z-0" />
        <h1 className="text-white font-black text-4xl z-10 mt-10">The BrainDumps</h1>

        <div className="flex flex-wrap justify-center mt-10 z-10">
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              description={blog.description}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
