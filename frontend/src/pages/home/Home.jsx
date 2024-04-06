import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:has-[450px] md:has-[550px] rounded-lg overflow-hidden bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

      <Sidebar />
      
    </div>
  )
}

export default Home
