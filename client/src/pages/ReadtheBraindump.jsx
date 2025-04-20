import landscape1 from "../assets/landscape1.json";
import Lottie from "lottie-react";
import { useParams } from "react-router-dom";
import BlogData from "../BlogData";

function ReadtheBraindump() {
  let { slug } = useParams();
  let currBlog = BlogData.find((blog) => blog.slug === slug);


  if (!currBlog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-black relative w-full h-[900px] flex flex-col items-center justify-center object-cover overflow-hidden">
      <Lottie
        animationData={landscape1}
        loop
        autoplay
        className="absolute top-0 left-0 w-full z-0 opacity-50"
      />
      <div className="glass z-10 p-4 rounded-xl text-white">
        <h1 className="text-3xl font-bold">{currBlog.title}</h1>
        <p className="mt-4">{currBlog.description}</p>
      </div>
    </div>
  );
}

export default ReadtheBraindump;
