import React, { useRef } from 'react'

interface Props {
    task:string,
    setTask:React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e:React.FormEvent) => void
}

const InputField:React.FC<Props> = ({task , setTask , handleSubmit}) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='form' onSubmit={(e)=>{
        handleSubmit(e)
        inputRef.current?.blur()
    }} >
        <input 
        ref={inputRef}
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        className='input'
        placeholder='Type a task ...'
        required
        type="input" />
        <button type='submit' className='input-btn' >Create</button>
    </form>
  )
}

export default InputField