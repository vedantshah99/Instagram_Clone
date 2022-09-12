import React, { useEffect, useState } from 'react'
import { Avatar, IconButton, Button} from '@mui/material'
import styled from 'styled-components'
import { MoreVert as MoreVertIcon } from '@mui/icons-material'
import { Chat as ChatIcon, Search as SearchIcon } from '@mui/icons-material'
import { addDoc, collection,onSnapshot, serverTimestamp, query, setDoc, doc, deleteDoc, useCollection, where} from '@firebase/firestore'
import * as EmailValidator from 'email-validator'
import {useSession} from 'next-auth/react'
import {db} from '../firebase'
import Chat from './Chat'

function Sidebar({recipient}) {
  const {data:session} = useSession()
  const [userChats, setUserChats] = useState([])
  
  useEffect(() => onSnapshot(query(collection(db, 'chats'), where('users', 'array-contains', session?.user?.username)), snapshot=>{
        setUserChats(snapshot.docs)
      })
  ,[db])

  const createChat = async() =>{
    const bool = chatAlreadyExists(recipient)
    if (!bool) {
      const q = query(collection(db, 'chats'))
      await addDoc(collection(db, 'chats'), {
        users:[session.user.username, recipient]
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
    <Container>
      <Header>
        <UserAvatar />

        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <MoreVertIcon  />
        </IconContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder='Seach in Chats'/>
      </Search>

      <SidebarButton onClick={createChat}>
        Start new chat
      </SidebarButton>

      {/*List of chats*/}
      {userChats?.map((chat) =>(
        <Chat key={chat.id} id = {chat.id} users={chat.data().users} />
      ))}

    </Container>
  ) 
}

export default Sidebar

const Container = styled.div`
flex: 0.45;
border-right: 1 px solid whitesmoke;
height: 100vh;
min-width: 300px;
max-width: 350px;
overflow-y: scroll;
`

const Search = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 2px;
`

const SidebarButton = styled(Button)`
width: 100%;
&&&{
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
}
`

const SearchInput = styled.input`
outline-width: 0;
border: none;
flex:1;
`

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color:white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`

const IconContainer = styled.div``