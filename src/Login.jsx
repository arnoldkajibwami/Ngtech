import React from "react";
import "./login.css"
import { BiLogoGmail, BiLogoGoogle, BiLogoTwitter } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLock } from "react-icons/bi"
import { BiSolidUserAccount, BiUser } from "react-icons/bi"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="limiter" style={{ paddingTop: "75px" }}>
                <div className="container-login100 ">
                    <div className="wrap-login100 p-5 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-49">
                                Login
                            </span>

                            <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                <span className="label-input100">Username</span>
                                <input className="input100" type="text" name="username" placeholder="Type your username" />
                                {/* <span className="focus-input100" data-symbol="&#xf206;"></span> */}
                                <span className="focus-input100" style={{ marginTop: "36px", marginLeft: "15px" }} ><i style={{ fontSize: "20px" }}><BiUser /></i></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" name="pass" placeholder="Type your password" />
                                {/* <span className="focus-input100" ></span> */}
                                <span className="focus-input100" style={{ marginTop: "36px", marginLeft: "15px" }} ><i style={{ fontSize: "20px" }}><BiLock /></i></span>
                            </div>

                            <div>
                                <a href="#">
                                    Forgot password?
                                </a>
                            </div>

                            <div className="container-login100-form-btn mt-3">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <Link to="/home">
                                        <button className="login100-form-btn">
                                            Login
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="spantext mt-5">
                                <span>
                                    Or Sign Up Using
                                </span>
                            </div>

                            <div className="socialnetsignup" style={{ marginBottom: "100px" }}>
                                <a href="#" className="login100-social-item bg1">
                                    <i className="fa fa-facebook"><BiLogoFacebook /></i>
                                </a>
                                <a href="#" className="login100-social-item bg2">
                                    <i className="fa fa-twitter"><BiLogoTwitter /></i>
                                </a>

                                <a href="#" className="login100-social-item bg3">
                                    <i className="fa fa-google"><BiLogoGoogle /></i>
                                </a>
                            </div>
                            <div className="spantext mb-5">
                                <span >
                                    Or Sign Up Using
                                </span>
                                <br />
                                <a href="/signup" className="txt2">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div id="dropDownSelect1"></div>
        </>
    );
}