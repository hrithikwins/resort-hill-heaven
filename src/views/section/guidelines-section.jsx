import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import '../../../src/views/section/styles/guidelines-section.sass';
export const Guidelines = () => (
    <>
    <div className="row m-5 d-none">
        <div className="col-md-6 row">
        <h2 className="col-md-12 row">
            TODO list for Heaven Hill Resort
    </h2>
        <ul className="justify-right list-none col-md-6 col-sm-12">
            <input type="checkbox" checked className="todo-list-checked"/> Check-in Time 11:00 pm and checkout 9:00 a.m.<br/>
            <input type="checkbox" checked className="todo-list-checked"/> ID proof is Compulsory: All Adults must carry their Identity Proof at the time of checking in(Driving License, Voters Card, Passport, or Aadhar Card<brPAN Car/>
            <input type="checkbox" checked className="todo-list-checked"/> Take care of resort property as you do for your home<br/>
            <input type="checkbox" checked className="todo-list-checked"/> Switch Off Fans, ACs, Lights and other Elelctronic Equipments when not in Use<br/>
            <input type="checkbox" checked className="todo-list-checked"/> Take care of your belongings<br/>
        </ul>
        </div>
        <div className="col-md-6 list-style-none row">
            <h2 className="col-md-12 row">Precautions at Heaven Hill Resort</h2>
        < div className="justify-center col-md-6 col-sm-12" >
            <div><FaRegDotCircle className="text-orangered"/> Do not smoke inside the rooms</div>
            <div><FaRegDotCircle className="text-orangered"/> Damaging the property results in paying penality</div>
            <div><FaRegDotCircle className="text-orangered"/> Gambling in the room isn't allowed</div>
            <div><FaRegDotCircle className="text-orangered"/> Outside Food is not allowed in the resort</div>
        </div>
        </div>
    </div>
        

        

        

    </>
);

export default Guidelines();
