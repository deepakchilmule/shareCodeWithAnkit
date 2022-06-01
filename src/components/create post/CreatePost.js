import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreatePost() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {

        async function getPosts() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            console.log(response.data)
            setPosts(response.data)
        }

        getPosts()

    }, [])

    async function createPostHandler() {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
        })
        console.log(res)
        const allPosts = [...posts, res.data]
        setPosts(allPosts);
        alert('post created!!')

    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <>
                <label>Title : </label>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }}></input>
                <br></br>
                <br></br>
                <label>Body : </label>
                <input onChange={(e) => {
                    setBody(e.target.value)
                }}></input>
                <button onClick={createPostHandler}>
                    Create Post
                </button>

            </>
            <button onClick={() => {
                navigate('/posts', { state: posts })
            }}>
                Go back
            </button>
        </div>
    )
}

export default CreatePost