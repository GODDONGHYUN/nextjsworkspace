'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const router = useRouter();
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await fetch ('http://127.0.0.1:8090/api/collections/posts/records/' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                title
            })
        }) 
        setTitle('');
        router.refresh();
    }
        return (
        <form onSubmit ={handleSubmit}>
            <input 
            type="text" 
            placeholder='title'
            value = {title}
            onChange ={(event) => setTitle(event.target.value)}
            />
            <button type= "submit">
                Create Post
            </button>
        </form>
    )
}
