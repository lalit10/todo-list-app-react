import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDos = (props) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3' > To do list</h3>
        {props.todos.length === 0 ? "No todos to display" : props.todos.map((todo) => {
            return <ToDoItem todo = {todo} key = {todo.s_no}onDelete = {props.onDelete}/>
        })  }
        
               
    </div>
  )
}
