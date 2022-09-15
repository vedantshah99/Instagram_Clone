import styled from 'styled-components'
import {useSession} from 'next-auth/react'
import moment from 'moment'

function Message({user, message}) {
    const {data:session} = useSession()
    const TypeOfMessage = user === session.user.username ? Sender : Receiver



  return (
    <Container>
        <TypeOfMessage>
            {message.message}
            <TimeStamp>
                {message.timestamp ? moment(message.timestamp).format('LT') : '...'}
            </TimeStamp>
        </TypeOfMessage>
        
    </Container>
  )
}

export default Message

const Container = styled.div``

const MessageElement = styled.p`
word-break: break-all;
width: fit-content;
padding: 15px;
border-radius: 8px;
min-width: 60px;
margin: 10px;
padding-bottom: 26px;
position: relative;
text-align: right;
`
const Sender = styled(MessageElement)`
background-color: #dcf8c6;
margin-left:auto;
`

const Receiver = styled(MessageElement)`
background-color: whitesmoke;
text-align: left;
`

const TimeStamp = styled.div`
color: gray;
padding: 10px;
font-size: 9px;
position: absolute;
bottom: 0;
text-align: right;
right: 0;
`