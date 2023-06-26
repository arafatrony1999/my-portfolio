import React, { createRef } from 'react'
import BigText from './BigText'
import client1 from '../../assets/images/client1.png'
import client2 from '../../assets/images/client2.png'
import quotation from '../../assets/images/quotation.png'
import { Rating } from '@mui/material'
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const TestimonialSection = () => {

    const customSlider = createRef(Slider);

    const gotoNext = () => {
        customSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customSlider.current.slickPrev()
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    };


    return (
        <>
            <BigText big='TESTIMONIAL' normal='WHAT CLIENT' colored='SAYS' />


            <div className="container skills-section my-5">
                <div className="w-100 overflow-visible position-relative">
                    <div className="testimonial-buttons">
                        <button onClick={()=>gotoNext()}>
                            <BsArrowLeftShort />
                        </button>
                        <button onClick={()=>gotoPrev()}>
                            <BsArrowRightShort />
                        </button>
                    </div>
                    
                    <Slider {...settings} ref={customSlider}>
                        <div key={1} className='d-flex flex-wrap justify-content-between single-slider'>
                            <div className="testimonial-left">
                                <img src={client1} className='img-fluid mb-4' alt="" />
                                <div className="py-4">
                                    <h5 className='text-truncate'>Marvel Cinematic Universe</h5>
                                    <h3 className='text-truncate' style={{color: '#F06233'}}>Robert Downey Jr.</h3>
                                    <strong className='text-truncate'>Chief Operating Officer</strong>
                                </div>
                            </div>

                            <div className="testimonial-middle">
                                <div className="line"></div>
                            </div>

                            <div className="testimonial-right">
                                <div className="testimonial-right-top">
                                    <img className='img-fluid' src={quotation} alt="" />
                                </div>
                                <div className="testimonial-right-bottom">
                                    <div className="row d-flex flex-wrap justify-content-between border-bottom">
                                        <div className="col-12 col-md-8">
                                            <h3>Ecommerce Website Development</h3>
                                            <p style={{color: '#F06233'}} className="text-truncate">
                                                via Upwork, July 08, 1999 - October 06, 1999
                                            </p>
                                        </div>
                                        <div className="rounded col-12 col-md-4 rating-stars">
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </div>
                                    </div>

                                    <p className='py-3'>
                                        Arafat Rony has done an excellent job! He consistently meets deadlines and exceeds expectations regarding quality of work. Rehan is dependable and passionate about the work he does. He made a great addition to our team and we look forward to continue to work with him.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div key={2} className='d-flex flex-wrap justify-content-between single-slider'>
                            <div className="testimonial-left">
                                <img src={client2} className='img-fluid mb-4' alt="" />
                                <div className="py-4">
                                    <h5 className='text-truncate'>Marvel Cinematic Universe</h5>
                                    <h3 className='text-truncate' style={{color: '#F06233'}}>Robert Downey Jr.</h3>
                                    <strong className='text-truncate'>Chief Operating Officer</strong>
                                </div>
                            </div>

                            <div className="testimonial-middle">
                                <div className="line"></div>
                            </div>

                            <div className="testimonial-right">
                                <div className="testimonial-right-top">
                                    <img className='img-fluid' src={quotation} alt="" />
                                </div>
                                <div className="testimonial-right-bottom">
                                    <div className="row d-flex flex-wrap justify-content-between border-bottom">
                                        <div className="col-12 col-md-8">
                                            <h3>Ecommerce Website Development</h3>
                                            <p style={{color: '#F06233'}} className="text-truncate">
                                                via Upwork, July 08, 1999 - October 06, 1999
                                            </p>
                                        </div>
                                        <div className="rounded col-12 col-md-4 rating-stars">
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </div>
                                    </div>

                                    <p className='py-3'>
                                        Arafat Rony has done an excellent job! He consistently meets deadlines and exceeds expectations regarding quality of work. Rehan is dependable and passionate about the work he does. He made a great addition to our team and we look forward to continue to work with him.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </>
    )
}

export default TestimonialSection