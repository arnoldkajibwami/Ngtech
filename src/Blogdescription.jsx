import React from "react";
import Itemsdesx from "./Itemsdesx";
import { useParams } from "react-router-dom";
import Data from "./Data";
import { BiLogoFacebook, BiLogoGmail, BiLogoGoogle, BiLogoLinkedin, BiLogoTwitter, BiLogoWhatsapp } from 'react-icons/bi'

export default function Blogdescription() {
    const { id } = useParams();
    const selectedData = Data.find(item => item.id === id);

    function sociallink (){
        alert("link copy")
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${selectedData.image})`, height: "40vh" }} className="text-center contactbg blogbg  mb-4">
                <p className="titledesc" style={{
                    position: "relative", top: "45%",
                    fontSize: "xx-large", color: "black", textShadow: "-1px 1px 0px black"
                }}> {selectedData.title}</p>
            </div>

            <div>
                {selectedData && (
                    <div>
                        <div className="blogcard">
                            <div className="textsss">
                                <p className="psss" style={{ fontSize: "17px" }}> {selectedData.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <div className="socialnetsignup" style={{ marginBottom: "100px" }}>
                    <span onClick={sociallink} className="login100-social-item socialicons bg1">
                        <i className="fa fa-facebook"><BiLogoFacebook /></i>
                    </span>
                    <span onClick={sociallink} className="login100-social-item socialicons bg2">
                        <i className="fa fa-twitter"><BiLogoTwitter /></i>
                    </span>

                    <span onClick={sociallink} className="login100-social-item socialicons bg3">
                        <i className="fa fa-google"><BiLogoGoogle /></i>
                    </span>
                    <span onClick={sociallink} className="login100-social-item socialicons bg3" style={{background:"green"}}>
                        <i className="fa fa-google"><BiLogoWhatsapp /></i>
                    </span>
                    <span onClick={sociallink} className="login100-social-item socialicons bg3" style={{background:"skyblue"}}>
                        <i className="fa fa-google"><BiLogoLinkedin /></i>
                    </span>
                </div>
            </div>
        </>
    );
}