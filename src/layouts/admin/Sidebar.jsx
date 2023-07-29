import { NavLink } from 'react-router-dom'
import { FaAssistiveListeningSystems, FaCode, FaDesktop, FaPencilAlt, FaThList, FaUser } from "react-icons/fa";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { useContactContext } from '../../context/ContactContext';

const SIDEBAR = () => {
    const { unseen } = useContactContext()

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
                                    <FaDesktop />
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
                                    <FaThList />
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
                                    <FaCode />
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

                        <MDBAccordionItem collapseId={4} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaPencilAlt />
                                </div>
                                <div className='sidebar-name'>Blogs</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink to='blogs'>
                                        <div className='sidebar-name'>All Blogs</div>
                                    </NavLink>
                                    <NavLink to='blogs/add'>
                                        <div className='sidebar-name'>Add Blogs</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={5} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAssistiveListeningSystems />
                                </div>
                                <div className='sidebar-name'>Testimonials</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink to='testimonials'>
                                        <div className='sidebar-name'>All Testimonials</div>
                                    </NavLink>
                                    <NavLink to='testimonials/add'>
                                        <div className='sidebar-name'>Add Testimonials</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={6} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAssistiveListeningSystems />
                                </div>
                                <div className='sidebar-name'>Pricing</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink to='pricing'>
                                        <div className='sidebar-name'>All Pricing list</div>
                                    </NavLink>
                                    <NavLink to='pricing/add'>
                                        <div className='sidebar-name'>Add Pricing</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={7} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAssistiveListeningSystems />
                                </div>
                                <div className='sidebar-name'>Experience</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink to='experience'>
                                        <div className='sidebar-name'>All Experience list</div>
                                    </NavLink>
                                    <NavLink to='experience/add'>
                                        <div className='sidebar-name'>Add New Experience</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </li>
            </ul>
            
            <div className="side-menu-title">Notifications</div>
            <ul>
                <li>
                    <NavLink to='contacts'>
                        <div className='sidebar-icon'>
                            <FaAssistiveListeningSystems />
                        </div>
                        <div className='sidebar-name'>Contacts</div>
                        {
                            unseen !== 0 &&
                            <div className="contact-badge" style={{marginLeft: 'auto', marginRight: '10px', background: 'red'}}>
                                {unseen}
                            </div>
                        }
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SIDEBAR