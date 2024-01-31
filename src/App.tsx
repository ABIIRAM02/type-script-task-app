import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todos } from './Models/todos';
import ToDos from './components/ToDos';

const App:React.FC = () => {

  const [task , setTask] = useState<string>('')
  const [todo ,setTodo] = useState<Todos[]>([])

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()

    if(task)
      setTodo([...todo ,{ id:Date.now() , task , isDone:false}])

    setTask('')
  } 

  return (
    <div className='bg-myBlue w-full h-screen overflow-y-auto pb-[1rem] md:pb-0 md:overflow-hidden flex flex-col items-center' >
        <h2 className='text-7xl tracking-wide text-blue-600 font-head'>Taskify</h2>
      <section className='font-body w-full' >
        <InputField task={task} setTask={setTask} handleSubmit={handleSubmit}/>
        <ToDos todo={todo} setTodo={setTodo} />
      </section>
    </div>
  );
}

export default App;
