import { Link } from "react-router-dom";

function BlogCard( { title, description }) {
    return (
        <>
            <Link to={`/blog/${title}`} className="flex flex-col items-center">
                <div className="glass m-4 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}
export default BlogCard;