import { Link } from "react-router-dom";

function BlogCard({ title, description, slug }) {
  return (
    <Link to={`/blog/${slug}`} className="flex flex-col items-center">
      <div className="glass m-4 p-6 w-90 h-20 text-center text-white text-xl font-bold rounded-m hover:scale-105 transition-transform duration-300">
        <h1>{title}</h1>
      </div>
    </Link>
  );
}

export default BlogCard;
