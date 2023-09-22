import { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiPhoneCall } from "react-icons/bi"
import Brandlogo from "./images/5.jpg"

const NavbarHeader = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
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
            <img style={{ height: "30px", width: "30px", borderRadius: "259px", marginRight: "5px" }} src={Brandlogo} alt='logo' />
            <Link to="/" style={{textDecoration:"none"}}><h4>NG TECH</h4></Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <button className='btn btn-danger'>Back</button> */}
            <span> </span>
            <span id="spanleft"></span>
            <span> </span>
          </div>
          <div className={`mt-2 nav-elements  ${showNavbar && 'active'}`}>
            <div className='menu-closed' onClick={handleShowNavbar}>
              <span>Close</span>
            </div>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/post">Blogs</NavLink>
              </li>
              <div className='tonone'>
              <li className='phonediv'>
                    <i className='socialnetwork'><BiPhoneCall /></i>
                    <NavLink to="/" id='phonelink'>+243 999 888 777</NavLink>
                  </li>
                <li id='socialnet'>
                  <i className='socialnetwork' style={{ marginLeft: "5px" }}><BiLogoInstagram /></i>
                  <i className='socialnetwork'><BiLogoFacebook /></i>
                  <i className='socialnetwork'><BiLogoTwitter /></i>
                </li>
              </div>
            </ul>

          </div>

          <div className='d-flex socialbukavu flexnone'>
            <div className='d-flex socialbkv'>
              <div className='phonediv'>
                <i className='socialnetwork'><BiPhoneCall /></i>
                <NavLink to="/" id='phonelink'>+243 999 888 777</NavLink>
              </div>
            </div>
            <div>
              <i className='socialnetwork' style={{ marginLeft: "5px" }}><BiLogoInstagram /></i>
              <i className='socialnetwork'><BiLogoFacebook /></i>
              <i className='socialnetwork'><BiLogoTwitter /></i>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavbarHeader