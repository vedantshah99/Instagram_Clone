import React, { useEffect, useState } from 'react'
import {faker} from '@faker-js/faker'
import Story from "./Story"
import { signIn,signOut,useSession } from 'next-auth/react'

function Stories() {
    const {data:session} = useSession()

    const [suggestions, setSuggestions] = useState([])
    useEffect(() =>{
        const suggestions = [...Array(20)].map((_,i) =>({
            name:faker.name.fullName(),
            avatar:faker.internet.avatar(),
            username:faker.internet.userName(),
            id: i,
        }))

        setSuggestions(suggestions)
    }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-md overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
        {session && (
            <Story img={session.user.image} username={session.user.username}/>
        )}
        {suggestions.map((profile) => (
            <Story 
                key ={profile.id}
                img={profile.avatar}
                username={profile.username} 
            />
        ))}
    </div>
  )
}
export default Stories