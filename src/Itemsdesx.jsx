import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";

export default function Itemsdesx() {

    const { id } = useParams();
    const selectedData = Data.find(item => item.id === id);

    return (
        <>
            <div>
                {selectedData && (
                    <div>
                        <div className="cardsss blogcard">
                            <div className="imgsss imagesss2" style={{ backgroundImage: `url(${selectedData.image})` }}>
                                <div className="savesss"></div>
                            </div>
                            <div className="textsss">
                                <p className="h3sss"> {selectedData.title}</p>
                                <p className="psss"> {selectedData.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}


