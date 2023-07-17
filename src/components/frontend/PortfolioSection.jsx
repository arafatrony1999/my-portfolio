import React from 'react'
import BigText from './BigText'
import ColoredBtn from './ColoredBtn'
import { useCategoryContext } from '../../context/CategoryContext'
import { usePortfolioContext } from '../../context/PortfolioContext'

const PortfolioSection = () => {
    const { categories, setFilteredCategory, single_category } = useCategoryContext()
    const { all_portfolios } = usePortfolioContext()
    return (
        <>
            <BigText big='PORTFOLIO' normal='RESENT' colored='WORK' />
            
            <div className='container skills-section my-5'>

                <div className="portfolio-links d-flex mx-auto my-3 flex-wrap">
                    <button onClick={() => setFilteredCategory(0)}>All</button>
                    {
                        categories.filter((category) => {
                            return category.type === 'website'
                        }).map((category, index) => {
                            return(
                                <button key={index} onClick={() => setFilteredCategory(category.id)}>{category.name}</button>
                            )
                        })
                    }
                </div>

                
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap">
                    {
                        single_category.length !== 0 ? single_category[0].portfolios.map((portfolio, index) => {
                            return(
                                <div className="service-card" key={index}>
                                    <img className='img-fluid' src={portfolio.image} alt="" />
                                    <a href='/' className="service-details portfolio-details">
                                        {portfolio.name}
                                    </a>
                                </div>
                            )
                        }) : all_portfolios && all_portfolios.map((portfolio, index) => {
                            return(
                                <div className="service-card" key={index}>
                                    <img className='img-fluid' src={portfolio.image} alt="" />
                                    <a href='/' className="service-details portfolio-details">
                                        {portfolio.name}
                                    </a>
                                </div>
                            )
                        })
                    }

                    <div className="service-card"></div>
                    <div className="service-card"></div>

                </div>

                <div className="text-center my-5 w-100">
                    <ColoredBtn btnLink='/pricing' btnText='GO TO ALL'  />
                </div>
            </div>
        </>
    )
}

export default PortfolioSection