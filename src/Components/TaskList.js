import React, { useState, useContext } from 'react';
import {TasksLibraryContext} from "../Helpers/Context"
import {LoginContext} from "../Helpers/Context"
import Task from "./Task.js"

function TaskList() {
    const {tasks, setTasks} = useContext(TasksLibraryContext)
    const {userName} = useContext(LoginContext)

    const [tasksVisible, setTasksVisible] = useState(true);

    const renderTasks = (tasks) => {
        const userTasks = tasks.get(userName);
        if (userTasks) {
            return userTasks.map((task) => {
                return (<Task id={task.id} title={task.title} description={task.description} />);
            })
        } else {
            return "No Tasks Found!"
        }
    }
    

    const toggleTasksVisible = () => { 
        setTasksVisible((prev) => !prev);
      }

    return ( 
        <>
            <p>
                <button onClick={toggleTasksVisible}>{tasksVisible ? "Show Tasks" : "Hide Tasks"}</button>
            </p>
            <p>{tasksVisible && renderTasks(tasks)}</p>
        </>
     );
}

export default TaskList;