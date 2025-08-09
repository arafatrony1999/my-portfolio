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
    
    let data = localStorage.getItem('admin')

    const getAdmin = async (auth) => {
        const formData = new FormData()
        formData.append('auth', auth)
        await axios.post('/getAdmin', formData)
        .then((res) => {
            if(res.data === 1){
                dispatch({type: 'API_DATA', payload: JSON.parse(data)})
            }else{
                logout()
            }
        })
        .catch((error) => {
            logout()
        })
    }

    const getUser = () => {
        // dispatch({type: 'INITIAL_STATE'})

        if(data){
            let authFound = JSON.parse(data)
            if(authFound[0].auth){
                getAdmin(authFound[0].auth)
            }else{
                logout()
            }
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
            console.log(error.message)
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
        // eslint-disable-next-line
    }, [])


    return(
        <AdminContext.Provider value={{...state, login, getAdmin, logout, responsiveMenu, menuOpen, removeSidebar}}>
            {children}
        </AdminContext.Provider>
    )
}

const useAdminContext = () => {
    return useContext(AdminContext)
}

export { useAdminContext, AdminContext, AdminProvider }