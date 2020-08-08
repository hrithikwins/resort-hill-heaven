import React from 'react';
export const PricingChartSection = () => (
    <>
        <div className="site-section" id="pricing-chart-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <span className="sub-title">Pricing Chart</span>
                        <h2 className="font-weight-bold text-black mb-5">More pricing Information</h2>
                    </div>
                </div>
            </div>
        </div>
        <section id="rates">
            <div class="roomrates">
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
                        <td>2 Members</td>
                        <td>2500/-</td>
                        <td>2100/-</td>
                        <td>500/-</td>
                        <td>4 Members</td>
                    </tr>
                    <tr>
                        <td>Super Delux</td>
                        <td>Double Bed</td>
                        <td>2 Members</td>
                        <td>2700/-</td>
                        <td>2400/-</td>
                        <td>500/-</td>
                        <td>6 Members</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Dormitory</td>
                        <td>Dormitory for 24 hrs</td>
                        <td>8 Members</td>
                        <td>8000/-</td>
                        <td>6400/-</td>
                        <td>500/-</td>
                        <td>10 Members</td>
                    </tr>
                    <tr>
                        <td>Dormitory for a day's picnic</td>
                        <td>8 Members</td>
                        <td>4800/-</td>
                        <td>4000/-</td>
                        <td>300/-</td>
                        <td>10 Members</td>
                    </tr>
                    <tr>
                        <td>Tree House</td>
                        <td>Double Bed</td>
                        <td>2 Members</td>
                        <td>4000/-</td>
                        <td colspan="3">Only 2 Members </td>
                    </tr>
                </table>
            </div>

            <div class="picnicRates">
                <h2>Group Picnics at Heaven Hill</h2>
                <table id="picnicRates">
                    <th>One Day Package</th>
                    <th>Adult Per head</th>
                    <th>Child below 12years</th>
                    <tr>
                        <td>
                            Breakfast, Lunch, evening Snacks &amp; Swimming
                        </td>
                        <td>
                            850/-
                        </td>
                        <td>
                            750/-
                        </td>
                    </tr>
                </table>
            </div>

            <div class="poolRates">
                <h2>Swimming at Heaven Hill Resort</h2>

                <div class="packageInfo">

                    <p>Entry Fees for Saturday , Sunday &amp; Holiday after 3:30 p.m </p>
                </div>
                <div class="packageRates">
                    <table>
                        <th>
                            Adult Per Head
                        </th>
                        <tr>
                            <td>
                                300
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="campingRates">
                <h2>Night Camping in Tent House</h2>
                <div class="packageInfo">
                    <p>Night Camping package includes Welcome Drink(Non- Alcoholic), Dinner,
                        Veg/Non-Veg, Stays; Next Day Breakfast</p>
                    <span>Per Head: 1500/-</span>
                </div>
            </div>

            <div class="moreRates">
                For more details regarding bookings and other informations
                please
                <a href="booking-2.html">
                    click here</a>
            </div>
        </section>
    </>
);