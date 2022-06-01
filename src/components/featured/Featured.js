import React from "react";
import { cities, properties } from "../../app.data";
import './featured.css'

function Featured() {
  return (
    <>
    <div className="featured-container">
      {cities.map((city) => (
        <div className="picture-div">
          <img className="pictures" src={city.img} ></img>
          <h1 className="city-name"> {city.name} </h1>
        </div>
      ))}
    </div>
<h2>Browse by properties</h2>
<div className="browse-by-properties">
<div className="properties-div">
  {
     properties.map((d)=>(
       <div className="individual">
         <img className="properties-pictures" src={d.image}></img>
         <h2> {d.type} </h2>
         <span>{d.numbers} </span>
       </div>
     ))
  }
</div>
</div>
    </>
  );
}

export default Featured;
