import React from 'react'
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
            <SmallTitle normal='MY' colored='SKILLS' />
            <SkillsSection />
            <Hr />
            <SmallTitle normal='Experience &' colored='Education' />
            <Experience />
            <ServicesSection />
            <PortfolioSection />
            <PricingSection />
        </div>
    )
}

export default HomePage