import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from '../reducer/AdminReducer'
import axios from '../helper/Axios'

const AdminContext = createContext()

const initialState = {
    loading: false,
    authentication: false,
    wrong: false,
    user: []
}

const AdminProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [menuOpen, setMenuOpen] = useState(false)

    const getUser = () => {
        dispatch({type: 'INITIAL_STATE'})
        let data = localStorage.getItem('admin')

        if(data){
            dispatch({type: 'API_DATA', payload: JSON.parse(data)})
        }else{
            dispatch({type: 'NO_USER_FOUND'})
        }
    }

    const login = (user, password, isChecked) => {
        dispatch({type: 'INITIAL_STATE'})
        const formData = new FormData()

        formData.append('user', user)
        formData.append('password', password)

        axios.post('/loginAdmin', formData)
        .then((res) => {
            if(res.data === 0){
                dispatch({type: 'WRONG_CREDENTIAL'})
            }else{
                if(isChecked){
                    localStorage.setItem('admin', JSON.stringify(res.data))
                }
                dispatch({type: 'API_DATA', payload: res.data})
            }
        })
        .catch((error) => {

        })
    }

    const responsiveMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const removeSidebar = () => {
        setMenuOpen(false)
    }

    const logout = () => {
        localStorage.removeItem('admin')

        dispatch({type: 'LOGOUT'})
    }

    useEffect(() => {
        getUser()
    }, [])

    return(
        <AdminContext.Provider value={{...state, login, logout, responsiveMenu, menuOpen, removeSidebar}}>
            {children}
        </AdminContext.Provider>
    )
}

const useAdminContext = () => {
    return useContext(AdminContext)
}

export { useAdminContext, AdminContext, AdminProvider }