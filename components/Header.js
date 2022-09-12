import React from 'react'
import Image from 'next/image'
import {SearchIcon, HomeIcon, MenuIcon} from "@heroicons/react/solid"
import {PaperAirplaneIcon,PlusCircleIcon, HeartIcon} from "@heroicons/react/outline"
import { signIn,signOut,useSession } from 'next-auth/react'
import { useEffect} from 'react'
import {useRouter} from 'next/router'
import { useRecoilState } from 'recoil'
import {modalState} from '../atoms/modalAtom'
import {db} from '../firebase'
import { query, orderBy, where,snapshot, onSnapshot, getDocs, setDoc, addDoc, useCollection, collection, doc, serverTimestamp} from '@firebase/firestore'

function Header() {
  const {data:session} = useSession()
  const router = useRouter()
  const [open, setOpen] = useRecoilState(modalState)

  useEffect(() => {
    if (session){
      setDoc(doc(db, 'users',session.user.uid),{
        username: session.user.username,
        lastSeen: serverTimestamp(),
        userPic: session.user.image
      },
      {merge: true}
      )
    }
    
  }, [session])

  return (
    <div className='shadow-sm border-b bg-white sticky-top 0 z-50'>
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
          {/* Left Instagram Text Logo*/}
          <div onClick={()=>router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
              <Image
                src = 'https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png'
                layout ="fill"
                objectFit='contain'
              />
          </div>
          <div onClick={()=>router.push('/')} className='relative lg:hidden w-10 flex-shrink-0 cursor-pointer'>
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
            <HomeIcon onClick={()=>router.push('/')} className='navBtn'/>
            <MenuIcon className='h-6 relative md:hidden cursor-pointer'/>
            {session ? (
              <>
              <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45' onClick={() => router.push('/emptyChat')}/>
                <div className = 'hidden md:inline-flex absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full justify-center animate-pulse text-white'>3</div>
              </div>
              
              <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
              <HeartIcon className='navBtn'/>

              <img onClick={signOut} src = {session.user?.image} 
              alt ='profile pic' className='h-10 w-10 rounded-full cursor-pointer'/>
              </>
            ): (
              <button onClick={signIn}>Sign In</button>
            )}
            
          </div>
          
        </div>      
    </div>
  )
}

export default Header