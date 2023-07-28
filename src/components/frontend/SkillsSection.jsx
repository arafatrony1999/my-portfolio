import React from 'react'
import { useSkillContext } from '../../context/SkillContext'

const SkillsSection = () => {
    const { skills } = useSkillContext()
    return (
        <div className='container skills-section py-5'>
            {
                skills.map((skill, index) => {
                    return(
                        <div className="skill" key={index}>
                            <div className="skill-title w-100 d-flex justify-content-between">
                                <span>{skill.name}</span>
                                <span>{skill.percent}%</span>
                            </div>
                            <div className="progress-bar w-100">
                                <div style={{width: `${skill.percent}%`}} className="progress-bar-inner"></div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
        </div>
    )
}

export default SkillsSection