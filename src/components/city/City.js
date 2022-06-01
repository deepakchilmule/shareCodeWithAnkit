import React from 'react'
import { places } from '../../app.data'
import { useParams } from 'react-router-dom';
import './city.css'

function City() {

  const data = places;

  let { id } = useParams()

  function price(location) {
    const num = location == 'india' ? ' INR' : location == 'new york' ? ' $' : null
    return num;
  }

  const particularCity = data.filter((d) => {
    return d.id == id;
  }).map(city => {
    city.prices = price(city.name.toLocaleLowerCase())
    return city
  })
   
  console.log(particularCity)
  return (
    <div>
      {
        particularCity.map((d) => (
          <div>
            <img className='city-img' src={d.img}></img>
            <h2> {d.name} </h2>
            <h3>{d.city} </h3>
            <p> {d.prices} </p>
          </div>
        ))
      }
    </div>
  )
}

export default City
