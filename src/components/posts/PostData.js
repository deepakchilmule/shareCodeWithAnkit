import React, { useState } from 'react'
import FilterComponent from '../filter/FilterComponent'

function PostData({ data }) {

    const [receiver, setReceiver] = useState('')
    const [search, setSearch] = useState('')
    
    let filteredArr = []

  

console.log(data)

    function composeEmail(receipient) {
        setReceiver(receipient)

    }

    // function searchHandler(e){
    //     setSearch(e.target.value)
    //   const serachedValue =   data.filter((d)=>{
    //         d.email.toLowerCase().includes == search.toLocaleLowerCase()
    //     })
    //     setData(serachedValue)

    // }

    // function searcHandler(e){
    //     setSearch(e.target.value)
    //     const newData = data.filter((d)=>(
    //         d.name == search.toLowerCase()
    //     ))
    //     setShowData(newData)
    // }

    // function searchHandler(e){
    //     setSearch(e.target.value)
    //     data.filter((d)=>(
    //         d.name.trim() == search.toLowerCase().trim()
    //     ))
    // }

    function searchHandler(e) {
        setSearch(e.target.value)
         filteredArr = data.filter((d)=>(
            d.name.toLowerCase().includes(search.toLowerCase())
        ))
        console.log(filteredArr)
        console.log(search)
        
    }
    // const filter = data.filter((d) => (
    //     d.name.toLowerCase().includes(search.toLowerCase())
    // ))



    

    return (
        <div style={{ padding: '20px' }}>
            {
                receiver && <div style={{ border: '1px solid gray', padding: '30px', }}>
                    <h2> Compose an Email </h2>
                    <p>to : {receiver} </p>
                    <textarea></textarea>
                    <button>Send Email </button>
                    <button onClick={() => {
                        setReceiver('')
                    }}> Close </button>
                </div>
            }

            <label>Search : </label>
            <input onChange={(e) => {
                searchHandler(e)
            }}></input>

<div>

{
    filteredArr ? <div> {
        filteredArr.map((d)=>(
            <p> {d.name} </p>
        ))
    } </div> : <div>
    {data.map((d) => (

<section style={{ marginTop: '10px', borderBottom: '1px solid black' }} key={d.id}>

    <h2> {d.title} </h2>
    {d.name ? <h2> Name : {d.name} </h2> : null}
    {d.username ? <h4> Username : {d.username} </h4> : null}
    {d.email ? <p> Email : {d.email} </p> : null}
    {d.email ? <button onClick={() => {
        composeEmail(d.email)
    }}> Send Email </button> : null}
    {d.address ? <p> Address : {d.address.city} </p> : null}
    <p> {d.body} </p>
</section>
))}
    </div>
}

</div>


        </div>
    )
}

export default PostData


// APIData.filter((item) => {
//     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
// })


