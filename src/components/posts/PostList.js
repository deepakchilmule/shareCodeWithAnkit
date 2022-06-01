import React from 'react'
import axios from 'axios'
import './posts.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostData from './PostData'
import { useLocation } from 'react-router-dom'

function PostList() {

    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])
    const [content, setContent] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const [status, setStatus] = useState('posts')
    const [newData, setNewData] = useState(null)
    //  console.log(posts)
    // console.log(comments)
    // console.log(users)

    console.log(content)
    console.log(location.state)
   
    useEffect(() => {

        async function getData() {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const finalPosts = await posts.data
            const comments = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=30')
            const users = await axios.get('https://jsonplaceholder.typicode.com/users')

            setPosts(posts.data)
            setComments(comments.data)
            setUsers(users.data)
            // setContent(finalPosts)
            location.state ? setContent(location.state.reverse()) : setContent(finalPosts)

        }
        getData()

    }, [])


    const headlines = ['Posts', 'Comments', 'Users']

    function underline() {
        const className = status == 'posts' ? 'posts' : status == 'comments' ? 'comments' : 'users'
        return className
    }

    return (
        <div className='container-div-post'>

            <div className='first'>
                <ul>
                    <li>jsonplaceholder</li>
                    <li onClick={() => {
                        navigate('/')
                    }}style={{cursor:'pointer' }} > Home </li>
                    <li onClick={()=>{
                         navigate('/makepost')
                    }} style={{cursor:'pointer' }}> Make a post </li>
                </ul>
            </div>

            <div className='second'>

                <div className='headlines'>
                    {
                        headlines.map((d) => (
                            <p style={{ cursor: 'pointer', }} className={status == d.toLocaleLowerCase() ? 'underline' : null} onClick={() => {
                                const name = d.toLowerCase();
                                setStatus(d.toLocaleLowerCase())
                                const finalContent = name == 'posts' ? posts : name == 'comments' ? comments : users
                                console.log(finalContent)
                                setContent(finalContent)
                            }} > {d} </p>
                        ))
                    }
                </div>


                <div>
                    <PostData data={content} />
                </div>


            </div>

        </div>
    )
}

export default PostList

