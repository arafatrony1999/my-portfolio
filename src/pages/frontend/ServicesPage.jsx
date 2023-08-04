import React from 'react'
import GetServicePage from './GetServicePage'
import ServicesSection from '../../components/frontend/ServicesSection'
import HireMeAdd from '../../components/frontend/HireMeAdd'

const ServicesPage = () => {
    return (
        <>
            <div className="container">
                <HireMeAdd />
            </div>

            <ServicesSection />
            <GetServicePage />
        </>
    )
}

export default ServicesPage