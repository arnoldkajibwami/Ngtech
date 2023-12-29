import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"

import "./footer.css"

export default function Footer() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <section id="footer" className="mt-5 footer">

                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <div className="footer-links">
                                        <ul>
                                            <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink ">About World Future</span></li>
                                        </ul>
                                    </div>
                                    <p>

                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoFacebook /></i></Link>
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoInstagram /></i></Link>
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoTwitter /></i></Link>
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoLinkedin /></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links footerdblock">
                                <ul>
                                    <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink ">Who we are</span></li>
                                </ul>
                                <ul>
                                    <li><Link to="/home" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Home </Link></li>
                                    <li><Link to="/culture" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Contact Us </Link></li>                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links footerdblock">
                                <ul>
                                    <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink ">What we do</span></li>
                                </ul>
                                <ul>
                                    <li><Link to="/about" onClick={BackToTOP} className="nav-links footernavlink footernavlinks "> About Us </Link></li>
                                    <li><Link to="/destination" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Blog </Link></li>
                                    <li><Link to="/culture" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Contact Us </Link></li>
                                    <li><Link to="/contact" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Post a Job </Link></li>
                                </ul>
                            </div>
                        <div className="tononefooter d-flex justify-content-around">
                            <div className="col-lg-2 col-md-3 footer-links">
                                <ul>
                                    <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink ">Who we are</span></li>
                                </ul>
                                <ul>
                                    <li><Link to="/home" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Home </Link></li>
                                    <li><Link to="/culture" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Contact Us </Link></li>                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links">
                                <ul>
                                    <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink ">What we do</span></li>
                                </ul>
                                <ul>
                                    <li><Link to="/about" onClick={BackToTOP} className="nav-links footernavlink footernavlinks "> About Us </Link></li>
                                    <li><Link to="/destination" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Blog </Link></li>
                                    <li><Link to="/culture" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Contact Us </Link></li>
                                    <li><Link to="/contact" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Post a Job </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-legal text-center position-relative">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright 2023. All Rights Reserved
                    </div>
                </div>
            </div>
        </section >
        </>
    );
}



