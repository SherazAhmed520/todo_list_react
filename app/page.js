"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title,desc}])  // spread operator take pchle task remove na ho show hu wo b.
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);

  }


  let renderTask = <h2 className='text-center'>No Task Available</h2>;   //jo task hm render krwane wle han.
  
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{  //t apka title ya task k lie ha or i apk index ha
      return <li className='flex items-center justify-center mb-8'>
      <div className='flex item-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
             <button onClick={()=>{deleteHandler(i)}}
             className='bg-red-400 text-white px-3 py-2 font-bold rounded'>Delete</button>
      </div>
  
      </li>
      
    })
  }

 
  return (
    <>
      <h1 className='bg-lime-400 text-5xl font-bold text-slate-100 text-center'>Sheraz Todo List</h1>
      
      <form onSubmit={submitHandler} className='flex items-center justify-center'>
        <input type="text" 
        className='border-zinc-800 text-2xl border-4 m-5 px-4 py-2' 
        placeholder='Enter Title here'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value); 
        }}/>

        <input type="text" 
        className='border-zinc-800 text-2xl border-4 m-5 px-4 py-2' 
        placeholder='Enter Description here'
        value={desc}
        onChange={(e) =>{setDesc(e.target.value)}} />

        <button className='bg-black text-white m-8 px-4 py-3 text-2xl rounded font-bold'>Add Task</button>
        
      </form>
        <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page

