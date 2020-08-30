import React from 'react';
import { FaListAlt, FaRegCheckCircle, FaRegDotCircle } from 'react-icons/fa';

export const Guidelines = () => (
    <>
    <div className="row m-5">
        <div className="col-md-6 row">
        <h2 className="col-md-12 row">
            TODO list for Heaven Hill Resort
    </h2>
        <ul className="justify-right list-none col-md-6 col-sm-12">
            <li><FaRegCheckCircle/> Checkin Time 12:00 pm and checkout time 11:00 a.m.</li>
            <li><FaRegCheckCircle/> ID proof is Compulsory: All Adults must carry their Identity Proof at the time of checking in(Driving License, Voters Card, Passport, PAN Card or Aadhar Card</li>
            <li><FaRegCheckCircle/> Take care of resort property as you do for your home</li>
            <li><FaRegCheckCircle/> Switch Off Fans, ACs, Lights and other Elelctronic Equipments when not in Use</li>
            <li><FaRegCheckCircle/> Take care of your belongings</li>
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
