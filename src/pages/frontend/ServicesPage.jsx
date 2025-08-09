import React from 'react'
import GetServicePage from './GetServicePage'
import ServicesSection from '../../components/frontend/ServicesSection'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import CustomMetaTags from '../../layouts/frontend/CustomMetaTags'

const ServicesPage = () => {
    return (
        <>
            <CustomMetaTags title="Services | Arafat Rony" />
            <div className="container">
                <HireMeAdd />
            </div>

            <ServicesSection />
            <GetServicePage />
        </>
    )
}

export default ServicesPage