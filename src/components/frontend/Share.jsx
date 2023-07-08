import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsEnvelope, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Share = () => {
    return (
        <div className='py-4'>
            <h5>Sharing is caring</h5>
            <div className="social-buttons my-4">
                <div className="products-others-right">
                    <Link to="/" style={{background: "#0E76E6"}}><BsEnvelope /></Link>
                    <Link to="/" style={{background: "#0087BA"}}><BsTwitter /></Link>
                    <Link to="/" style={{background: "#2D4373"}}><FaFacebookF /></Link>
                    <Link to="/" style={{background: "#005983"}}><FaLinkedinIn /></Link>
                    <Link to="/" style={{background: "#1F7D1E"}}><BsWhatsapp /></Link>
                </div>
            </div>
        </div>
    )
}

export default Share