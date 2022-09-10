import styled from 'styled-components'
import { useState , useEffect} from 'react'
import {useSession} from 'next-auth/react'
import { useRouter} from 'next/router'
import { Avatar } from '@mui/material'
import {AttachFile, MoreVert as MoreVertIcon, InsertEmoticon, MicOutlined} from '@mui/icons-material'
import { query, orderBy, where,snapshot, onSnapshot, getDocs, setDoc, addDoc, useCollection, collection, doc, serverTimestamp} from '@firebase/firestore'
import {set, ref} from '@firebase/database'
import {db} from '../firebase'
import Message from './Message'
import getRecipientUser from '../utility/getRecipientUser'
import Moment from 'react-moment'

function ChatScreen({chat, messages}) {
  const {data:session} = useSession()
  const [input, setInput] = useState('')
  const router = useRouter()
  const [messagesSnapshot, setMessagesSnapshot] = useState([])
  const [recipientSnapshot, setRecipientSnapshot] = useState([])

  useEffect(() => onSnapshot(query(collection(db, 'chats', router.query.id, 'messages'),
    orderBy('timestamp', 'asc')), snapshot =>{
    setMessagesSnapshot(snapshot)
  }), [router.query.id]
  )

  useEffect(() => onSnapshot(query(collection(db,'users'),where('username', '==',getRecipientUser(chat.users, session.user.username))), snapshot => {
    setRecipientSnapshot(snapshot)
  }), [db]
  )

  // const messagesSnapshot = onSnapshot(query(
  //     collection(db, "chats", router.query.id, 'messages'),
  //     orderBy('timestamp', 'asc')
  //   ))
  

  console.log(router.query.id)
  console.log(messagesSnapshot.docs)

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot?.docs?.map((message) => (
        <Message
        key={message.id}
        user={message.data().user}
        message={{
          ...message.data(),
          timestamp: message.data().timestamp?.toDate().getTime(),
        }}
        />
      ))
    } else{
      return JSON.parse(messages).map(message => (
        <Message key ={message.id} user={message.user} message={message} />
      ))
    }
  }

  const sendMessage = (e) => {
    e.preventDefault()
    setDoc(doc(db, 'users',session.user.uid),{
      username: session.user.username,
      lastSeen: serverTimestamp(),
    },
    {merge: true}
    )

    addDoc(collection(db, 'chats', router.query.id, 'messages'),{
      timestamp: serverTimestamp(),
      message: input,
      user: session.user.username,
      photo: session.user.image,
    })

    setInput('')

  }

  const recipient = recipientSnapshot?.docs?.[0]?.data()
  const recipientUser = getRecipientUser(chat.users,session?.user.username)
  
  return (
    <Container>
        <Header>
          <Avatar />

          <HeaderInformation>
            <h3>{recipientUser}</h3>
            {recipientSnapshot ? (
              <p>Last Active: {' '}
              {recipient?.lastSeen.toDate() ? (
                <Moment fromNow>
                  datetime={recipient?.lastSeen?.toDate()}
                </Moment>
              ): 'Unavailable'}
              </p>
            ): (
              <p>Loading Last Active...</p>
            )}
          </HeaderInformation>
          <HeaderIcons>
            <IconButton>
              <AttachFile/>
            </IconButton>

            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </HeaderIcons>
        </Header>

        <MessageContainer>
          {showMessages()}
          <EndOfMessage/>
        </MessageContainer>

        <InputContainer>
          <InsertEmoticon/>
          <Input value ={input} onChange = {(e) => setInput(e.target.value)} />
          <button hidden disabled = {!input} type='submit' onClick={sendMessage}>Send Message</button>
          <MicOutlined/>
        </InputContainer>
    </Container>
  )
}

export default ChatScreen

const Container = styled.div`
`

const Input = styled.input`
flex: 1;
outline: 0;
border: none;
border-radius:10px;
padding: 20px;
position: sticky;
margin-left: 15px;
margin-right: 15px;
background-color: whitesmoke;
`

const InputContainer = styled.form`
display: flex;
align-items: center;
padding: 10px;
position: sticky;
bottom: 0;
background-color: white;
z-index: 100
`

const Header = styled.div`
position: sticky;
background-color: white;
z-index: 100;
top:0;
display: flex;
padding: 11px;
`

const HeaderInformation = styled.div`
margin-left: 15px;
flex:1;

> h3{
  margin-bottom: 3px;
}
> p {
  font-size: 14px;
  color: gray;
}
`
const IconButton = styled.div``

const HeaderIcons = styled.div`
display: flex
`

const MessageContainer = styled.div`
padding: 30px;
background-color: #e5ded8;
min-height: 90vh;
`

const EndOfMessage = styled.div``