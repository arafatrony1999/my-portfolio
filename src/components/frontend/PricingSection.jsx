import React from 'react'
import BigText from './BigText'
import ColoredBtn from './ColoredBtn';
import { usePricingContext } from '../../context/PricingContext'

const PricingSection = () => {
    const { pricing } = usePricingContext()
    
    return (
        <div className='pricing-section'>
            <BigText className="py-3" big='PRICING' normal='CHOOSE A' colored='PACKAGE' />

            <div className="container skills-section">
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap">
                    {
                        pricing.map((price, index) => {
                            return(
                                <div key={index} className="service-card pricing-card">
                                    <img width={50} height={100} className='py-3' src={price.icon} alt=''/>
                                    <h6>For {price.title}</h6>
                                    <div dangerouslySetInnerHTML={{__html: price.description}} />
                                    {
                                        price.off_price ?
                                        <>
                                            <div className="original-price">${price.main_price}</div>
                                            <div className="cut-price text-uppercase">${price.off_price}/{price.title}</div>
                                        </> :
                                            <div className="cut-price text-uppercase">${price.main_price}/{price.title}</div>
                                    }
            
                                    
                                    <div className="text-center my-2 w-100">
                                        <ColoredBtn btnLink={`/get_service?package_id=${price.id}`} btnText='Choose this package'  />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingSection