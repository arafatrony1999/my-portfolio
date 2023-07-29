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

import Skills from '../pages/admin/Skills/Skills';
import AddSkills from '../pages/admin/Skills/AddSkills';
import EditSkills from '../pages/admin/Skills/EditSkills';

import Blogs from '../pages/admin/Blogs/Blogs';
import AddBlogs from '../pages/admin/Blogs/AddBlogs';
import EditBlogs from '../pages/admin/Blogs/EditBlogs';

import Testimonials from '../pages/admin/Testimonials/Testimonials';
import AddTestimonials from '../pages/admin/Testimonials/AddTestimonial';
import EditTestimonials from '../pages/admin/Testimonials/EditTestimonial';
import BlogPage from '../pages/frontend/BlogPage';
import Contacts from '../pages/admin/Contacts/Contacts';
import BlogsPage from '../pages/frontend/BlogsPage';
import ProjectsPage from '../pages/frontend/ProjectsPage';
import Pricing from '../pages/admin/Pricing/Pricing';
import AddPricing from '../pages/admin/Pricing/AddPricing';
import EditPricing from '../pages/admin/Pricing/EditPricing';

const Index = () => {
    return (
        <>
            <ToastContainer />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MasterLayoutFrontEnd />} >
                        <Route index element={<HomePageFrontEnd />} />

                        <Route path='/blogs' element={<BlogsPage />} />
                        <Route path='/blog/:slug' element={<BlogPage />} />

                        <Route path='/projects' element={<ProjectsPage />} />
                    </Route>


                    <Route path='/admin' element={<MasterLayoutAdmin />} >
                        <Route index element={<DashBoard />} />
                        
                        <Route path='portfolios' element={<Portfolios />} />
                        <Route path='portfolios/add' element={<AddPortfolios />} />
                        <Route path='portfolios/edit' element={<EditPortfolios />} />
                        
                        <Route path='categories' element={<Categories />} />
                        <Route path='categories/add' element={<AddCategories />} />
                        <Route path='categories/edit' element={<EditCategories />} />
                        
                        <Route path='skills' element={<Skills />} />
                        <Route path='skills/add' element={<AddSkills />} />
                        <Route path='skills/edit' element={<EditSkills />} />

                        <Route path='blogs' element={<Blogs />} />
                        <Route path='blogs/add' element={<AddBlogs />} />
                        <Route path='blogs/edit' element={<EditBlogs />} />
                        
                        <Route path='testimonials' element={<Testimonials />} />
                        <Route path='testimonials/add' element={<AddTestimonials />} />
                        <Route path='testimonials/edit' element={<EditTestimonials />} />
                        
                        <Route path='pricing' element={<Pricing />} />
                        <Route path='pricing/add' element={<AddPricing />} />
                        <Route path='pricing/edit' element={<EditPricing />} />

                        <Route path='contacts' element={<Contacts />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index