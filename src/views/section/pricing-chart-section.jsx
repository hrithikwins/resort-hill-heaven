import React from 'react';
import "../section/styles/rates.sass";
export const PricingChartSection = () => (
    <>
        <div className="site-section" id="pricing-chart-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <span className="sub-title">Pricing Chart</span>
                        <h2 className="font-weight-bold mb-5 p-2">Tarrif Plans</h2>
                    </div>
                </div>
            </div>
            <section id="rates" className="col-12 justify-center">
                <div class="roomrates col-12 justify-center">
                    <h2>Visitor stays at Heaven Hill Resort</h2>
                    <table border="2" id="roomRates">
                        <th colspan="2">Room Type</th>
                        <th>Occupancy</th>
                        <th>A/c</th>
                        <th>Non-A/C</th>
                        <th>Extra Person</th>
                        <th>Capacity</th>
                        <tr>
                            <td>Delux</td>
                            <td>Double Bed</td>
                            <td>2 People</td>
                            <td>2400/-</td>
                            <td>2100/-</td>
                            <td>500/-</td>
                            <td>4 People</td>
                        </tr>
                        <tr>
                            <td>Super Delux</td>
                            <td>Double Bed</td>
                            <td>2 People</td>
                            <td>2700/-</td>
                            <td>2400/-</td>
                            <td>500/-</td>
                            <td>6 People</td>
                        </tr>
                        <tr>
                            <td>Dormitory</td>
                            <td>24 hours</td>
                            <td>8 People</td>
                            <td>7200/-</td>
                            <td>6400/-</td>
                            <td>500/-</td>
                            <td>10 People</td>
                        </tr>
                        <tr>
                            <td>Tree House</td>
                            <td>Double Bed</td>
                            <td>2 People</td>
                            <td>4000/-</td>
                            <td>3500/-</td>
                            <td>600/-</td>
                            <td>3 People </td>
                        </tr>
                    </table>
                </div>
                <br />
                <br />
                <div class="roomrates">
                    <h2>Day Tariff Plans at Heaven Hill Resort</h2>
                    <table border="2" id="roomRates">
                        <th>Room Type</th>
                        <th>Occupancy</th>
                        <th>A/c</th>
                        <th>Non-A/C</th>
                        <th>Extra Person</th>
                        <th>Capacity</th>
                        <tr>
                            <td>Delux</td>
                            {/* <td>Double Bed</td> */}
                            <td>2 Members</td>
                            <td>1800/-</td>
                            <td>1600/-</td>
                            <td>500/-</td>
                            <td>4 Members</td>
                        </tr>
                        <tr>
                            <td>Dormitory</td>
                            {/* <td>12 hours</td> */}
                            <td>8 Members</td>
                            <td>4000/-</td>
                            <td>3200/-</td>
                            <td>300/-</td>
                            <td>10 Members</td>
                        </tr>
                        <tr>
                            <td>Tree House</td>
                            {/* <td>Double Bed</td> */}
                            <td>2 Members</td>
                            <td>3500/-</td>
                            <td>3000/-</td>
                            <td>600/-</td>
                            <td>3 Members </td>
                        </tr>
                    </table>
                </div>

                <div class="picnicRates">
                    <h2>Group Picnics at Heaven Hill Resort</h2>
                    <table id="picnicRates">
                        <th className="text-center">Heaven Hill Day Package</th>
                        <th className="text-center">Adult Per head</th>
                        <th className="text-center">Child below 12years</th>
                        <tr>
                            <td className="text-center">
                                Breakfast, Lunch, evening Snacks &amp; Swimming
                            </td>
                            <td className="text-center">
                                800/-
                            </td>
                            <td className="text-center">
                                700/-
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="poolRates">
                    <h2>Swimming at Heaven Hill Resort</h2>

                    <div class="packageInfo">
                        <p className="text-center">Entry Fees for Swimming at Heaven Hill Resort (2 hours)</p>
                    </div>
                    <div class="packageRates">
                        <table>
                            <tr>
                                <td className="text-center p-2">
                                    Adult- ₹300/- per head
                                </td>
                                <td className="text-center p-2">
                                    Child - ₹200/- per head
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="campingRates">
                    <h2>Night Camping in Tent House</h2>
                    <div class="packageInfo">
                        <p>Night Camping package includes Welcome Drink(Non- Alcoholic), Dinner,
                        Veg/Non-Veg,Night Stays; Farewell with Breakfast</p>
                        <span>Per Head: 1500/-</span>
                    </div>
                </div>

                <div class="moreRates">
                    For more details regarding bookings and other information
                    please visit &nbsp;
                <a href="/home">
                         heavenhillagroresort.com</a>
                </div>
            </section>
        </div>
    </>
);