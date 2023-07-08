import React from 'react'
import formal from '../../assets/images/formal.jpg'

const HireMeAdd = () => {
    return (
        <div className='hire-me-add w-100 my-5 rounded'>
            <div className="row">
                <div className="col-12 col-md-2">
                    <div className="d-flex justify-content-center">
                        <img className='rounded-circle' src={formal} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-10 m-auto">
                    <h5 className='mb-3'>Do you want me to develop a website for you?</h5>
                    <button className="rounded white-btn d-inline-block py-1 px-3">Yes, I want Arafat to develop my website</button>
                </div>
            </div>
        </div>
    )
}

export default HireMeAdd