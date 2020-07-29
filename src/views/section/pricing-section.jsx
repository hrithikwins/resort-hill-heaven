import React from 'react';


export const PricingSection = () => (
    <div className="site-section" id="pricing-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                    <span className="sub-title">Price Calculator</span>
                    <h2 className="font-weight-bold text-black">Variety of services</h2>
                    <p className="mb-5">Your happiness and comfort need not seek money.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 mb-12 mb-lg-0 pricing">
                    <div className="border p-5 text-center rounded">
                        <h3>Rooms Pricing</h3>
                        <h6>We offer Delux, Super Delux, Dormitory and Tree Houses </h6>
                        <div className="price mb-3">
                            <label htmlFor="roomType">Room Type</label>
                            <select name="roomType" value="Select Room">
                                <option value="Select Room">Select Room</option>
                                <option value="Delux">Delux</option>
                                <option value="Super Delux">Super Delux</option>
                                <option value="Dormitory">Dormitory</option>
                                <option value="Tree House">Tree House</option>
                            </select>
                        </div>
                        <label htmlFor="memberCount">Number of Members</label>
                        <select name="memberCount" value={0}>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                        <div>
                            <input type="radio" name="selection" defaultValue="One" />A/C &nbsp;
                      <input type="radio" name="selection" defaultValue="Two" />Non- A/C
                    </div>
                        <p><a href="#home" className="btn btn-lg btn-primary rounded-0 btn-block">Calculate</a></p>
                        <label htmlFor="results">Enter required details and press Calculate for pricing</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
);