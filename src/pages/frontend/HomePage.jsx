import React from 'react'
import pdf from '../../assets/pdf/arafat.pdf'
import PageTitle from '../../components/frontend/PageTitle'
import HomepageIntro from '../../components/frontend/HomepageIntro'
import IntroCarousel from '../../components/frontend/IntroCarousel'
import IntroBtns from '../../components/frontend/IntroBtns'
import AboutCarousel from '../../components/frontend/AboutCarousel'
import BigText from '../../components/frontend/BigText'
import AboutSection from '../../components/frontend/AboutSection'
import Hr from '../../components/frontend/Hr'
import SmallTitle from '../../components/frontend/SmallTitle'
import SkillsSection from '../../components/frontend/SkillsSection'
import Experience from '../../components/frontend/Experience'
import ServicesSection from '../../components/frontend/ServicesSection'
import PortfolioSection from '../../components/frontend/PortfolioSection'
import PricingSection from '../../components/frontend/PricingSection'
import TestimonialSection from '../../components/frontend/TestimonialSection'
import BlogsSection from '../../components/frontend/BlogsSection'
import SubscriberSection from '../../components/frontend/SubscriberSection'
import ContactSection from '../../components/frontend/ContactSection'

const HomePage = () => {
    return (
        <div className='homepage'>
            <PageTitle />
            <HomepageIntro />
            <IntroCarousel />
            <IntroBtns />
            <AboutCarousel />
            <BigText big='ABOUT' normal='ABOUT' colored='ME' />
            <AboutSection />
            <Hr />
            <div className="w-100 d-flex justify-content-center px-2">
                <a target='_blank' rel='noreferrer' href={pdf} className="d-inline-block my-btn colored-btn my-5 mx-auto text-center">download resume</a>
            </div>
            <Hr />
            <SmallTitle normal='MY' colored='SKILLS' />
            <SkillsSection />
            <Hr />
            <SmallTitle normal='Experience &' colored='Education' />
            <Experience />
            <ServicesSection />
            <PortfolioSection />
            <PricingSection />
            <TestimonialSection />
            <BlogsSection />
            <SubscriberSection />
            <ContactSection />
        </div>
    )
}

export default HomePage