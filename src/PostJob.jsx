import React from "react";
import './postjob.css'

export default function PostJob() {
    return (
        <>
            <div style={{ height: "80px" }}></div>

            <div className="text-center">
                World Future is Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-danger">Post Jobs for $10</button>
            </div>

            <section className="container">
                <h3 className="text-center mt-5">Here's how it Work</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
        </>
    );
}