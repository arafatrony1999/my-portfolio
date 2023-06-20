import React from 'react';
import logo from '../../assets/images/formal.jpg'

const HomepageIntro = () => {
    return (
        <div className='homepage-intro-container'>
            <div className="homepage-intro">
                <div className="intro-image">
                    <img src={logo} alt="" />
                </div>
                <p>
                    I'm Arafat Rony, a tech enthusiast with expertise in a range of front-end and back-end technologies. I have experience designing, developing, and maintaining small and enterprise-level applications using various development tools and languages to meet the unique project requirements. I have worked on a variety of projects, including web banking, social projects, multivendor e-commerce, LMS, affiliate blogs, startups, SAAS solutions, and web apps. I'm here to empower each other to create a better future whether you're searching for long-term sustainability, performance, security, or influence.
                </p>
            </div>
        </div>
    );
}

export default HomepageIntro;