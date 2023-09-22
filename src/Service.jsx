import React from "react";
import { BiServer } from "react-icons/bi"
import ServicesAll from "./ServiceElement";

export default function Service() {
    return (
        <>
            <div style={{ height: "50px" }}></div>
            <h1 className="container text-center mt-5">Our Services</h1>

            <section className="container servicesAll">
                <div style={{ margin: "30px" }} className="cardservice">
                    <i style={{ fontSize: "60px" }}><BiServer /></i>
                    <h1 className="ServiceHeading">Service 1</h1>
                    <p className="ServiceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam quo dolorem eveniet tempore molestiae.</p>
                    <div className="buttonContainer">
                        <button className="moreButton">More</button>
                        <button className="hireButton">Hire us</button>
                    </div>
                </div>
                <div style={{ margin: "30px" }} className="cardservice">
                    <i style={{ fontSize: "60px" }}><BiServer /></i>
                    <h1 className="ServiceHeading">Service 2</h1>
                    <p className="ServiceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam quo dolorem eveniet tempore molestiae.</p>
                    <div className="buttonContainer">
                        <button className="moreButton">More</button>
                        <button className="hireButton">Hire us</button>
                    </div>
                </div>
                <div style={{ margin: "30px" }} className="cardservice">
                    <i style={{ fontSize: "60px" }}><BiServer /></i>
                    <h1 className="ServiceHeading">Service 3</h1>
                    <p className="ServiceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam quo dolorem eveniet tempore molestiae.</p>
                    <div className="buttonContainer">
                        <button className="moreButton">More</button>
                        <button className="hireButton">Hire us</button>
                    </div>
                </div>
                <div style={{ margin: "30px" }} className="cardservice">
                    <i style={{ fontSize: "60px" }}><BiServer /></i>
                    <h1 className="ServiceHeading">Service 4</h1>
                    <p className="ServiceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam quo dolorem eveniet tempore molestiae.</p>
                    <div className="buttonContainer">
                        <button className="moreButton">More</button>
                        <button className="hireButton">Hire us</button>
                    </div>
                </div>
                <div style={{ margin: "30px" }} className="cardservice">
                    <i style={{ fontSize: "60px" }}><BiServer /></i>
                    <h1 className="ServiceHeading">Service 5</h1>
                    <p className="ServiceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam quo dolorem eveniet tempore molestiae.</p>
                    <div className="buttonContainer">
                        <button className="moreButton">More</button>
                        <button className="hireButton">Hire us</button>
                    </div>
                </div>
            </section>
        </>
    )
}