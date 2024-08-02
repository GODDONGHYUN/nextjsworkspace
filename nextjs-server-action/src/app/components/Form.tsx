import React from 'react'
import homeStyle from '../page.module.css'
import { addTodo } from '@/lib/actions'

export default function Form() {
  return (
    <form action ={addTodo} className={homeStyle.submitForm}>
        <input type="text"
        name= "title"
        className={homeStyle.submitInput}
        placeholder='새로운 할 일을 생성하세요.'/>
        <button type = 'submit'>Submit</button>
    </form>
  )
}
