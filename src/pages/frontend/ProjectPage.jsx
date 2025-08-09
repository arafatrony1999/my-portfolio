import React, { useEffect } from 'react'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import SubscriberSection from '../../components/frontend/SubscriberSection'
import ContactSection from '../../components/frontend/ContactSection'
import PortfolioRight from '../../components/frontend/PortfolioRight'
import { useSearchParams } from 'react-router-dom'
import { usePortfolioContext } from '../../context/PortfolioContext'
import FullPortfolio from '../../components/frontend/FullPortfolio'
import CustomMetaTags from '../../layouts/frontend/CustomMetaTags'

const ProjectPage = () => {
    const [id, setId] = useSearchParams()

    const { setSinglePortfolio, singlePortfolio } = usePortfolioContext()

    useEffect(() => {
        setId(id)
        setSinglePortfolio(id.get('id'))
        //eslint-disable-next-line
    }, [id])


    return (
        <div className='container-fluid'>
            <CustomMetaTags title={singlePortfolio && singlePortfolio.name} />
            <div className="container">
                <HireMeAdd />

                <div className="row">
                    <div className="col-12 col-md-8 py-2">
                        <FullPortfolio portfolio={singlePortfolio} />
                    </div>
                    <div className="col-12 col-md-4 py-2">
                        <PortfolioRight />
                    </div>
                </div>
            </div>

            <SubscriberSection />
            <ContactSection />
        </div>
    )
}

export default ProjectPage