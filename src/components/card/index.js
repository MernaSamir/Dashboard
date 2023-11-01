import React from 'react'
import'./style.css'
export default function card({ele, key}) {
  return (
    <div className='card' style={{width:ele.width}} key={key}>
      <div className='cardHeader'>
        <div className='leftHeader'>
        <img src={ele.icon} alt={ele.name}/>
        <p className='HeaderP'>{ele.name}</p>
        </div>
        <div className='rightInfo'>
      {ele.besideHeader} 
      </div>
      
      </div>

      {ele.comp}
    </div>
  )
}
