import React from 'react'

const Conversation = () => {
  return (
    <>
     <div className='flex gap-2 items-center hover:bg-green-300  text-gray-200 hover:text-black rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src='https://avatar.iran.liara.run/public/boy' alt="user avatar" />
            </div>
        </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold'>Samit Khedekar</p>
            <span className='text-x1'>😒</span>
        </div>
      </div>
     </div>

     <div className='divider my-0 py-0 h-1' />

    </>
  )
}

export default Conversation
