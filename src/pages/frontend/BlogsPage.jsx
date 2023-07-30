import React from 'react'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import BigText from '../../components/frontend/BigText'
import { useCategoryContext } from '../../context/CategoryContext'
import { Link } from 'react-router-dom'
import { useBlogContext } from '../../context/BlogContext'
import DateFormat from '../../helper/DateFormat'

const BlogsPage = () => {
    const { categories, setFilteredCategoryBlog, single_category_blog } = useCategoryContext()
    const { blogs } = useBlogContext()

    return (
        <div className='container'>
            <HireMeAdd />

            <BigText big='ARTICLES' normal='NEW &' colored='INSIGHTS' />

            <div className="blogs-categories bg-dark mt-5 text-center d-flex flex-wrap py-2 justify-content-center">
                    <button className='text-white h5 px-3' onClick={() => setFilteredCategoryBlog(0)}>All</button>
                {
                    categories.map((category, index) => {
                        return <button onClick={() => setFilteredCategoryBlog(category.id)} key={index} className='text-white h5 px-3'>{category.name}</button>
                    })
                }
            </div>

            
            <div className="services-cards w-100 d-flex justify-content-between flex-wrap pt-5 mb-5">
                    {
                        single_category_blog.length !== 0 ? 
                        single_category_blog[0].blogs.length !== 0 ?
                        single_category_blog[0].blogs.map((blog, index) => {
                            return(
                                <div key={index} className="blogs-card blog-page-card mb-3">
                                    <div className="blog-image">
                                        <img className='img-fluid' src={blog.image} alt="" />
                                    </div>
                                    <div className="p-3 pb-0">
                                        <div className="blog-title">
                                            <h5>
                                                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h5>
                                        </div>

                                        <p className='py-3'>
                                            {blog.meta_description.slice(0, 100)}...
                                        </p>

                                        <p><DateFormat date={blog.created_at} /></p>
                                    </div>
                                </div>
                            )
                        }) : <h3 className=' w-100 text-center text-danger'>No blog available for this category!</h3> : 
                        blogs && blogs.map((blog, index) => {
                            return(
                                <div key={index} className="blogs-card blog-page-card mb-3">
                                    <div className="blog-image">
                                        <img className='img-fluid' src={blog.image} alt="" />
                                    </div>
                                    <div className="p-3 pb-0">
                                        <div className="blog-title">
                                            <h5>
                                                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h5>
                                        </div>

                                        <p className='py-3'>
                                            {blog.meta_description.slice(0, 100)}...
                                        </p>

                                        <p><DateFormat date={blog.created_at} /></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default BlogsPage