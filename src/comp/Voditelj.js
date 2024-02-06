import React from 'react'
import './Voditelji.css'
function Voditelj(props) {
  return (
    <div className='voditelj-container'>
        <img src={props.src} alt="" className='voditelj-image'>

        </img>
        <div className='voditelj-info'>
            <h2 className='voditelj-name'>{props.name}</h2>
            <h3 className='voditelj-skavt-name'>{props.skavtName}</h3>
            <p className='voditelj-description'>{props.description}</p>
        </div>
    </div>
  )
}

export default Voditelj