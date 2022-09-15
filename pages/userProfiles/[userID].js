import React from 'react'
import Header from '../../components/Header'
import { useRouter} from 'next/router'
import { query, orderBy,getDoc, getDocs,onSnapshot, addDoc, collection,where, doc} from '@firebase/firestore'
import {db} from '../../firebase'
import {useSession} from 'next-auth/react'
import { useState , useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { Diversity1Sharp } from '@mui/icons-material'

function profile({username, userPic}) {
    const router = useRouter()
    const id = router.query.userID
    const [userChats, setUserChats] = useState([])
    const {data:session} = useSession()
  
  useEffect(() => onSnapshot(query(collection(db, 'chats'), where('users', 'array-contains', session?.user?.username)), snapshot=>{
        setUserChats(snapshot.docs)
      })
  ,[db])

  const createChat = async() =>{
    console.log(username)
    const bool = chatAlreadyExists(username)
    if (!bool) {
      const q = query(collection(db, 'chats'))
      await addDoc(collection(db, 'chats'), {
        users:[session.user.username, username]
      })
    }
    
  }

  const chatAlreadyExists = (recipientUser) =>{
    return(
      !!userChats.find(
        (chat)=>
          chat.data().users.find((user) => user === recipientUser)?.length > 0
        )
    )
  }

  return (
    <div>
        <Header />
        <div className='grid grid-cols-3 mt-10 gap-4 justify-between mx-auto max-w-screen-lg'>
            {/*User Photo*/}
            <div className='container flex justify-center'>
                <img 
                    className='rounded-full h-40 w-40 flex'
                    src={userPic}
                />
            </div>

            {/*Username*/}
            <div className='flex items-center justify-center flex-col col-span-2'>
                <div className='container flex items-center'>
                    <p className='text-2xl mr-4'> {username} </p>
                    <button 
                        className='bg-gray-100 font-bold text-sm rounded w-20 h-8'
                        type='button'
                        onClick={createChat}
                    >
                        Message
                    </button>
                </div>

                <div className='container flex mt-4'>
                    <p className='mr-10'>
                        <span className='font-bold'>0 </span> photos
                    </p>
                    <p className='mr-10'>
                        <span className='font-bold'>0 </span> followers
                    </p>
                    <p className='mr-10'>
                        <span className='font-bold'>0 </span> following
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default profile

export async function getServerSideProps(context){
    const userRef = doc(collection(db,'users'), String(context.query.userID))
    const userSnap = await getDoc(userRef)

    return {
        props: {
            username: userSnap.data().username,
            userPic: userSnap.data().userPic,
        }
    }
}

const Top = styled.div`
    display: flex;
    margin-left: 15px;
`

const Bottom = styled.div`

`