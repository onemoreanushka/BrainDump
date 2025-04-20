import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="glass h-20 flex justify-between items-center px-4 mx-12 my-4 ">
                <img className="w-16 h-16 rounded-full" src="/logo.png" alt="Logo" />
                <Link className="text-white" to="/">Home</Link>
                <Link className="text-white" to="/knowme">Know Me</Link>
                <Link className="text-white" to="/blog">View Blogs</Link>

            </div>
        </>
    )
}

export default Navbar;