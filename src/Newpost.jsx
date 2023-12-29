import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "./Data";
import { Link } from "react-router-dom";
import Itemsblogcarousel from "./Itemsblogcarousel";


const Newpost = () => {
    const filtered = Data.filter(item => {
        return item.new === "post";
    });
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            duration: 1000
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 770 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 770, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Carousel responsive={responsive} className="container">
                {filtered.map((item, index) => {
                    return (
                        <>
                            <div className="mb-1 ">
                                <Link to={`/item/${item.id}`}>
                                    <Itemsblogcarousel
                                        image={item.image}
                                        descriptions={item.descriptions}
                                        // description={item.description}
                                        title={item.title}
                                        item={item}
                                        key={index}
                                    />
                                </Link>
                            </div>
                        </>
                    )
                })}
            </Carousel>
        </>
    )
}

export default Newpost;