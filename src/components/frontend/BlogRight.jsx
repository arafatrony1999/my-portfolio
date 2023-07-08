import React from 'react'
import { Link } from 'react-router-dom'
import { useCategoryContext } from '../../context/CategoryContext'
import { useBlogContext } from '../../context/BlogContext'

const BlogRight = () => {
    const { categories } = useCategoryContext()
    const { blogs } = useBlogContext()
    return (
        <div className='w-100'>
            <input type="text" placeholder='Search...' className='w-100 mb-5' />

            <div className="bg-dark text-white p-3 py-2">Categories</div>

            <ul>
                {
                    categories.map((category) => {
                        return(
                            <li key={category.id} className=' list-unstyled py-2'>
                                <Link to='/'>{category.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            
            <div className="bg-dark text-white p-3 py-2">Recent Articles</div>
            <ul>
                {
                    blogs.map((blog) => {
                        return(
                            <li key={blog.id} className=' list-unstyled py-2'>
                                <Link to='/'>{blog.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BlogRight