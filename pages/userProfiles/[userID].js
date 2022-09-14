import React from 'react'
import Header from '../../components/Header'
import { useRouter} from 'next/router'
import { query, orderBy,getDoc, getDocs,onSnapshot, addDoc, collection, doc} from '@firebase/firestore'
import {db} from '../../firebase'
import {useSession} from 'next-auth/react'
import { useState , useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

function profile({username, userPic}) {
    const router = useRouter()
    const id = router.query.userID
    //const [userSnap, setUserSnap] = useState([])
    console.log(username)

  return (
    <div>
        <Header />
        <p>{router.query.userID}</p>
        <p>{username}</p>
        {/* <p>{userSnap.docs}</p> */}

        <Top>
            <img src={userPic}/>

        </Top>

        <Bottom>
        
        </Bottom>
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
`

const Bottom = styled.div`
`