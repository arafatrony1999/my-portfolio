import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CategoryReducer'
import axios from '../helper/Axios'

const CategoryContext = createContext()

const initialState = {
    loading: false,
    categories: [],
    filteredCategories: [],
}

const CategoryProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getCategories = async () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        await axios.get('/getCategories')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredCategories = (search) => {
        dispatch({type: 'SET_FILTERED_CATEGORIES', payload: {search: search, categories: state.categories}})
    }

    useEffect(() => {
        getCategories()
    }, [])


    return(
        <CategoryContext.Provider value={{...state, getCategories, setFilteredCategories}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategoryContext = () => {
    return useContext(CategoryContext)
}

export { useCategoryContext, CategoryContext, CategoryProvider }