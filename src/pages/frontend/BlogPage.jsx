import React, { useEffect } from 'react'
import '../../assets/css/blog.css'
import HireMeAdd from '../../components/frontend/HireMeAdd'
import FullBlog from '../../components/frontend/FullBlog'
import Share from '../../components/frontend/Share'
import BlogArrow from '../../components/frontend/BlogArrow'
import BlogComments from '../../components/frontend/BlogComments'
import BlogRight from '../../components/frontend/BlogRight'
import SubscriberSection from '../../components/frontend/SubscriberSection'
import ContactSection from '../../components/frontend/ContactSection'
import { useParams } from 'react-router-dom'
import { useBlogContext } from '../../context/BlogContext'

const BlogPage = () => {

    const { setSingleBlog, singleBlog } = useBlogContext()

    const { slug } = useParams()

    useEffect(() => {
        setSingleBlog(slug)
        //eslint-disable-next-line
    }, [slug])


    return (
        <div className='container-fluid'>
            <div className="container">
                <HireMeAdd />

                <div className="row">
                    <div className="col-12 col-md-8">
                        <FullBlog />
                        <Share />
                        <BlogArrow />
                        { singleBlog && <BlogComments />}
                    </div>
                    <div className="col-12 col-md-4">
                        <BlogRight />
                    </div>
                </div>
            </div>

            <SubscriberSection />
            <ContactSection />
        </div>
    )
}

export default BlogPage