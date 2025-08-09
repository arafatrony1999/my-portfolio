import React from 'react'
import PricingSection from '../../components/frontend/PricingSection'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import CustomMetaTags from '../../layouts/frontend/CustomMetaTags'

const PricingPage = () => {
    return (
        <>
            <CustomMetaTags title="Pricing | Arafat Rony" />
            <div className="container">
                <HireMeAdd />
            </div>
            
            <PricingSection />
        </>
    )
}

export default PricingPage