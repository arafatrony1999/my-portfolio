import React from 'react'

const SkillsSection = () => {
    const skills = [
        {
            name: 'HTML',
            percent: 95,
        },
        {
            name: 'CSS',
            percent: 90,
        },
        {
            name: 'Javascript',
            percent: 75,
        },
        {
            name: 'jQuery',
            percent: 70,
        },
        {
            name: 'Bootstrap',
            percent: 90,
        },
        {
            name: 'ReactJS',
            percent: 75,
        },
        {
            name: 'PHP',
            percent: 90,
        },
        {
            name: 'Laravel',
            percent: 75,
        }
    ]
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
        </div>
    )
}

export default SkillsSection