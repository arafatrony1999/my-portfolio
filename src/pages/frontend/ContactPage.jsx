import React from 'react'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import ContactSection from '../../components/frontend/ContactSection'

const ContactPage = () => {
    return (
        <>
            <div className="container">
                <HireMeAdd />
            </div>

            <ContactSection />
        </>
    )
}

export default ContactPage