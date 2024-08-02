import Link from 'next/link'
import React from 'react'
import { Todo } from './TodoList'
import homestyle from '../page.module.css'

export default function TodoItem(todo : Todo) {
    return (
    <form className={homestyle.container}>
        <label htmlFor="completed" className={homestyle.title}>
            <Link href={`/edit/${todo.id}`}>
            {todo.title}
            </Link>
        </label>
        <div className={homestyle.buttonContainer}>
            checkBox
            <button>X</button>
        </div>
    </form>
    )
}
