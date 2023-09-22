import React from "react";
import image1 from "./images/4.jpg"
import image2 from "./images/3.jpg"
import image3 from "./images/2.jpg"
// import image4 from "./images/4.jpg"
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "react-bootstrap";
import Service from "./Service"
import ServicesAll from "./ServiceElement";

const Home = () => {

    return (
        <>
            <Carousel data-bs-theme="light" >
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageslider"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="tocenter container">
                            <h5 className="texts">Networking</h5>
                            <p className="texts">Nulla vitae elit libero, a pharetra augue mollis interdum.<br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Eveniet, consectetur.
                                Illum sunt perspiciatis alias pariatur.<br /> Debitis, porro! Veritatis optio minus est amet,
                                nisi inventore <br />repudiandae debitis nam nostrum mollitia voluptatum.</p>
                            <div className="d-flex" style={{ marginLeft: "20px" }}>
                                <button className="btn morebtn" >Read more</button>
                                <button className="btn contactbtn" style={{ marginLeft: "20px" }}>Contact us</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageslider"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="tocenter container">
                            <h5 className="texts">Consulting</h5>
                            <p className="texts">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Eveniet, consectetur.
                                Illum sunt perspiciatis alias pariatur.<br /> Debitis, porro! Veritatis optio minus est amet,
                                nisi <br />inventore repudiandae debitis nam nostrum mollitia voluptatum.</p>
                            <div className="d-flex" style={{ marginLeft: "20px" }}>
                                <button className="btn morebtn" >Read more</button>
                                <button className="btn contactbtn" style={{ marginLeft: "20px" }}>Contact us</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageslider"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="tocenter container">
                            <h5 className="texts">Maintenance</h5>
                            <p className="texts"> Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Eveniet, consectetur.
                                Illum sunt perspiciatis alias pariatur.<br /> Debitis, porro! Veritatis optio minus est amet,
                                nisi <br />inventore repudiandae debitis nam nostrum mollitia voluptatum.</p>
                            <div className="d-flex" style={{ marginLeft: "20px" }}>
                                <button className="btn morebtn" >Read more</button>
                                <button className="btn contactbtn" style={{ marginLeft: "20px" }}>Contact us</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <ServicesAll/>
        </>
    );
}

export default Home