import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/AdminReducer'
import axios from '../helper/Axios'

const AdminContext = createContext()

const initialState = {
    loading: false,
    user: []
}

const AdminProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getUser = async () => {
        await axios.get('/getUser')
        .then((res) => {
            if(res.data !== 0){
                dispatch({type: 'API_DATA', payload: res})
            }else{
                dispatch({type: 'NO_USER_FOUND'})
            }
        })
        .catch((error) => {

        })
    }

    useEffect(() => {
        getUser()
    }, [])

    return(
        <AdminContext.Provider value={{...state}}>
            {children}
        </AdminContext.Provider>
    )
}

const useAdminContext = () => {
    return useContext(AdminContext)
}

export { useAdminContext, AdminContext, AdminProvider }