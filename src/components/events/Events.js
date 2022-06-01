import React from 'react'

function Events() {

    function handleClick() {
        console.log('you clicked the button')
    }

    function handleClick2(name) {
        console.log(`hello ${name}`)
    }

    function handleClick3(e){
        console.log(e)
        console.log(e.type)
        console.log(e.target)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2> Events Example :</h2>
            <p> Hello </p>

            <button onClick={handleClick}>Click 1</button>
            <br></br>
            <button onClick={() => {
                handleClick2('pankaj')
            }}>Click 2</button>
            <br></br>
            <button onClick={(e)=>{
                handleClick3(e)
            }}> Click 3 </button>

            <button onChange={()=>{
         console.log('you clicked the btn')
            }}></button>

        </div>
    )
}

export default Events