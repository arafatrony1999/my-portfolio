import React from 'react'
import BigText from './BigText'
import ColoredBtn from './ColoredBtn'
import { useCategoryContext } from '../../context/CategoryContext'
import { usePortfolioContext } from '../../context/PortfolioContext'
import { Link } from 'react-router-dom'

const PortfolioSection = () => {
    const { categories, setFilteredCategory, single_category } = useCategoryContext()
    const { all_portfolios } = usePortfolioContext()
    return (
        <>
            <BigText big='PORTFOLIO' normal='RESENT' colored='WORKS' />
            
            <div className='container skills-section my-5'>

                <div className="portfolio-links d-flex mx-auto my-3 flex-wrap">
                    <button className={single_category.length === 0 ? 'text-danger' : undefined} onClick={() => setFilteredCategory(0)}>All</button>
                    {
                        categories.filter((category) => {
                            return category.type === 'website'
                        }).map((category, index) => {
                            return(
                                <button className={single_category.length !== 0 && single_category[0].id === category.id ? 'text-danger' : undefined} key={index} onClick={() => setFilteredCategory(category.id)}>{category.name}</button>
                            )
                        })
                    }
                </div>

                
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap">
                    {
                        single_category.length !== 0 ?
                        single_category[0].portfolios.length !== 0 ?
                        single_category[0].portfolios.map((portfolio, index) => {
                            return(
                                <div className="service-card" key={index}>
                                    <img className='img-fluid' src={portfolio.image} alt="" />
                                    <Link to={`/project?id=${portfolio.id}`} className="service-details portfolio-details">
                                        {portfolio.name}
                                    </Link>
                                </div>
                            )
                        }) : <h3 className=' w-100 text-center text-danger'>No project available for this category!</h3> : all_portfolios && all_portfolios.map((portfolio, index) => {
                            return(
                                <div className="service-card" key={index}>
                                    <img className='img-fluid' src={portfolio.image} alt="" />
                                    <Link to={`/project?id=${portfolio.id}`} className="service-details portfolio-details">
                                        {portfolio.name}
                                    </Link>
                                </div>
                            )
                        })
                    }

                    <div className="service-card"></div>
                    <div className="service-card"></div>

                </div>

                <div className="text-center my-5 w-100">
                    <ColoredBtn btnLink='/projects' btnText='GO TO ALL'  />
                </div>
            </div>
        </>
    )
}

export default PortfolioSection