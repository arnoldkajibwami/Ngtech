import React from "react";
import "./contact.css"
import Contactdettails from "./Contactdetails";

export default function Contact() {
    return (
        <>
            <div style={{ height: "40vh"}} className="text-center contactbg contactusbg bg-light mb-4">
                    <h1 id="blogcontact">contact us</h1>
            </div>

            <section>
                <Contactdettails/>
            </section>
        </>
    )
}