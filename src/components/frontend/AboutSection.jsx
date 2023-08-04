import React from 'react'
import { useAboutContext } from '../../context/AboutContext'

const AboutSection = () => {
    const { about } = useAboutContext()
    
    return (
        <div className='about-section container'>
            {
                about.map((about, index) => {
                    return(
                        <div key={index} className="about-card my-2">
                            <span>{about.number}+</span>
                            <span>{about.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AboutSection