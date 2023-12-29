import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimony.css"

export default function Testimony() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            duration: 1000
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive} className="container">
                <div class="testimony-wrap d-flex tesmonyitems1">
                    <div class="user-img">
                    </div>
                    <div class="text pl-4">
                        <span class="quote d-flex align-items-center justify-content-center">
                            <i class="ion-ios-quote"></i>
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Racky Henderson</p>
                        <span class="position">Father</span>
                    </div>
                </div>

                <div class="testimony-wrap d-flex tesmonyitems1">
                    <div class="user-img user-img1">
                    </div>
                    <div class="text pl-4">
                        <span class="quote d-flex align-items-center justify-content-center">
                            <i class="ion-ios-quote"></i>
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Racky Henderson</p>
                        <span class="position">Father</span>
                    </div>
                </div>

                <div class="testimony-wrap d-flex tesmonyitems1">
                    <div class="user-img user-img2">
                    </div>
                    <div class="text pl-4">
                        <span class="quote d-flex align-items-center justify-content-center">
                            <i class="ion-ios-quote"></i>
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Racky Henderson</p>
                        <span class="position">Father</span>
                    </div>
                </div>
                <div class="testimony-wrap d-flex tesmonyitems1">
                    <div class="user-img">
                    </div>
                    <div class="text pl-4">
                        <span class="quote d-flex align-items-center justify-content-center">
                            <i class="ion-ios-quote"></i>
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Racky Henderson</p>
                        <span class="position">Father</span>
                    </div>
                </div>
                
            </Carousel>
        </>
    )
}