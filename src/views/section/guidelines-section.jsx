import React from 'react';
import {  FaRegCheckCircle, FaRegDotCircle } from 'react-icons/fa';

export const Guidelines = () => (
    <>
    <div className="row m-5">
        <div className="col-md-6 row">
        <h2 className="col-md-12 row">
            TODO list for Heaven Hill Resort
    </h2>
        <ul className="justify-right list-none col-md-6 col-sm-12">
            <input type="checkbox" checked/>Checkin Time 12:00 pm and checkout time 11:00 a.m.<br/>
            <input type="checkbox" checked/>ID proof is Compulsory: All Adults must carry their Identity Proof at the time of checking in(Driving License, Voters Card, Passport, PAN Card or Aadhar Card<br/>
            <input type="checkbox" checked/>Take care of resort property as you do for your home<br/>
            <input type="checkbox" checked/>Switch Off Fans, ACs, Lights and other Elelctronic Equipments when not in Use<br/>
            <input type="checkbox" checked/>Take care of your belongings<br/>
        </ul>
        </div>
        <div className="col-md-6 list-style-none row">
            <h2 className="col-md-12 row">Precautions at Heaven Hill Resort</h2>
        < ul className="justify-center col-md-6 col-sm-12" >
            <li><FaRegDotCircle/> Do not smoke inside the rooms</li>
            <li><FaRegDotCircle/> Damaging the property results in paying penality</li>
            <li><FaRegDotCircle/> Gambling in the room isn't allowed</li>
            <li><FaRegDotCircle/> Do not bring outside food into the resort</li>
        </ul>
        </div>
    </div>
        

        

        

    </>
);

export default Guidelines();
