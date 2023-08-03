import React from 'react'
import { Link } from 'react-router-dom'
import { useCategoryContext } from '../../context/CategoryContext'
import { usePortfolioContext } from '../../context/PortfolioContext'


const PortfolioRight = () => {
    const { categories, setFilteredCategory, setFilteredCategoryBlog } = useCategoryContext()
    const { portfolios } = usePortfolioContext()

    const onClick = (id) => {
        setFilteredCategory(id)
        setFilteredCategoryBlog(id)
    }

    return (
        <div className='w-100'>
            <input type="text" placeholder='Search...' className='w-100 mb-5' />

            <div className="bg-dark text-white p-3 py-2">Categories</div>

            <ul>
                {
                    categories.map((category) => {
                        return(
                            <li key={category.id} className=' list-unstyled py-2'>
                                <Link onClick={() => onClick(category.id)} to='/categories'>{category.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            
            <div className="bg-dark text-white p-3 py-2 mb-4">Recent Projects</div>
            {
                portfolios.map((portfolio, index) => {
                    return(
                        <div className="service-card w-75 d-block m-auto my-2" key={index}>
                            <img className='img-fluid' src={portfolio.image} alt="" />
                            <Link to={`/project?id=${portfolio.id}`} className="service-details portfolio-details">
                                {portfolio.name}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PortfolioRight