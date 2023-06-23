import React from 'react'
import BigText from './BigText'
import portfolio1 from '../../assets/images/portfolio1.webp'
import portfolio2 from '../../assets/images/portfolio2.webp'
import portfolio3 from '../../assets/images/portfolio3.webp'
import portfolio4 from '../../assets/images/portfolio4.webp'
import portfolio5 from '../../assets/images/portfolio5.webp'
import portfolio6 from '../../assets/images/portfolio6.webp'
import ColoredBtn from './ColoredBtn'

const PortfolioSection = () => {
    return (
        <div className='container skills-section my-5'>
            <BigText big='PORTFOLIO' normal='RESENT' colored='WORK' />

            <div className="portfolio-links d-flex mx-auto my-3 flex-wrap">
                <button>All</button>
                <button>Frontend</button>
                <button>Backend</button>
                <button>PHP</button>
                <button>Laravel</button>
                <button>ReactJS</button>
                <button>Web Design</button>
                <button>Wordpress</button>
            </div>

            
            <div className="services-cards w-100 d-flex justify-content-between flex-wrap">
                <div className="service-card">
                    <img className='img-fluid' src={portfolio1} alt="" />
                    <a href='/' className="service-details portfolio-details">
                        TelkMaze
                    </a>
                </div>
                <div className="service-card">
                    <img className='img-fluid' src={portfolio2} alt="" />
                    <div className="service-details portfolio-details">
                        Timepice Haus
                    </div>
                </div>
                <div className="service-card">
                    <img className='img-fluid' src={portfolio3} alt="" />
                    <div className="service-details portfolio-details">
                        Riskless
                    </div>
                </div>
                <div className="service-card">
                    <img className='img-fluid' src={portfolio4} alt="" />
                    <div className="service-details portfolio-details">
                        TelkMaze
                    </div>
                </div>
                <div className="service-card">
                    <img className='img-fluid' src={portfolio5} alt="" />
                    <div className="service-details portfolio-details">
                        Timepice Haus
                    </div>
                </div>
                <div className="service-card">
                    <img className='img-fluid' src={portfolio6} alt="" />
                    <div className="service-details portfolio-details">
                        Riskless
                    </div>
                </div>
            </div>
            <div className="text-center my-5 w-100">
                <ColoredBtn btnLink='/pricing' btnText='GO TO ALL'  />
            </div>
        </div>
    )
}

export default PortfolioSection