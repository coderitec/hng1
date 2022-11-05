import React from 'react'
import Profile from './Profile'
import Parts from './Parts'
import Footer from './Footer'

function Home() {
  return (
    <div className='container'>
        <Profile />
        <Parts />
        <Footer />
    </div>
  )
}

export default Home