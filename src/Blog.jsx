import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom';
import Dataitems from './Dataitems';

export default function Blog() {
    return (
        <>
            <div style={{ height: "40vh" }} className="text-center contactbg blogbg  mb-4">
                <h1 id='blogcontact'>Blog</h1>
            </div>

            {/* <section className='container d-flex blogcontainer'>
                <div className="cardsss blogcard">
                    <Link to="/bloddescription">
                    <div className="imgsss imagesss2">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Tempor incididunt ut labore</p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>
                    </div>
                    </Link>
                </div>
                <div className="cardsss blogcard">
                    <div className="imgsss imagesss3">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Enim ad minim veniam</p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>

                        <div className="icon-boxsss">
                            <button className='btn btn-color'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cardsss blogcard">
                    <div className="imgsss imagesss1">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Ullamco laboris nisi</p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>

                        <div className="icon-boxsss">
                            <button className='btn btn-color'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cardsss blogcard">
                    <div className="imgsss imagesss1">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Tempor incididunt ut </p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>

                        <div className="icon-boxsss">
                            <button className='btn btn-color'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cardsss blogcard">
                    <div className="imgsss">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Tempor incididunt ut  </p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>

                        <div className="icon-boxsss">
                            <button className='btn btn-color'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cardsss blogcard">
                    <div className="imgsss imagesss2">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Ullamco laboris nisi</p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>

                        <div className="icon-boxsss">
                            <button className='btn btn-color'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cardsss blogcard">
                    <div className="imgsss">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Ullamco laboris nisi</p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>

                        <div className="icon-boxsss">
                            <button className='btn btn-color'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cardsss blogcard">
                    <div className="imgsss">
                        <div className="savesss">
                        </div>
                    </div>
                    <div className="textsss">
                        <p className="h3sss"> Ullamco laboris nisi</p>
                        <p className="psss"> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>

                        <div className="icon-boxsss">
                            <button className='btn btn-color'>Read More</button>
                        </div>
                    </div>
                </div>
            </section> */}
            <Dataitems/>
        </>
    );
}