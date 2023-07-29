import React from 'react'
import OnlyWhiteBtn from './OnlyWhiteBtn'
import BigText from './BigText'
import { useBlogContext } from '../../context/BlogContext'
import { Link } from 'react-router-dom'
import DateFormat from '../../helper/DateFormat'

const BlogsSection = () => {
    const { blogs } = useBlogContext()

    return (
        <div className='services-section py-4'>
            <BigText className="py-3" txtColor='white' big='ARTICLES' normal='MY' colored='BLOGS' />

            <div className="container skills-section">
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap pt-5">
                    {
                        blogs.slice(0, 3).map((blog, index) => {
                            return(
                                <div key={index} className="blogs-card">
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
                <div className="text-center w-100 py-5">
                    <OnlyWhiteBtn btnText="View all blogs" btnLink='/blogs' />
                </div>
            </div>
        </div>
    )
}

export default BlogsSection