import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/AboutReducer'
import axios from '../helper/Axios'

const AboutContext = createContext()

const initialState = {
    loadingAbout: false,
    about: [],
    filteredAbout: [],
}

const AboutProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const getAbout = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getAbout')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredAbout = (search) => {
        dispatch({type: 'SET_FILTERED_SKILLS', payload: {search: search, skills: state.skills}})
    }

    useEffect(() => {
        getAbout()
    }, [])

    return(
        <AboutContext.Provider value={{...state, getAbout, setFilteredAbout}}>
            {children}
        </AboutContext.Provider>
    )
}

const useAboutContext = () => {
    return useContext(AboutContext)
}

export { useAboutContext, AboutContext, AboutProvider }