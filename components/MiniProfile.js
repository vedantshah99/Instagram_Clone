import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img
            className=' h-16 w-16 rounded-full border p-[2px]'
            src='https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw' alt = ''
        />

        <div className='flex-1 mx-4'>
            <h2 className='font-semibold'>v3dant_shah</h2>
            <h3 className='text-gray-400'>Vedant Shah</h3>
        </div>

        <button className='text-blue-400 ml-14 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile