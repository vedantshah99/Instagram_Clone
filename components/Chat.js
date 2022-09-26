import React from 'react'
import styled from 'styled-components'
import { Avatar} from '@mui/material'
import getRecipientUser from '../utility/getRecipientUser'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import { useState , useEffect} from 'react'
import {db} from '../firebase'
import Image from 'next/image'
import { query, orderBy, where,snapshot, onSnapshot, collection} from '@firebase/firestore'

function Chat({id, users}) {
    const {data:session} = useSession()
    const router = useRouter()
    const recipientUser = getRecipientUser(users, session.user.username)
    const [recipientSnapshot, setRecipientSnapshot] = useState([])

    useEffect(() => onSnapshot(query(collection(db,'users'),where('username', '==',getRecipientUser(users, session.user.username))), snapshot => {
      setRecipientSnapshot(snapshot)
    }), [db]
    )

    const recipient = recipientSnapshot?.docs?.[0]?.data()

    const enterChat = () => { 
        router.push('/chat/'+id)
    }

  return (
    <Container onClick={enterChat}>
        {recipient ? (
          <UserAvatar src={recipient?.userPic}/>
        ) : (
          <UserAvatar />
        )}
        {recipient?.blueCheck ? (
          <div className='flex'>
              <p>{recipientUser}</p>

              <Image src = '/res/blueCheck.png'
                  alt='balls'
                  width='30%'
                  height='30%'
              />
          </div>
          ):(
            <p>{recipientUser}</p>
        )}
    </Container>
  )
}
export default Chat

const Container = styled.div`
display: felx;
align-items: center;
cursor: pointer;
padding: 15px;
word-break: break-word;
`

const UserAvatar = styled(Avatar)`
margin:5px;
margin-right: 15px;
`