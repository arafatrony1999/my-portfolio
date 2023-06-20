import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayoutFrontEnd from '../layouts/frontend/MasterLayout'
import HomePageFrontEnd from '../pages/frontend/HomePage';
import DashBoard from '../pages/admin/DashBoard';


import MasterLayoutAdmin from '../layouts/admin/MasterLayout'

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MasterLayoutFrontEnd />} >
                        <Route index element={<HomePageFrontEnd />} />
                    </Route>


                    <Route path='/admin' element={<MasterLayoutAdmin />} >
                        <Route index element={<DashBoard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index