import React from 'react'
import { Todos } from '../Models/todos'
import SingleTask from './SingleTask'

interface Props {
    todo:Todos[],
    setTodo:React.Dispatch<React.SetStateAction<Todos[]>>
}

const ToDos:React.FC <Props > = ({todo , setTodo}) => {
  return (
  
    <div className='w-full grid justify-items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[20rem] overflow-y-auto' >
        {todo.map((data , index)=> <SingleTask key={index} data={data} todo={todo} setTodo={setTodo} /> )}
    </div>

  )
}

export default ToDos