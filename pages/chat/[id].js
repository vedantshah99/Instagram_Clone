import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import { query, orderBy,getDoc, getDocs, addDoc, collection, doc} from '@firebase/firestore'
import {db} from '../../firebase'
import getRecipientUser from '../../utility/getRecipientUser'
import {useSession} from 'next-auth/react'
import Header from '../../components/Header' 

function Chat({chat, messages}) {
    const {data:session} = useSession()

  return (
    <Main>
        <Head>
            <title>
                Chat with {getRecipientUser(chat.users, session?.user?.username)}
            </title>
        </Head>
        <Header />
        <Container>
            <Sidebar />
            <ChatContainer>
                <ChatScreen chat = {chat} messages = {messages}/>
            </ChatContainer>
        </Container>
    </Main>
  )
}

export default Chat

export async function getServerSideProps(context){
    const ref = doc(collection(db, 'chats'),context.query.id)

    //Prep Messages on server
    const messagesRef = await
        getDocs(query(collection(ref,'messages')
        ,orderBy('timestamp', 'asc')))
    
    const messages = messagesRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })).map(messages => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
    }))

    //Prep chats
    const chatRes = await getDoc(ref)
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    }

    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat
        }
    }
}

const Main = styled.div`
//overflow: hidden;
`

const Container = styled.div`
display: flex;
`

const ChatContainer = styled.div`
overflow: hidden;
flex: 1;
height: 90vh;
z-index: 1;

/* ::webkit-scrollbar {
    display: none;
}
-ms-overflow-style: none;
scrollbar-width: none; */
`
