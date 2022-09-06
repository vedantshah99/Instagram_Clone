import React, { useEffect, useState } from 'react'
import {collection, onSnapshot, orderBy, query} from '@firebase/firestore'
import { db } from '../firebase'
import Post from './Post'
import { Snapshot } from 'recoil'

const POSTS = [
    {
        id:123,
        username:'v3dant_shah',
        userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw',
        img:'https://decider.com/wp-content/uploads/2022/06/minions-the-rise-of-gru-streaming.jpg?quality=75&strip=all&w=1200',
        caption:'i count money',
    },
]

function Posts() {
    const [POSTS, setPosts] = useState([])

    useEffect(() => onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot=>{
            setPosts(snapshot.docs)
        })
    ,[db])
    
  return (
    <div>
        {POSTS.map((post) => (
            <Post 
            key ={post.id}
            id = {post.id}
            username = {post.data().username}
            userImg = {post.data().profileImg}
            img = {post.data().image}
            caption = {post.data().caption}
            />
        ))}
    </div>
  )
}

export default Posts