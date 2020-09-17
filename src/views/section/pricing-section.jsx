import React from 'react';
import { Select } from '@material-ui/core';
import "./styles/pricing-section.sass";
import { useState } from 'react';
import ReactCollapseSimple from 'react-collapse-simple';


const CalculatedResult = (props) => {
    var roomRate;
    var capacity;
    var occupancy;
    var extra = 0;
    if (props.roomType === "Select Room") {
        roomRate = 0;
        capacity = 0;
        occupancy = 0;
    } else if (props.roomType === "Delux" && props.conditioned === true) {
        // DELUX ROOMS ac
        roomRate = 2400;
        capacity = 4;
        occupancy = 2;
    } else if (props.roomType === "Super Delux" && props.conditioned === true) {
        // SUPER DELUX ROOMS
        roomRate = 2700;
        capacity = 6;
        occupancy = 2;

    } else if (props.roomType === "Dormitory" && props.conditioned === true) {
        // DORMITORY ROOMS
        roomRate = 7200;
        capacity = 10;
        occupancy = 8;

    } else if (props.roomType === "Tree House" && props.conditioned === true) {
        // TREE HOUSE
        roomRate = 4000;
        capacity = 2;
        occupancy = 2;
    } else if (props.roomType === "Delux" && props.conditioned === false) {
        // DELUX ROOMS non- ac
        roomRate = 2100;
        capacity = 4;
        occupancy = 2;
    } else if (props.roomType === "Super Delux" && props.conditioned === false) {
        // SUPER DELUX ROOMS
        roomRate = 2400;
        capacity = 6;
        occupancy = 2;

    } else if (props.roomType === "Dormitory" && props.conditioned === false) {
        // DORMITORY ROOMS
        roomRate = 6400;
        capacity = 10;
        occupancy = 8;

    } else if (props.roomType === "Tree House" && props.conditioned === false) {
        // TREE HOUSE
        roomRate = 3500;
        capacity = 2;
        occupancy = 2;
    }

    if (props.count >= occupancy && props.count <= capacity) {
        extra = props.count - occupancy;
    }

    return (
        <>
            <label>Your Total cost will be  <h2>₹{roomRate}{'+'}₹{extra * 500}{'='}₹ <span className="text-orangered">{roomRate + extra * 500} </span> </h2></label>
        </>
    );
}



export const PricingSection = () => {
    const [room, setRoom] = useState('Select Room');
    // boolean values
    const [deluxInfo, setDeluxInfo] = useState(false);
    const [superDeluxInfo, setSuperDeluxInfo] = useState(false);
    const [dormitoryInfo, setDormitoryInfo] = useState(false);
    const [treeHouseInfo, setTreeHouseInfo] = useState(false);
    const [airConditioned, setAirConditioned] = useState(true);
    // integer values
    const [memberCount, setMemberCount] = useState(1);
    const [capacity, setCapacity] = useState(0);
    const [occupancy, setOccupancy] = useState(0);


    function DropDownInfo(props) {
        if (props.room === "Select Room") {
            setCapacity(0);
            setOccupancy(0);
            setMemberCount(occupancy);
            unsetInfo();
        } else if (props.room === "Delux") {
            // DELUX ROOMS
            setCapacity(4);
            setOccupancy(2);
            setMemberCount(occupancy);
            unsetInfo();
            setDeluxInfo(true);
        } else if (props.room === "Super Delux") {
            // SUPER DELUX ROOMS
            setCapacity(6);
            setOccupancy(2);
            setMemberCount(occupancy);
            unsetInfo();
            setSuperDeluxInfo(true);
        } else if (props.room === "Dormitory") {
            // DORMITORY ROOMS
            setCapacity(10);
            setOccupancy(8);
            setMemberCount(occupancy);
            unsetInfo();
            setDormitoryInfo(true);
        } else if (props.room === "Tree House") {
            // TREE HOUSE
            setCapacity(2);
            setOccupancy(2);
            setMemberCount(occupancy);
            unsetInfo();
            setTreeHouseInfo(true);
        }
        return (null);
    }
    // unset for collapsible
    function unsetInfo() {
        setDeluxInfo(false)
        setSuperDeluxInfo(false)
        setDormitoryInfo(false)
        setTreeHouseInfo(false)
    }
    const MemberCountSelect = (props) => {
        const numbers = [];
        for (var i = props.occupancy; i >= props.occupancy && i <= props.capacity; i++) {
            numbers.push(i);
        }
        return (
            <Select name="memberCount" value={memberCount} onChange={(e) => { setMemberCount(e.target.value); setRoom(room); }}>
                {numbers.map(
                    (i) => {
                        return <option value={i}>{i}</option>
                    })}
            </Select>
        );
    };
    return (
        <div className="site-section" id="pricing-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center">
                        <span className="sub-title">Price Calculator</span>
                        <h2 className="font-weight-bold">Variety of services</h2>
                        <p className="mb-5">Your happiness and comfort need not seek money.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 mb-12 mb-lg-0 pricing">
                        <div className="border p-5 text-center rounded">
                            <h3>Rooms Pricing</h3>
                            <h6>We offer Delux, Super Delux, Dormitory and Tree Houses </h6>
                            <br />
                            <br />
                            <div className="price mb-3">
                                <label htmlFor="roomType">Room Type&nbsp; &nbsp;&nbsp; &nbsp;</label>
                                <Select name="roomType" value={room} onChange={(e) => {
                                    setRoom(e.target.value);
                                }}>
                                    <option value="Select Room">Select Room</option>
                                    <option value="Delux">Delux</option>
                                    <option value="Super Delux">Super Delux</option>
                                    <option value="Dormitory">Dormitory</option>
                                    <option value="Tree House">Tree House</option>
                                    <DropDownInfo
                                        room={room}
                                    />
                                </Select>
                            </div>
                            <br />
                            <label htmlFor="memberCount">Number of Members&nbsp; &nbsp;&nbsp; &nbsp;</label>
                            <MemberCountSelect
                                capacity={capacity}
                                occupancy={occupancy}
                            />
                            {/* <Slider from={2} to={9} steps={1}>

                            </Slider> */}
                            <div>
                                <br />
                                <input type="radio" name="selection" defaultValue="One" id="ac" onChange={() => setAirConditioned(true)}/> &nbsp;
                                <label htmlFor="ac">AC</label>
                                &nbsp; &nbsp;
                      <input type="radio" name="selection" defaultValue="Two" id="non-ac" onChange={() => setAirConditioned(false)}/>
                                <label htmlFor="non-ac">Non-AC</label>
                    </div>
                            <br />
                            {/* <Button

                    variant="contained"
                    color="primary"
                    onClick={() => roomAction(room)}
                    >
                        Calculate&nbsp;<FaCalculator></FaCalculator></Button> */}
                            <br />
                            <br />
                            {/* The CalculatedResult component will take props and return show the value */}
                            <CalculatedResult
                                roomType={room}
                                count={memberCount}
                                conditioned = {airConditioned}
                            />
                            <ReactCollapseSimple isOpen={deluxInfo}>
                                The Delux Room Costs <span className="text-orange">₹2400</span> for <span className="text-orange">2</span> people in AC Rooms and <span className="text-orange">₹2100 </span>for Non-AC Rooms
                                For Every Extra Person, it costs ₹500/head at a maximum Capacity of <span className="text-orange">4</span> Members
                            </ReactCollapseSimple>
                            <ReactCollapseSimple isOpen={superDeluxInfo}>
                                The Super Delux Room Costs <span className="text-orange">₹2700</span> for <span className="text-orange">2</span> people in AC Rooms and <span className="text-orange">₹2400</span> for Non-AC Rooms
                                For Every Extra Person, it costs ₹500/head at a maximum Capacity of <span className="text-orange">6</span> Members
                            </ReactCollapseSimple>
                            <ReactCollapseSimple isOpen={dormitoryInfo}>
                                The Dormitory Room Costs <span className="text-orange">₹7200</span> for 8 people in AC Rooms and <span className="text-orange">₹6400</span> for Non-AC Rooms
                                For Every Extra Person, it costs ₹500/head at a maximum Capacity of <span className="text-orange">10</span> Members
                            </ReactCollapseSimple>
                            <ReactCollapseSimple isOpen={treeHouseInfo}>
                                The Rooms in Tree House Costs <span className="text-orange">₹4000 </span>for maximum Capacity of <span className="text-orange">2</span> Members Only
                            </ReactCollapseSimple>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}