import React, { useState } from 'react';
import gardenImage from 'images/introductiongallery/garden.jpg';
import ReactCollapseSimple from 'react-collapse-simple';
import 'react-collapse-simple/dist/index.css';
import { FaGreaterThan } from 'react-icons/fa';


export const FaqSection = () => {
    const [trekking, setTrekking] = useState(false);
    const [swimming, setSwimming] = useState(false);
    const [birdWatching, setBirdWatching] = useState(false);
    const [photoshoot, setPhotoshoot] = useState(false);
    const [together, setTogether] = useState(false);
    return (
        <div className="site-section" id="faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <img src={gardenImage} alt="resort home" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 ml-auto pl-lg-5">
                        <span className="sub-title">Ask Us, We Are Happy To Answer</span>
                        <h2 className="font-weight-bold text-black mb-5">Frequently Ask Questions</h2>
                        <div className="accordion" id="accordionExample">

                            <div className="accordion-item">
                                <h2 className="mb-0 rounded mb-2">
                                    <a className="collapsed text-orangered" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => setSwimming(!swimming)}>
                                        <FaGreaterThan></FaGreaterThan>
                                        When we choose swimming, what all other services are included for us?
                            </a>
                                </h2>
                                <ReactCollapseSimple isOpen={swimming}>
                                    <div className="accordion-body">
                                        <p>Heaven Hill resort offers evening snacks to people coming up to enjoying
                                        Swimming in the
                                        pools, also you get sound system to enjoy DJ music at no additional costs
                                        for group visits. For more information,
                                    <a href="swimming">visit swimming page</a>..
                                </p>
                                    </div>
                                </ReactCollapseSimple>

                            </div>
                            <div className="accordion-item">
                                <h2 className="mb-0 rounded mb-2">
                                    <a className="collapsed text-orangered" onClick={() => setBirdWatching(!birdWatching)} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <FaGreaterThan></FaGreaterThan>
                                        Which is the perfect season for bird watching at Heaven Hill Resort?
                            </a>
                                </h2>
                                <ReactCollapseSimple isOpen={birdWatching}>
                                    <div className="accordion-body">
                                        <p>
                                            Heaven Hill Resort, Boisar is the place where migrating birds can be watched
                                            during
                                            migrating season and here you can experience the presence of some of the
                                            rare species
                                    of birds during <b>July to September</b> and <i>end of February to mid of
                                        May</i>.
                                </p>
                                    </div>
                                </ReactCollapseSimple>
                            </div>
                            <div className="accordion-item">
                                <h2 className="mb-0 rounded mb-2">
                                    <a className="collapsed text-orangered" onClick={() => setPhotoshoot(!photoshoot)} data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <FaGreaterThan></FaGreaterThan>
                                        Are photoshoots allowed in Heaven Hill Resort?
                            </a>
                                </h2>
                                <ReactCollapseSimple isOpen={photoshoot}>
                                    <div className="accordion-body">
                                        <p>
                                            We admire people who are interested in Nature Photography, we allow
                                            photoshoots to all group of
                                            people, be it youngsters, married couples or pre-wed couples coming for a
                                            photoshoot, We also provide
                                    professional photographers for your ease. You can visit our <a href="photography">Photography Page </a> for
                                    additional information.
                                </p>
                                    </div>
                                </ReactCollapseSimple>
                            </div>
                            <div className="accordion-item">
                                <h2 className="mb-0 rounded mb-2">
                                    <a className="collapsed text-orangered" onClick={() => setTogether(!together)} data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <FaGreaterThan></FaGreaterThan>
                                        Can we have a day trekking, Night Campfires and Dormitory room together?
                            </a>
                                </h2>
                                <ReactCollapseSimple isOpen={together}>
                                    <div className="accordion-body">
                                        <p>We have special whole day camping packages whose more information can be
                                    fetched at <a href="one-day-packages">Heaven Hill Special camping
                                        Packages</a>
                                        </p>
                                    </div>
                                </ReactCollapseSimple>
                            </div>
                            <div className="accordion-item">
                                <h2 className="mb-0 rounded mb-2">
                                    <a className="collapsed text-orangered" onClick={() => setTrekking(!trekking)} data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <FaGreaterThan></FaGreaterThan>
                                         Do we get trekking packages in your resort?
                            </a>
                                </h2>
                                <ReactCollapseSimple isOpen={trekking}>
                                    <div className="accordion-body">
                                        <p>Yes, we do have trekking packages, you can gain more insights and information
                            on our <a href="trekking">Trekking info page</a></p>
                                    </div>
                                </ReactCollapseSimple>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}