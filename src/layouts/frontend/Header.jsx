import { BsSearch, BsXLg } from "react-icons/bs";
import logo from '../../assets/images/logo.png'
import formal from '../../assets/images/formal.jpg'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <>
            <div className='front-header'>
                <img className="img-fluid py-3 rounded-circle responsive-logo" src={formal} alt="" />
                <img className='img-fluid main-logo' src={logo} alt="" />

                <div className="menu-bar-icon" onClick={handleClick}>
                    <FaBars />
                </div>

                <div className="header-links">
                    <ul className={active ? 'active' : undefined}>
                        <div className="cross-btn-container">
                            <div className="menu-bar-icon menu-bar-ul" onClick={handleClick}>
                                <BsXLg />
                            </div>
                        </div>

                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Services</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Reviews</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Pricing</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Blogs</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Contacts</Link>
                        </li>
                    </ul>
                </div>

                <div className="header-search">
                    <input type="text" placeholder='Search...' />
                    <button>
                        <BsSearch />
                    </button>
                </div>
            </div>

            <div className="header-hide"></div>
        </>
    )
}

export default Header