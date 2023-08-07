import { NavLink } from 'react-router-dom'
import { FaAssistiveListeningSystems, FaBell, FaCode, FaDesktop, FaEnvelope, FaMoneyBillAlt, FaPencilAlt, FaStar, FaThList, FaUser, FaAdn, FaGlobe, FaRegIdCard } from "react-icons/fa";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { useContactContext } from '../../context/ContactContext';
import { useServiceContext } from '../../context/ServiceContext';
import { useSubscriberContext } from '../../context/SubscriberContext';
import { BsBoxArrowRight } from 'react-icons/bs';
import { useAdminContext } from '../../context/AdminContext';

const SIDEBAR = () => {
    const { unseen } = useContactContext()
    const { unseenService } = useServiceContext()
    const { unseenSubscriber } = useSubscriberContext()
    const { logout, menuOpen, removeSidebar } = useAdminContext()

    return (
        <div className={ menuOpen ? 'side-bar active' : 'side-bar'}>
            <div className="side-menu-title">Menu</div>
            <ul>
                <li>
                    <NavLink onClick={removeSidebar} to=''>
                        <div className='sidebar-icon'>
                            <FaUser />
                        </div>
                        <div className='sidebar-name'>Dashboard</div>
                    </NavLink>
                    
                    <NavLink onClick={removeSidebar} to='/'>
                        <div className='sidebar-icon'>
                            <FaGlobe />
                        </div>
                        <div className='sidebar-name'>Main Website</div>
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
                                    <NavLink onClick={removeSidebar} to='portfolios'>
                                        <div className='sidebar-name'>All Portfolios</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='portfolios/add'>
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
                                    <NavLink onClick={removeSidebar} to='categories'>
                                        <div className='sidebar-name'>All Categories</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='categories/add'>
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
                                    <NavLink onClick={removeSidebar} to='skills'>
                                        <div className='sidebar-name'>All Skills</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='skills/add'>
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
                                    <NavLink onClick={removeSidebar} to='blogs'>
                                        <div className='sidebar-name'>All Blogs</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='blogs/add'>
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
                                    <NavLink onClick={removeSidebar} to='testimonials'>
                                        <div className='sidebar-name'>All Testimonials</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='testimonials/add'>
                                        <div className='sidebar-name'>Add Testimonials</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={6} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaMoneyBillAlt />
                                </div>
                                <div className='sidebar-name'>Pricing</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink onClick={removeSidebar} to='pricing'>
                                        <div className='sidebar-name'>All Pricing list</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='pricing/add'>
                                        <div className='sidebar-name'>Add Pricing</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={7} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaStar />
                                </div>
                                <div className='sidebar-name'>Experience</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink onClick={removeSidebar} to='experience'>
                                        <div className='sidebar-name'>All Experience list</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='experience/add'>
                                        <div className='sidebar-name'>Add New Experience</div>
                                    </NavLink>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={8} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAdn />
                                </div>
                                <div className='sidebar-name'>About</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <NavLink onClick={removeSidebar} to='about'>
                                        <div className='sidebar-name'>All About list</div>
                                    </NavLink>
                                    <NavLink onClick={removeSidebar} to='about/add'>
                                        <div className='sidebar-name'>Add New About</div>
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
                    <NavLink onClick={removeSidebar} to='contacts'>
                        <div className='sidebar-icon'>
                            <FaBell />
                        </div>
                        <div className='sidebar-name'>Contacts</div>
                        {
                            unseen !== 0 &&
                            <div className="contact-badge" style={{marginLeft: 'auto', marginRight: '10px', background: 'red'}}>
                                {unseen}
                            </div>
                        }
                    </NavLink>

                    <NavLink onClick={removeSidebar} to='service_requests'>
                        <div className='sidebar-icon'>
                            <FaEnvelope />
                        </div>
                        <div className='sidebar-name'>Service Requests</div>
                        {
                            unseenService !== 0 &&
                            <div className="contact-badge" style={{marginLeft: 'auto', marginRight: '10px', background: 'red'}}>
                                { unseenService }
                            </div>
                        }
                    </NavLink>
                    
                    <NavLink onClick={removeSidebar} to='subscribers'>
                        <div className='sidebar-icon'>
                            <FaRegIdCard />
                        </div>
                        <div className='sidebar-name'>Subscribers</div>
                        {
                            unseenSubscriber !== 0 &&
                            <div className="contact-badge" style={{marginLeft: 'auto', marginRight: '10px', background: 'red'}}>
                                { unseenSubscriber }
                            </div>
                        }
                    </NavLink>
                </li>
            </ul>

            <div className="side-menu-title">Account</div>
            <ul>
                <li>
                    <NavLink onClick={logout}>
                        <div className='sidebar-icon'>
                            <BsBoxArrowRight />
                        </div>
                        <div className='sidebar-name'>Logout</div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SIDEBAR