import React from 'react'
import { footer } from '../../../app.data'
import './footer.css'

function Footer() {
  return (
      <>
    <div className='footer-div'>
        {
            footer.map((d)=>(
                <div className='individual-footer'>
                    <h2> {d.title} </h2>
                    {d.body.map((item)=>(
                        <p> {item} </p>
                    ))}
                    
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Footer