import React from 'react'
import'./style.css'
export default function card({ele, key}) {
  return (
    <div className='card' style={{width:ele.width}} key={key}>
      <div className='cardHeader'>
        <img src={ele.icon} alt={ele.name}/>
        <p className='HeaderP'>{ele.name}</p>
      
      </div>
      {ele.comp}
    </div>
  )
}
