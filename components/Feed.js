import React from 'react'
import Stories from './Stories' 
import Image from 'next/image'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>
            {/*Stories"*/}
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
              <Image
                src = 'https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png'
                layout ="fill"
                objectFit='contain'
              />
            </div>
            <Stories />
            {/*Posts"*/}
            <Posts />
        </section>
        
        <section className='hidden xl:inline-grid md:col-span-1'>
          <div className='fixed top-20'>
            <MiniProfile/>
              {/*Mini Profile"*/}
            <Suggestions/>
              {/*Suggestions"*/}
          </div>
          
        </section>
        
    </main>
  )
}

export default Feed