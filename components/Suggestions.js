import {React, useEffect, useState} from 'react'
import {faker} from '@faker-js/faker'

function Suggestions() {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(5)].map((_,i)=> (
            {
                name:faker.name.fullName(),
                avatar:faker.internet.avatar(),
                username:faker.internet.userName(),
                id: i,
            }
        ))

        setSuggestions(suggestions)
    },[])
  return (
    <div className='ml-10 mt-10'>
        {/*Suggestions for you*/}
        <div className='flex justify-between text-sm mb-5'>
            <h3 className='text-sm font-bold
            text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600 font-bold'>See All</button>
        </div>

        {/*List of Suggestions*/}
        {
            suggestions.map(profile => (
                <div key={profile.id} className='flex items-center justify-between mt-3'>
                    <img className = 'h-10 w-10 rounded-full border p-[2px]' src={profile.avatar} alt=''/>
                    <div className='ml-4 flex-1'>
                        <h1 className='text-sm font-bold'>{profile.username}</h1>
                        <h2 className='text-xs text-gray-400'>0 Mutuals</h2>
                    </div>
                
                    <h2 className='text-sm font-bold text-blue-400'>Follow</h2>
                </div>
            ))
        }
    </div>
  )
}

export default Suggestions