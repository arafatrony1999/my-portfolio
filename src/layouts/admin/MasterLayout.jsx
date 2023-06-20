import './assets/css/header.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const MasterLayout = () => {
    return (
        <div className='fixed'>
            <Header />
            <div className="main-body">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default MasterLayout