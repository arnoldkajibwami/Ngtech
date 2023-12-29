import React from "react";

export default function Items(props) {

    return (
        <>
            <div className="cardsss blogcard bogitems1">
                <div className="imgsss imagesss2" style={{ backgroundImage: `url(${props.image})` }}>
                    <div className="savesss"></div>
                </div>
                <div className="textsss">
                    <p className="h3sss"> {props.title}</p>
                    <p className="psss"> {props.descriptions}</p>
                </div>
            </div>
        </>
    )
}


