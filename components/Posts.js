import React from 'react'
import Post from './Post'

const POSTS = [
    {
        id:123,
        username:'v3dant_shah',
        userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw',
        img:'https://decider.com/wp-content/uploads/2022/06/minions-the-rise-of-gru-streaming.jpg?quality=75&strip=all&w=1200',
        caption:'i count money',
    },
    {
        id:124,
        username:'v3dant_shah',
        userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw',
        img:'https://preview.redd.it/mcuex69h07s81.png?width=640&crop=smart&auto=webp&s=9228afd8ddf969fe4962cf8cc2bdae79738e1389',
        caption:'straight bussin fr fr',
    },
    {
        id:125,
        username:'kanye_fan848537945',
        userImage: 'https://i.kym-cdn.com/entries/icons/facebook/000/040/009/3dsaulcover.jpg',
        img:'https://preview.redd.it/g8qohwjos2b81.jpg?width=640&crop=smart&auto=webp&s=9c9e199ae5efafca6a620d4fffc6b4568e31480a',
        caption:'ye',
    },
    {
        id:124,
        username:'v3dant_shah',
        userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw',
        img:'https://i.redd.it/uqw3d42iuyj71.png',
        caption:'straight bussin fr fr',
    },
    {
        id:123,
        username:'v3dant_shah',
        userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFrkI6Ht9ifoQ/profile-displayphoto-shrink_200_200/0/1661814333142?e=1667433600&v=beta&t=4zCREXf9XS96CU3MzkwpNRz_0pOrMIZsCEucMGEGOHw',
        img:'https://i.redd.it/me9j6by7n2x41.jpg',
        caption:'B E A N',
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