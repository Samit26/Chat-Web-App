import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3x1 front-semibold text-center text-gray-300'>
              Signup
            <span className='text-green-300'> Web Chat</span>
            </h1>

            <form>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Full Name</span>
                </label>
                <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Password</span>
                </label>
                <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type='password' placeholder='Enter confirm password' className='w-full input input-bordered h-10' />
              </div>

              <GenderCheckBox/>
              <a href='#' className='text-sm hover:underline hover:text-green-300 mt-2 inline-block'>
                Already have an account?
              </a>
              <div>
                <button className='btn btn-block btn-sm mt-2 btn-accent'>Signup</button>
              </div>
            </form>
            
        </div>
      
    </div>
    </div>
  )
}

export default SignUp
