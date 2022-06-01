import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './comments.css'

function Comments() {
  const [comments, setComments] = useState([])
  const [receipient, setReceipient] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    async function getComments() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=40')
      console.log(res.data)
      setComments(res.data)
    }
    getComments()

  }, [])


  function sendEmail(name) {
    setReceipient(name)
    setShowModal(true)
  }


  function background() {
    const color = showModal && 'black';
    return color
  }

  return (
    <div style={{ position: 'relative' }} className={background()}>

      {showModal ? <div style={{
        backgroundColor: 'beige', border: '1px solid gray',
        color: 'saddlebrown', padding: '30px', borderRadius: '20px',
        position: 'absolute', right: '500px', top: '100px'
      }}>
        <h1> Compose an Email </h1>
        <p> to : {receipient} </p>
        <textarea></textarea>
        <button>Send</button>
        <button onClick={() => {
          setShowModal(false)
        }}> close </button>
      </div> : null}

      {
        comments.map((d) => (
          <section style={{ padding: '20px' }}>
            <h1> <span style={{ color: 'orange' }}> Name</span>: {d.name} </h1>
            <p> {d.body} </p>
            <h4> {d.email} </h4>
            <button onClick={() => {
              sendEmail(d.email)
            }}>Send Email</button>

          </section>
        ))
      }
    </div>
  )
}

export default Comments