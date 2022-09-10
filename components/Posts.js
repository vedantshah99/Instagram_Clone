import React, { useEffect, useState } from 'react'
import {collection, onSnapshot, orderBy, query} from '@firebase/firestore'
import { db } from '../firebase'
import Post from './Post'
import { Snapshot } from 'recoil'

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