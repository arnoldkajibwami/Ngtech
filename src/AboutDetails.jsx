import React from "react";
import aboutImg from './images/home.jpg'

export default function AboutDetails() {
    return (
        <>
            <div className="about_section layout_padding">
                <div className="container">
                    <h1 className="about_taital wow fadeInLeft">WORLD FUTURE</h1>
                    <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_image">
                                    <img src={aboutImg} alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about_taital_main">
                                    <p className="lorem_text">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}