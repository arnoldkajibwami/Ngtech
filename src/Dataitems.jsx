import React from "react";
import Data from "./Data";
import Items from "./Items";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Dataitems = () => {

    return (
        <>
            <div className="d-flex container blogcontainer">
                {Data.map((item) => {
                    return (
                        <>
                            <div className="mb-1" key={item.id}>
                                <Link to={`/item/${item.id}`}>
                                    <Items
                                        image={item.image}
                                        descriptions={item.descriptions}
                                        description={item.description}
                                        tilte={item.tilte}
                                        item={item}
                                    />
                                </Link>
                            </div>
                        </>
                    )
                })}

            </div>

        </>
    )
}

export default Dataitems;