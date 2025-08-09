import React from 'react'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import ContactSection from '../../components/frontend/ContactSection'
import CustomMetaTags from '../../layouts/frontend/CustomMetaTags'

const ContactPage = () => {
    return (
        <>
            <CustomMetaTags title="Contact | Arafat Rony" />
            <div className="container">
                <HireMeAdd />
            </div>

            <ContactSection />
        </>
    )
}

export default ContactPage