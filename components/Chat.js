import React from 'react'
import styled from 'styled-components'
import { Avatar} from '@mui/material'
import getRecipientUser from '../utility/getRecipientUser'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'

function Chat({id, users}) {
    const {data:session} = useSession()
    const router = useRouter()
    const recipientUser = getRecipientUser(users, session.user.username)
    const enterChat = () => {
        router.push('/chat/'+id)
    }

  return (
    <Container onClick={enterChat}>
        <UserAvatar />
        <p>{recipientUser}</p>
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