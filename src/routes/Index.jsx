import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

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


import Pricing from '../pages/admin/Pricing/Pricing';
import AddPricing from '../pages/admin/Pricing/AddPricing';
import EditPricing from '../pages/admin/Pricing/EditPricing';

import Experience from '../pages/admin/Experience/Experience';
import AddExperience from '../pages/admin/Experience/AddExperience';
import EditExperience from '../pages/admin/Experience/EditExperience';

import About from '../pages/admin/About/About';
import AddAbout from '../pages/admin/About/AddAbout';
import EditAbout from '../pages/admin/About/EditAbout';

import Contacts from '../pages/admin/Contacts/Contacts';
import Services from '../pages/admin/Services/Services';

import BlogPage from '../pages/frontend/BlogPage';
import BlogsPage from '../pages/frontend/BlogsPage';

import GetServicePage from '../pages/frontend/GetServicePage';

import ProjectsPage from '../pages/frontend/ProjectsPage';
import ProjectPage from '../pages/frontend/ProjectPage';

import CategoriesPage from '../pages/frontend/CategoriesPage';
import ServicesPage from '../pages/frontend/ServicesPage';
import ReviewsPage from '../pages/frontend/ReviewsPage';
import PricingPage from '../pages/frontend/PricingPage';
import ContactPage from '../pages/frontend/ContactPage';
import Subscribers from '../pages/admin/Subscribers/Subscribers';
import NoPage from '../pages/NoPage';
import ScrollToTop from '../components/frontend/ScrollToTop';

const Index = () => {
    return (
        <>
            <HashRouter>
                <ToastContainer />
                <ScrollToTop />

                <Routes>
                    <Route path='/' element={<MasterLayoutFrontEnd />} >
                        <Route index element={<HomePageFrontEnd />} />

                        <Route path='/blogs' element={<BlogsPage />} />
                        <Route path='/blog/:slug' element={<BlogPage />} />

                        <Route path='/get_service' element={<GetServicePage />} />

                        <Route path='/project' element={<ProjectPage />} />
                        <Route path='/projects' element={<ProjectsPage />} />

                        <Route path='/categories' element={<CategoriesPage />} />

                        <Route path='/services' element={<ServicesPage />} />
                        <Route path='/reviews' element={<ReviewsPage />} />
                        <Route path='/pricing' element={<PricingPage />} />
                        <Route path='/contacts' element={<ContactPage />} />
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

                        <Route path='experience' element={<Experience />} />
                        <Route path='experience/add' element={<AddExperience />} />
                        <Route path='experience/edit' element={<EditExperience />} />
                        
                        <Route path='about' element={<About />} />
                        <Route path='about/add' element={<AddAbout />} />
                        <Route path='about/edit' element={<EditAbout />} />

                        <Route path='contacts' element={<Contacts />} />
                        <Route path='service_requests' element={<Services />} />
                        <Route path='subscribers' element={<Subscribers />} />
                    </Route>

                    <Route path='*' element={<NoPage />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default Index