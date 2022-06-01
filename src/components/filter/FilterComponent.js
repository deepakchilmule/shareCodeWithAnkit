import React from 'react'

function FilterComponent({data}) {
  return (
    <div>
        {
            data.map((d)=>(
                <p> {d.name} </p>
            ))
        }
    </div>
  )
}

export default FilterComponent