import React, { useState } from "react";

const TimeManagement=()=>{
    const [taskName, setTaskname]=useState('')
    const [taskDuration, setTaskDuration]=useState('')
    const [tasks, setTasks] =useState([])

    const handleTaskbtn = () => {
        if (taskName && taskDuration) {
            const newTask = {
                id: Date.now(), 
                name: taskName,
                duration: parseInt(taskDuration),
                completed: false 
        };
            setTasks([...tasks, newTask]);
            setTaskname('');
            setTaskDuration('');
        }
    }
    const handelCompleteTask=(taskId)=>{
        setTasks(tasks.filter(task=> taskId !== task.id))
    }
    const handleDeleteTask=(taskId)=>{
        setTasks(tasks.map(task=> taskId !== task.id ? {...tasks, completed: true} : task))
    }
    const formatTime=(minute)=>{
        const hour = Math.floor(minute / 60)
        const mins = minute % 60;
        return `${hour}h ${mins}m`
    } 


    return(
        <>
            <div>
                <h2>Time Management</h2>
                <input 
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e)=> setTaskname(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="duration"
                    value={taskDuration}
                    onChange={(e)=> setTaskDuration(e.target.value)}
                />
                <button onClick={handleTaskbtn}>Add Task</button>
            </div>
            <div>
                <h2>Task Schedules</h2>
                {tasks.map((task)=>(
                    <li key={task.id}>
                        <span style={{textDecoration: task.completed ? "line-trought" : "none"}}>
                            {task.name}-{formatTime(task.duration)}
                        </span>
                        <button onClick={()=>handelCompleteTask(task.id)}>complete</button>
                        <button onClick={()=>handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </div>
        </>
    )
}
export default TimeManagement