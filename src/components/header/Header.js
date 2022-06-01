import React from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [destination, setDestination] = useState("")

  const navigate = useNavigate();


  function searchHandler() {

    navigate('hotels', { state: { destination: destination } } )

  }

  return (
    <>
      <div className="header-container">
        <div className="selected">stays</div>
        <div>flights</div>
        <div>Car Rentals</div>
        <div>Airport Taxis</div>
      </div>
      <div className="btn">
        <button>Sign In</button>
        <button> Register </button>
      </div>

      <div className="search">
        <div>
          <input placeholder="where are you going ?" onChange={(e) => {
            setDestination(e.target.value)
          }}></input>
        </div>
        <button onClick={searchHandler}>Search</button>
      </div>
    </>
  );
}

export default Header;
