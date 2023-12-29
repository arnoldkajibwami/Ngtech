import React from 'react';
import './blogcarousel.css'
import { Link } from "react-router-dom";
import Newpost from "./Newpost";

export default function Blogcarousel() {

    return (
        <div>
            <Newpost />
            <div className="text-center mb-5 mt-5">
                <div className="wrap-login100-form-btn seeallpost">
                    <div className="login100-form-bgbtn"></div>
                    <Link to="/blog">
                        <button className="login100-form-btn">
                            See all posts
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}