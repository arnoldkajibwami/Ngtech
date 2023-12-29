import React from "react";

export default function Contactdettails() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mr-auto">
                        {/* <h2>World Future</h2> */}
                        <h3>Contact us</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga!</p>

                        <ul className="list-unstyled pl-md-5 mb-5">
                            {/* <li className="d-flex text-black mb-2">
                                <span className="mr-3"><span className="icon-map"></span></span> 34 Street Name, City Name Here, <br /> United States
                            </li> */}
                            <li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-phone"></span></span> <p>+ (243) 999 888 777</p></li>
                            <li className="d-flex text-black"><span className="mr-3"><span className="icon-envelope-o"></span></span> <p>worldfuture@mywebsite.com </p></li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <form className="mb-5" method="post" id="contactForm" name="contactForm">
                            <div className="row">

                                <div className="col-md-12 form-group">
                                    {/* <label for="name" className="col-form-label">Name</label> */}
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    {/* <label for="email" className="col-form-label">Email</label> */}
                                    <input type="text" className="form-control mt-5" name="email" id="email" placeholder="Mail" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 form-group">
                                    {/* <label for="message" className="col-form-label">Message</label> */}
                                    <textarea className="form-control mt-5" name="message" id="message" cols="30" placeholder="Message" rows="7"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mt-5 ">
                                    <input type="submit" value="Send Message" className="btn btn-color w-100" />
                                    <span className="submitting"></span>
                                </div>
                            </div>
                        </form>

                        <div id="form-message-warning mt-4"></div>
                        <div id="form-message-success">
                            Your message was sent, thank you!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}