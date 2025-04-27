import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogBySlug } from "../api/blogApi";
import Lottie from "lottie-react";
import landscape1 from "../assets/landscape1.json";

function ReadtheBraindump() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await fetchBlogBySlug(slug);
        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blog", error);
      }
    };
    getBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black relative w-full min-h-screen flex flex-col items-center justify-center object-cover overflow-hidden">
      <Lottie
        animationData={landscape1}
        loop
        autoplay
        className="absolute top-0 left-0 w-full z-0 opacity-50"
      />
      <div className="glass z-10 p-8 text-white w-1/2 mt-20 h-[520px]">
        <h1 className="text-3xl font-bold text-center">{blog.title}</h1>
        <div className="mt-2 h-5/6 overflow-y-auto">
          <p className="description">{blog.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ReadtheBraindump;
