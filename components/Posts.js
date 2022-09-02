import React from 'react'
import Post from './Post'

const POSTS = [
    {
        id:123,
        username:'v3dant_shah',
        userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw',
        img:'https://preview.redd.it/mcuex69h07s81.png?width=640&crop=smart&auto=webp&s=9228afd8ddf969fe4962cf8cc2bdae79738e1389',
        caption:'straight bussin fr fr',
    },
    {
        id:123,
        username:'v3dant_shah',
        userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw',
        img:'https://preview.redd.it/mcuex69h07s81.png?width=640&crop=smart&auto=webp&s=9228afd8ddf969fe4962cf8cc2bdae79738e1389',
        caption:'straight bussin fr fr',
    },
]

function Posts() {
  return (
    <div>
        {POSTS.map((post) => (
            <Post key ={post.id}
            id = {post.id}
            username = {post.username}
            userImg = {post.userImage}
            img = {post.img}
            caption = {post.caption}
            />
        ))}
    </div>
  )
}

export default Posts