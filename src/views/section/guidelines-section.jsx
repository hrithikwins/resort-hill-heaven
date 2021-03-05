import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import '../../../src/views/section/styles/guidelines-section.sass';
export const Guidelines = () => (
  <>
    <div className="row p-5 bubblegum-font w-100" id="guidelines">
        {/* Todo box */}
      <div className="col-md-6 col-12 px-md-5">
        <h2 className="bubblegum-font">
          To Do list for Heaven Hill Resort
        </h2>
        <ul className="list-none bubblegum-font">
          <input type="checkbox" checked className="todo-list-checked" />{" "}
          Check-in Time 11:00 pm and checkout 9:00 a.m.
          <br />
          <input type="checkbox" checked className="todo-list-checked" /> ID
          proof is Compulsory: All Adults must carry their Identity Proof at the
          time of checking in(Voters Card, Passport, PAN Card or Aadhar Card)
          <br />
          <input type="checkbox" checked className="todo-list-checked" /> Take
          care of resort property as you do for your home
          <br />
          <input type="checkbox" checked className="todo-list-checked" /> Switch
          Off Fans, ACs, Lights and other Elelctronic Equipments when not in Use
          <br />
          <input type="checkbox" checked className="todo-list-checked" /> Take
          care of your belongings
          <br />
        </ul>
      </div>
      <div className="col-md-6 col-12 px-md-5">
        <h2 className="col-md-12 row">Precautions at Heaven Hill Resort</h2>
        <div className="col-md-6 col-sm-12">
          <div>
            <FaRegDotCircle className="text-orangered" /> Do not smoke inside
            the rooms
          </div>
          <div>
            <FaRegDotCircle className="text-orangered" /> Damaging the property
            results in paying penality
          </div>
          <div>
            <FaRegDotCircle className="text-orangered" /> Gambling in the room
            isn't allowed
          </div>
          <div>
            <FaRegDotCircle className="text-orangered" /> Outside Food is not
            allowed in the resort
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Guidelines();
