import React from 'react'
import OnlyWhiteBtn from './OnlyWhiteBtn'
import BigText from './BigText'
import blog1 from '../../assets/images/blog1.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'

const BlogsSection = () => {
    return (
        <div className='services-section py-4'>
            <BigText className="py-3" txtColor='white' big='ARTICLES' normal='MY' colored='BLOGS' />

            <div className="container skills-section">
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap pt-5">
                    <div className="blogs-card">
                        <div className="blog-image">
                            <img className='img-fluid' src={blog1} alt="" />
                        </div>
                        <div className="p-3 pb-0">
                            <div className="blog-title">
                                <h5>Success Story</h5>
                            </div>

                            <p className='py-3'>Starting from the end of my degree. It was a turning point...</p>

                            <p>December 25, 2022</p>
                        </div>
                    </div>
                    <div className="blogs-card">
                        <div className="blog-image">
                            <img className='img-fluid' src={blog2} alt="" />
                        </div>
                        <div className="p-3 pb-0">
                            <div className="blog-title">
                                <h5>Success Story</h5>
                            </div>

                            <p className='py-3'>Starting from the end of my degree. It was a turning point...</p>

                            <p>December 25, 2022</p>
                        </div>
                    </div>
                    <div className="blogs-card">
                        <div className="blog-image">
                            <img className='img-fluid' src={blog3} alt="" />
                        </div>
                        <div className="p-3 pb-0">
                            <div className="blog-title">
                                <h5>Success Story</h5>
                            </div>

                            <p className='py-3'>Starting from the end of my degree. It was a turning point...</p>

                            <p>December 25, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="text-center w-100">
                    <OnlyWhiteBtn />
                </div>
            </div>
        </div>
    )
}

export default BlogsSection