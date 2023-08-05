import React from 'react'
import { useAboutContext } from '../../context/AboutContext'
import CountUp from 'react-countup';

const AboutSection = () => {
    const { about } = useAboutContext()
    
    return (
        <div className='about-section container'>
            {
                about.map((about, index) => {
                    return(
                        <div key={index} className="about-card my-2">
                            <span><CountUp end={about.number} delay={5} />+</span>
                            <span>{about.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AboutSection