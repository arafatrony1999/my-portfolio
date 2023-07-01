import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/PortfolioReducer'
import axios from '../helper/Axios'

const PortfolioContext = createContext();

const initialState = {
    loading: false,
    portfolios: [],
    filteredPortfolios: []
}


const PortfolioProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getPortfolios = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getPortfolios')
        .then((res) => {
            console.log(res.data)
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    useEffect(() => {
        getPortfolios()
    }, [])
    

    return(
        <PortfolioContext.Provider value={{...state, getPortfolios}}>
            { children }
        </PortfolioContext.Provider>
    )
}

const usePortfolioContext = () => {
    return useContext(PortfolioContext)
}

export {usePortfolioContext, PortfolioContext, PortfolioProvider}