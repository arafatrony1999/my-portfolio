import { NavLink } from 'react-router-dom'
import { FaAddressCard, FaUser } from "react-icons/fa";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const SIDEBAR = () => {
    return (
        <div className='side-bar'>
            <div className="side-menu-title">Menu</div>
            <ul>
                <li>
                    <NavLink to='/'>
                        <div className='sidebar-icon'>
                            <FaUser />
                        </div>
                        <div className='sidebar-name'>Dashboard</div>
                    </NavLink>
                </li>
            </ul>
            
            <div className="side-menu-title">Manage Data</div>
            <ul>
                <li>
                    <MDBAccordion borderless='true' >
                        <MDBAccordionItem collapseId={1}
                        headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAddressCard />
                                </div>
                                <div className='sidebar-name'>Portfolios</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink to='portfolios'>
                                        <div className='sidebar-name'>All Portfolios</div>
                                    </NavLink>
                                    <NavLink to='portfolios/add'>
                                        <div className='sidebar-name'>Add Portfolio</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAddressCard />
                                </div>
                                <div className='sidebar-name'>Categories</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink to='categories'>
                                        <div className='sidebar-name'>All Categories</div>
                                    </NavLink>
                                    <NavLink to='categories/add'>
                                        <div className='sidebar-name'>Add Categories</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAddressCard />
                                </div>
                                <div className='sidebar-name'>Skills</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink to='skills'>
                                        <div className='sidebar-name'>All Skills</div>
                                    </NavLink>
                                    <NavLink to='skills/add'>
                                        <div className='sidebar-name'>Add Skill</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </li>
            </ul>
        </div>
    )
}

export default SIDEBAR