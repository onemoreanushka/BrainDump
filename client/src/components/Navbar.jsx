import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="glass h-24 flex justify-between items-center px-8 py-2 mx-12 my-4">
        <img className="w-16 h-16 rounded-full" src="/logo.png" alt="Logo" />
        <Link
          className="bg-transparent hover:scale-110  text-white font-semibold transition-all duration-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="bg-transparent hover:scale-110  text-white font-semibold transition-all duration-500"
          to="/knowme"
        >
          Know Me
        </Link>
        <Link
          className="bg-transparent hover:scale-110  text-white font-semibold transition-all duration-500"
          to="/blog"
        >
          View Blogs
        </Link>
      </div>
    </>
  );
}

export default Navbar;
