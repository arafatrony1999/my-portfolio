import React from 'react'
import TestimonialSection from '../../components/frontend/TestimonialSection'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import CustomMetaTags from '../../layouts/frontend/CustomMetaTags'

const ReviewsPage = () => {
    return (
        <>
            <CustomMetaTags title="Client Reviews" />
            <div className="container">
                <HireMeAdd />
            </div>

            <TestimonialSection />
        </>
    )
}

export default ReviewsPage