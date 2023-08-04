import './assets/css/header.css'
import './assets/css/admin.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useAdminContext } from '../../context/AdminContext'
import Login from '../../components/admin/Login'

const MasterLayout = () => {
    const { authentication, loading } = useAdminContext()

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        authentication ? <div className='fixed'>
            <Header />
            <div className="main-body">
                <Sidebar />
                <Outlet />
            </div>
        </div> : <Login />
    )

}

export default MasterLayout