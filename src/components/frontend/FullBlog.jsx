import formal from '../../assets/images/formal.jpg'
import { FaFacebookF, FaLinkedinIn, FaCalendarAlt } from "react-icons/fa";
import { BsEnvelope, BsTwitter, BsWhatsapp, BsBarChartFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import DateFormat from '../../helper/DateFormat'

const FullBlog = (props) => {
    if(props.blog){
        return (
            <div className='w-100'>
                <h4 className='text-uppercase'>{props.blog.categories.name}</h4>
                <h1>{props.blog.title}</h1>
    
                <div className="blog-details py-3 d-flex">
                    <div className="author">
                        <img src={formal} alt="" />
                        <span className='px-3'>Arafat Rony</span>
                    </div>
                    <div className="blog-date">
                        <FaCalendarAlt />
                        <span className='px-3'>
                            <DateFormat date={props.blog.created_at} />
                        </span>
                    </div>
                </div>
    
                <img className='img-fluid' src={props.blog.image} alt="" />
    
                <div className="social-buttons my-4">
                    <div className="products-others-right">
                        <Link to="/" style={{background: "#0E76E6"}}><BsEnvelope /></Link>
                        <Link to="/" style={{background: "#0087BA"}}><BsTwitter /></Link>
                        <Link to="/" style={{background: "#2D4373"}}><FaFacebookF /></Link>
                        <Link to="/" style={{background: "#005983"}}><FaLinkedinIn /></Link>
                        <Link to="/" style={{background: "#1F7D1E"}}><BsWhatsapp /></Link>
                    </div>
                </div>
    
                <div className="blog-count d-flex align-items-center py-2">
                    <BsBarChartFill />
                    <span>{props.blog.views}</span>
                </div>
    
                <div className='full-blog'>
                    <div dangerouslySetInnerHTML={{__html: props.blog.description }}></div>
                </div>
            </div>
        )
    }else{
        return <h1>Loading...</h1>
    }
}

export default FullBlog