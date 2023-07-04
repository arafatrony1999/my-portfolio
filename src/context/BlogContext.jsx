import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/BlogReducer'
import axios from '../helper/Axios'

const BlogContext = createContext()

const initialState = {
    loading: false,
    blogs: [],
    filteredBlogs: [],
}

const BlogProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getBlogs = async () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        await axios.get('/getBlogs')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredBlogs = (search) => {
        dispatch({type: 'SET_FILTERED_Blogs', payload: {search: search, blogs: state.blogs}})
    }

    useEffect(() => {
        getBlogs()
    }, [])


    return(
        <BlogContext.Provider value={{...state, getBlogs, setFilteredBlogs}}>
            {children}
        </BlogContext.Provider>
    )
}

const useBlogContext = () => {
    return useContext(BlogContext)
}

export { useBlogContext, BlogContext, BlogProvider }