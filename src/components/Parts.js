/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

export default function Parts() {
  return (
    <div className='link-section'>
       
            <a href = "https://twitter.com/Coderite_">Twitter Link</a>
        
            <a href = "https://training.zuri.team/" id='btn-zuri'>Zuri Team</a>
      
            <a href = "http://books.zuri.team" id='books'>Zuri Books</a>
    
            <a href = "https://books.zuri.team/python-for-beginners?ref_id=franc" id='book__python'>Python Books</a>
        
            <a href = "https://background.zuri.team" id='pitch'>Connect with me</a>
    
            <a href = "https://books.zuri.team/design-rules" id='book_design'>Design Books</a> 

            <Link to="/contact" id='contact'>Contact</Link>       
    </div>
  )
}
