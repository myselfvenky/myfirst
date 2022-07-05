import React from 'react'
import Card from '../Components/Card'
import './home.css'
const Home = () => {
    const posts = [
        {
            username: "venkystroke",
            caption: "This is a caption",
            title: "Hello I am a software developer",
        },
        {
            username: "vinxx",
            caption: "This is a caption",
            title: "Hello I am a Frontend developer",

        }
    ]

    return (
        <div className='home'>
            {posts.map((item) => {
                return (<Card
                    username={item.username}
                    caption={item.caption}
                    title={item.title}
                />)
            })}
        </div>
    )
}

export default Home