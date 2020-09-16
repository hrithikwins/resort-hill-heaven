import React from 'react';
import { Select } from '@material-ui/core';
import "./styles/pricing-section.sass";
import { useState } from 'react';
import ReactCollapseSimple from 'react-collapse-simple';


const CalculatedResult = (props) => {
    var roomRate;
    if (props.roomType === "Select Room") {
        roomRate=0;
    } else if (props.roomType === "Delux") {
        roomRate= 2500;
        // unsetInfo();
        // setDeluxInfo(true);
        // setCapacity(4);
        // setOccupancy(2);
        // setRoomResult(roomRate);
        // setExtra(memberCount - occupancy);
    } else if (props.roomType === "Super Delux") {
        roomRate=2700;
        // unsetInfo();
        // setSuperDeluxInfo(true);
        // setCapacity(6);
        // setOccupancy(2);
        // if (memberCount < occupancy) {dkljds
        // setRoomResult(roomRate);
        // }dkljds
        // if(occupancy < memberCount < capacity) {dkljds
        // setExtra(memberCount - occupancy);
        // extra = memberCount - occupancy;dkljds
        // setRoomResult(roomRate + extra * 500);dkljds
        // } else { setRoomResult(0) }dkljds

    } else if (props.roomType === "Dormitory") {
        // setRoomRate(8000);dkljds
        roomRate= 8000;
        // unsetInfo();
        // setDormitoryInfo(true);
        // setCapacity(10);
        // setOccupancy(8);
        // if (memberCount < occupancy) {dkljds
        // setRoomResult(roomRate);
        // }
        // if(occupancy < memberCount < capacity) {
        // setExtra(memberCount - occupancy);
        // extra = memberCount - occupancy;
        // setRoomResult(roomRate + extra * 500);
        // } else { setRoomResult(0) }

    } else if (props.roomType === "Tree House") {
        // setRoomRate(4000)
        roomRate = 4000;
        // unsetInfo();
        // setTreeHouseInfo(true);
        // setCapacity(2);
        // setOccupancy(2);
        // if (memberCount < occupancy) {
        // setRoomResult(roomRate);
        // }
        // if(occupancy < memberCount < capacity) {
        // setExtra(memberCount - occupancy);
        // extra = memberCount - occupancy;
        // setRoomResult(roomRate + extra * 500);
        // } else { setRoomResult(0) }
    }
    return(
        <>
        dion
        {roomRate}
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
    // integer values
    const [memberCount, setMemberCount] = useState(1);
    const [roomRate, setRoomRate] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [occupancy, setOccupancy] = useState(0);
    const [roomResult, setRoomResult] = useState(0);
    const [extra, setExtra] = useState(0);
    // const extra = 0;
    // 

    // const calculateRoomCost = (memberCount, occupancy, roomRate, extra) => {

    // }


    const roomAction = (value) => {
        setRoom(value);
        

    }

    // unsetting for collapsible
    function unsetInfo() {
        setDeluxInfo(false)
        setSuperDeluxInfo(false)
        setDormitoryInfo(false)
        setTreeHouseInfo(false)
    }

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
                                    roomAction(e.target.value);
                                }}>
                                    <option value="Select Room">Select Room</option>
                                    <option value="Delux">Delux</option>
                                    <option value="Super Delux">Super Delux</option>
                                    <option value="Dormitory">Dormitory</option>
                                    <option value="Tree House">Tree House</option>
                                </Select>
                            </div>
                            <br />
                            <label htmlFor="memberCount">Number of Members&nbsp; &nbsp;&nbsp; &nbsp;</label>
                            <Select name="memberCount" value={memberCount} onChange={(e) => { setMemberCount(e.target.value); roomAction(room) }}>
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
                            </Select>
                            <div>
                                <br />
                                <input type="radio" name="selection" defaultValue="One" />A/C &nbsp;
                      <input type="radio" name="selection" defaultValue="Two" />Non- A/C
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

                            <label>Your Total cost will be  <h2>₹{roomRate}{'+'}₹{extra * 500}{'='}₹ <span className="text-orangered">{roomRate + extra * 500} </span> </h2></label>

                            {/* The CalculatedResult component will take props and return show the value */}
                            <CalculatedResult
                            roomType={room}
                            />
                            <ReactCollapseSimple isOpen={deluxInfo}>
                                The Delux Room Costs ₹2500 for 2 people in AC Rooms and ₹2100 for Non-AC Rooms
                                For Every Extra Person after 2 members, it costs ₹500/head at a maximum Capacity of 4 Members
                            </ReactCollapseSimple>
                            <ReactCollapseSimple isOpen={superDeluxInfo}>
                                The Super Delux Room Costs ₹2700 for 2 people in AC Rooms and ₹2400 for Non-AC Rooms
                                For Every Extra Person after 2 members, it costs ₹500/head at a maximum Capacity of 6 Members
                            </ReactCollapseSimple>
                            <ReactCollapseSimple isOpen={dormitoryInfo}>
                                The Dormitory Room Costs ₹8000 for 8 people in AC Rooms and ₹6400 for Non-AC Rooms
                                For Every Extra Person after 2 members, it costs ₹500/head at a maximum Capacity of 10 Members
                            </ReactCollapseSimple>
                            <ReactCollapseSimple isOpen={treeHouseInfo}>
                                The Rooms in Tree House Costs ₹4000 for maximum Capacity of 2 Members Only
                            </ReactCollapseSimple>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}