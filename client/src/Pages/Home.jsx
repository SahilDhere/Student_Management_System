import React from 'react'
import { assests } from '../assets/assests'

function Home() {
  return (
    <>
        <div className='flex items-center justify-around mt-12'>
        <div>
            <img className='mt-10 h-100px' src={assests.home} alt="" />
        </div>

            <div>
                <h1 className='text-5xl'>Student Management System</h1> 
                <p className='text-2xl mt-5 ml-20'>Store and Access Complete Student Profile</p>
            </div>

        </div>
    </>
  )
}

export default Home
