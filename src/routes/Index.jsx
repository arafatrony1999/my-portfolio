import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import MasterLayoutFrontEnd from '../layouts/frontend/MasterLayout'
import HomePageFrontEnd from '../pages/frontend/HomePage';
import DashBoard from '../pages/admin/DashBoard';


import MasterLayoutAdmin from '../layouts/admin/MasterLayout'
import Portfolios from '../pages/admin/Portfolios/Portfolios';
import AddPortfolios from '../pages/admin/Portfolios/AddPortfolios';
import EditPortfolios from '../pages/admin/Portfolios/EditPortfolios';
import Categories from '../pages/admin/Categories/Categories';
import AddCategories from '../pages/admin/Categories/AddCategories';
import EditCategories from '../pages/admin/Categories/EditCategories';

const Index = () => {
    return (
        <>
            <ToastContainer />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MasterLayoutFrontEnd />} >
                        <Route index element={<HomePageFrontEnd />} />
                    </Route>


                    <Route path='/admin' element={<MasterLayoutAdmin />} >
                        <Route index element={<DashBoard />} />
                        
                        <Route path='portfolios' element={<Portfolios />} />
                        <Route path='portfolios/add' element={<AddPortfolios />} />
                        <Route path='portfolios/edit' element={<EditPortfolios />} />
                        
                        <Route path='categories' element={<Categories />} />
                        <Route path='categories/add' element={<AddCategories />} />
                        <Route path='categories/edit' element={<EditCategories />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index