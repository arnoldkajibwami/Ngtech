import { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 60) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Fragment>

            <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <div className=" Navcontainer">
                    <div className="logo d-flex">
                        <Link to="/" style={{ textDecoration: "none" }}><h4>World Future</h4></Link>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <span> </span>
                        <span id="spanleft"></span>
                        <span> </span>
                    </div>
                    <div className={`mt-2 nav-elements  ${showNavbar && 'active'}`}>
                        <div className='menu-closed' onClick={handleShowNavbar}>
                            <button class="Buttonclose">
                                <span class="X"></span>
                                <span class="Y"></span>
                                <div class="closebutton">close</div>
                            </button>
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/home" onClick={handleShowNavbar}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={handleShowNavbar}>About us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" onClick={handleShowNavbar}>Blog</NavLink>
                            </li>
                            <li>
                                {/* <label label='text'>
                                    <select name="text" id="text" className='tokapale'>
                                        <option className='tokapale'><NavLink to="/category" onClick={handleShowNavbar}>All Category</NavLink></option>
                                        <option className='tokapale'><NavLink to="/networking" onClick={handleShowNavbar}>Networking</NavLink></option>
                                        <option className='tokapale'><NavLink to="/marketing" onClick={handleShowNavbar}>Marketing</NavLink></option>
                                        <option className='tokapale'><NavLink to="/economy" onClick={handleShowNavbar}>Economy</NavLink></option>
                                    </select>
                                </label> */}
                                <NavLink to="/category" onClick={handleShowNavbar}>Find a Job</NavLink>
                            </li>
                            <li>
                                <NavLink to="/postjob" onClick={handleShowNavbar}>Post a Job</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={handleShowNavbar}>Contact</NavLink>
                            </li>

                            <hr />
                            <div className='tonone'>
                                <div className="text-center mb-1">
                                    <div className="wrap-login100-form-btn" style={{ width: "100%" }}>
                                        <div className="login100-form-bgbtn"></div>

                                        <button className="login100-form-btn">
                                            <NavLink to="/login" onClick={handleShowNavbar} style={{ background: "transparent" }}><span style={{ color: "white" }}>Login</span></NavLink>
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </ul>

                    </div>

                    <div className='d-flex socialbukavu flexnone mt-1'>
                        <div className='d-flex socialbkv'>
                            <hr />
                            <div className='nav-elements'>
                                <ul >
                                    <div className="text-center">
                                        <div className="wrap-login100-form-btn" style={{ width: "100%" }}>
                                            <div className="login100-form-bgbtn"></div>
                                            <button className="login100-form-btn">
                                                <NavLink to="/login" onClick={handleShowNavbar} style={{ background: "transparent" }}><span style={{ color: "white" }}>Login</span></NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header