import React from "react";
import "./about.css"
import AboutDetails from "./AboutDetails";

export default function About() {
    return (
        <>
             <div style={{ height: "40vh"}} className="text-center contactbg aboutbg bg-light mb-4">
                    <h1 id="blogcontact">About us</h1>
            </div>
            <AboutDetails />
        </>
    );
}