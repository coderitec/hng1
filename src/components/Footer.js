import React from 'react'
import './styles/Footer.css'
import img from '../media/ingressive.webp'

function Footer() {
  return (
    
        <ol className='footer'>
            <li>Zuri Internship</li>
            <li>HNG Internship 9 Frontend Task</li>
            <li>
                <img src={img} alt="ingressive for good logo"/>
            </li>
        </ol>
  
  )
}

export default Footer