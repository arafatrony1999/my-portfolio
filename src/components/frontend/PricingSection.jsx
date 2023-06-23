import React from 'react'
import BigText from './BigText'
import { BsHourglassTop } from "react-icons/bs";
import ColoredBtn from './ColoredBtn';

const PricingSection = () => {
    return (
        <div className='pricing-section'>
            <BigText className="py-3" big='PRICING' normal='CHOOSE A' colored='PACKAGE' />

            <div className="container skills-section">
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap">
                    <div className="service-card pricing-card">
                        <BsHourglassTop />
                        <h6>For Hours</h6>
                        <p>A Simple option but powerful to manage your business.</p>
                        <p>Maximum 8 hours a day.</p>
                        <p>Work until done.</p>
                        <p>Email support.</p>

                        <div className="original-price">$40</div>
                        <div className="cut-price">$20/HOUR</div>

                        
                        <div className="text-center my-2 w-100">
                            <ColoredBtn btnLink='/pricing' btnText='GO TO ALL'  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingSection