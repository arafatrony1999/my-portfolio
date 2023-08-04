import React from 'react'
import PricingSection from '../../components/frontend/PricingSection'
import HireMeAdd from '../../components/frontend/HireMeAdd'

const PricingPage = () => {
    return (
        <>
            <div className="container">
                <HireMeAdd />
            </div>
            
            <PricingSection />
        </>
    )
}

export default PricingPage