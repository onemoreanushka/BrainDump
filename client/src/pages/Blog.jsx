import BlogCard from "../components/BlogCard";
import BlogData from "../BlogData";
import nightsky from "../assets/nightsky.json";
import Lottie from "lottie-react";

function Blog() {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Animation */}
        <Lottie
          animationData={nightsky}
          loop
          autoplay
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        {/* Foreground Content */}
        <h1 className="text-white font-black text-4xl z-10 mt-10">The BrainDumps</h1>

        <div className="flex flex-wrap justify-center mt-10 z-10">
          {BlogData.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
