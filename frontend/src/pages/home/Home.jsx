// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/sidebar/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:has-[450px] md:has-[550px] rounded-lg overflow-hidden bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-[500px] mt-20'>

      <Sidebar />
      <MessageContainer />
      
    </div>
  )
}

export default Home
