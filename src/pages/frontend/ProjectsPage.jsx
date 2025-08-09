import React from 'react'
import { useCategoryContext } from '../../context/CategoryContext'
import { usePortfolioContext } from '../../context/PortfolioContext'
import { Link } from 'react-router-dom'
import BigText from '../../components/frontend/BigText'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import CustomMetaTags from '../../layouts/frontend/CustomMetaTags'

const ProjectsPage = () => {
    const { categories, setFilteredCategory, single_category } = useCategoryContext()
    const { all_portfolios } = usePortfolioContext()

    return (
        <div className='container min-height'>
            <CustomMetaTags title="Projects  | Arafat Rony" />
            <HireMeAdd />

            <BigText big='PORTFOLIO' normal='RESENT' colored='WORKS' />
            
            <div className="bg-dark mt-5 text-center d-flex flex-wrap py-2 justify-content-center">
                <button className={`h5 px-3 ${single_category.length === 0 ? 'text-danger' : 'text-white'}`} onClick={() => setFilteredCategory(0)}>All</button>
                {
                    categories.filter((category) => {
                        return category.type === 'website'
                    }).map((category, index) => {
                        return(
                            <button className={`h5 px-3 ${single_category.length !== 0 && single_category[0].id === category.id ? 'text-danger' : 'text-white'}`} key={index} onClick={() => setFilteredCategory(category.id)}>{category.name}</button>
                        )
                    })
                }
            </div>

            <div className="d-flex flex-wrap justify-content-between my-5">
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
                    }) : <h3 className=' w-100 text-center text-danger'>No portfolio available for this category!</h3> :
                    all_portfolios ? all_portfolios.map((portfolio, index) => {
                        return(
                            <div className="service-card" key={index}>
                                <img className='img-fluid' src={portfolio.image} alt="" />
                                <Link to={`/project?id=${portfolio.id}`} className="service-details portfolio-details">
                                    {portfolio.name}
                                </Link>
                            </div>
                        )
                    }) : <h3 className=' w-100 text-center text-danger'>No project available!</h3>
                }
                <div className="service-card"></div>
                <div className="service-card"></div>
            </div>
        </div>
    )
}

export default ProjectsPage