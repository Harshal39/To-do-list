"use client"
import React, {useState} from 'react'

const page = () => {
  const [Title,setTitle] = useState("")
  const [Description,setDescription] = useState("")
  const [Time,setTime] = useState("")
  const [MainTask,setMainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    setMainTask([...MainTask, { Title,Description,Time }])
    setTitle("")
    setDescription("")
    setTime("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>
  
  if(MainTask.length > 0){
    renderTask = MainTask.map((t,i)=>{
      return (
      <li key={i} className="flex items-center justify-between mb-5" >
        <div className="flex items-center justify-between mb-5 w-2/3">
         <h4 className="text-2xl font-semibold">{t.Title}</h4>
         <h5 className="text-lg font-medium">{t.Description}</h5>
         <h5 className="text-lg font-medium">{t.Time}</h5>
        </div>
        <button 
        onClick={()=> {
          deleteHandler(i)
        }}
        className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
      </li>
      )
    })
  }
  
  return (
    <>
    <h1 className="bg-green-400 text-white p-5 text-5xl font-bold text-center">Today's Schedule</h1>
    <form onSubmit={submitHandler} className='bg-blue-800'>
      <input type="text" className="text-2xl border-zinc-500 border-4 m-5 px-4 py-2" placeholder="Enter Task Here" value={Title} 
        onChange={(e)=>{
        setTitle(e.target.value)
      }}
      />
      <input type="text" className="text-2xl border-zinc-500 border-4 m-5 px-4 py-2" placeholder="Enter Description Here" value={Description}
      onChange={(e) =>{
        setDescription(e.target.value)
      }}/>
       <input type="time" className="text-2xl border-zinc-500 border-4 m-5 px-4 py-2" placeholder="Enter Time Here" value={Time}
      onChange={(e) =>{
        setTime(e.target.value)
      }}/>

      <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">Add Task</button>
    </form>
    <hr />
    <div className="p-8 bg-blue-200">
      <ul>
        {renderTask}
        </ul>
    </div>
    </>
  )
}

export default page
