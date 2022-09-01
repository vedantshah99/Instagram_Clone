import React from 'react'
import Image from 'next/image'
import {SearchIcon, HomeIcon, MenuIcon} from "@heroicons/react/solid"
import {PaperAirplaneIcon,PlusCircleIcon, HeartIcon} from "@heroicons/react/outline"

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
          {/* Left Instagram Text Logo*/}
          <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
              <Image
                src = 'https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png'
                layout ="fill"
                objectFit='contain'
              />
          </div>
          <div className='relative lg:hidden w-10 flex-shrink-0 cursor-pointer'>
              <Image
                src = 'https://image.similarpng.com/very-thumbnail/2020/05/Icon-Instagram-PNG.png'
                layout ="fill"
                objectFit='contain'
              />
          </div>

          {/* Search Bar */}
          <div className='max-w-xs'>
            <div className='relative mt-1 p-3 rounded-nd'>
              <div className = "absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className='h-5 w-5 text-gray-500'/>
              </div>

              <input
                className='bg-Gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'
                type="text"
                placeholder="Search" />
            </div>
          </div>

          {/* Icons */}
          <div className = 'flex items-center justify-end space-x-4'>
            <HomeIcon className='navBtn'/>
            <MenuIcon className='h-6 relative md:hidden cursor-pointer'/>
            <PaperAirplaneIcon className='navBtn' />
            <PlusCircleIcon className='navBtn' />
            <HeartIcon className='navBtn'/>

            <img src = "https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw"
            alt ='profile pic' className='h-10 rounded-full cursor-pointer'/>

          </div>
          
        </div>      
    </div>
  )
}

export default Header