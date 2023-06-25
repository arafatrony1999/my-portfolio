import React from 'react'
import BigText from './BigText'
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div className='pricing-section'>
            <BigText big='CONTACT' normal='GET A FREE' colored='CONSULTANT' />

            <div className="container skills-section">
                <div className="contact-left d-flex flex-wrap">
                    <div className="py-3 w-100 d-flex">
                        <FaMapMarkerAlt />
                        <div className="contact-details">
                            <h4>Address</h4>
                            <p>43/3 Lalbagh, Dhaka 1205</p>
                        </div>
                    </div>
                    <div className="py-3 w-100 d-flex">
                        <FaRegEnvelope />
                        <div className="contact-details">
                            <h4>Email</h4>
                            <p>arafat.rony1999@gmail.com</p>
                        </div>
                    </div>
                    <div className="py-3 w-100 d-flex">
                        <FaPhoneAlt />
                        <div className="contact-details">
                            <h4>Phone</h4>
                            <p>+880 1879 923111</p>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <form action="" className="w-100">
                        <input type="text" placeholder='Enter Your Name...' />
                        <input type="text" placeholder='Enter Your Email...' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Write Your Message...'></textarea>
                        <button className="my-btn white-btn m-0 my-3">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection