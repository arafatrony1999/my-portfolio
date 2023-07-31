import React from 'react'
import { Link } from 'react-router-dom'
import { useCategoryContext } from '../../context/CategoryContext'
import { useBlogContext } from '../../context/BlogContext'

const BlogRight = () => {
    const { categories, setFilteredCategory, setFilteredCategoryBlog } = useCategoryContext()
    const { blogs } = useBlogContext()

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

            
            <div className="bg-dark text-white p-3 py-2">Recent Articles</div>
            <ul>
                {
                    blogs.map((blog) => {
                        return(
                            <li key={blog.id} className=' list-unstyled py-2'>
                                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BlogRight