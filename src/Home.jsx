import React from "react";
import "./search.css"
import { BiLogoJoomla, BiSearch, BiSolidHand, BiSolidOffer, BiSolidUserAccount, BiWorld } from "react-icons/bi"
import Blogcarousel from "./Blogcarousel";
import About from "./About";
import { BiSolidHandUp } from "react-icons/bi"
import Testimony from "./testimony";
import Serachbardetails from "./Searchbardetails";
import Contactdettails from "./Contactdetails";

export default function Home() {

    return (
        <>
            <div style={{ height: "75px" }}></div>
            <section>
                <Serachbardetails />
            </section>

            <section className="mt-4">
                <div className="container mb-4">
                    <h3>Recent Post</h3>
                </div>
                <Blogcarousel />
            </section>

            <div className="actboxs">
                <div className="container">
                    <div className="row">
                        <div className="hc_column_cnt col-md-12   " >
                            <div className="row">
                                <div id="actbox" className="hc_column_cnt col-md-3  col-sm-6  " >
                                    <div className="row">
                                        <div className="col-md-12 hc_counter_cnt">
                                            <div className="counter-box-icon icon-box ">
                                                <div className="icon-box-cell">
                                                    <i><BiSolidOffer /></i>
                                                </div>
                                                <div id="hrline"></div>
                                                <div className="icon-box-cell"> <b>
                                                    <label className="counter text-xl" data-to="80" >450</label>
                                                </b><p className="text-m"> Offers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 hc_counter_cnt">
                                            <div className="counter-box-icon icon-box ">
                                                <div className="icon-box-cell">
                                                    <i><BiSolidUserAccount /></i>
                                                </div>
                                                <div id="hrline"></div>
                                                <div className="icon-box-cell"> <b>
                                                    <label className="counter text-xl" data-to="80" >20</label>
                                                </b><p className="text-m"> Partners</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 hc_counter_cnt">
                                            <div className="counter-box-icon icon-box ">
                                                <div className="icon-box-cell">
                                                    <i><BiLogoJoomla /></i>
                                                </div>
                                                <div id="hrline"></div>
                                                <div className="icon-box-cell">
                                                    <b>
                                                        <label className="counter text-xl" data-to="80" >110+</label>
                                                    </b><p className="text-m"> Get Jobs</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 hc_counter_cnt">
                                            <div className="counter-box-icon icon-box ">
                                                <div className="icon-box-cell">
                                                    <i><BiWorld /></i>
                                                </div>
                                                <div id="hrline"></div>
                                                <div className="icon-box-cell"> <b>
                                                    <label className="counter text-xl" data-to="80" >13+</label>
                                                </b><p className="text-m"> Countries</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="testimony containe">
                <Testimony />
            </section>
            <section style={{marginTop:"100px"}}>
                <Contactdettails />
            </section>
        </>
    )
}