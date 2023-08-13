import React from 'react'
import "./ServicesFloat.css"

function ServicesFloat({txt1,txt2,img1}) {
  return (
    <div className='servicesfloat'>
        <img src={img1}></img>
        <span>{txt1}</span>
        <span>{txt2}</span>
        {/* <button className='floatbutton'>Learn More</button> */}
    </div>
  )
}

export default ServicesFloat