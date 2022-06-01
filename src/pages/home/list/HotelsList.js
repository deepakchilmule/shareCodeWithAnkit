import React, { useState } from 'react'
import Header from '../../../components/header/Header'
import Navbar from '../../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { properties } from '../../../app.data'
import { places } from '../../../app.data'
import './hotelList.css'
import { useNavigate } from 'react-router-dom'

function HotelsList() {
const location = useLocation();
const navigate = useNavigate();

  const searchedCity = location.state.destination;
  console.log(location.state.destination)
  const data = places;



  return (
    <div>
      <Navbar />
      <Header />
      <div className='places'>
        {
          data.filter((city) => (
            city.name.toLowerCase() == searchedCity.toLowerCase()
          )).map((d) => (
            <div className='places'>
            <>
              <img className='images' onClick={()=>{
                navigate(`${d.id}`)
              }} src={d.img}></img>
              <h2> {d.name} </h2>
              <h3>{d.city} </h3>
              </>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default HotelsList