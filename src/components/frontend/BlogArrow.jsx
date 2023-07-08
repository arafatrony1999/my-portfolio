import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogArrow = () => {
    return (
        <div className='d-flex justify-content-between align-items-center py-3'>
            <Link to='/' className="d-flex blog-arrow">
                <div className="arrow-icon">
                    <FaArrowLeft />
                </div>
                <div className="px-2">
                    <p className="py-0 my-0">Previous</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing el</span>
                </div>
            </Link>
            <Link to='' className="d-flex blog-arrow">
                <div className="px-2">
                    <p className="py-0 my-0">Next</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing el</span>
                </div>
                <div className="arrow-icon">
                    <FaArrowRight />
                </div>
            </Link>
        </div>
    )
}

export default BlogArrow