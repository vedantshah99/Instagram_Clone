import React from 'react'
import Stories from './Stories' 
import Image from 'next/image'

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
        </section>
        
        <section>
            {/*Mini Profile"*/}
            {/*Suggestions"*/}
        </section>
        
    </main>
  )
}

export default Feed