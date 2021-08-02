import './TodoPage.css'
import React from 'react';
import TaskComponent from '../../components/TaskComponent/TaskComponent';
import { useState } from 'react';
import TaskModel from '../../model/TaskModel';
import { Container, Row } from 'react-bootstrap';

function TodoPage() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [taskCount,setTaskCount] =useState(0);
    function addToList() {
        const newTask = new TaskModel(taskText, false);
        if (taskText) {
           
            setTasks(tasks.concat(newTask));
            let count=0;
            tasks.forEach(tsk=>{
                if(!tsk.done){
                    count+=1;
                }
            })
            setTaskCount(count);
        }        
    }
    
   function taskDone(idNum){
       console.log(idNum);
       let tempTasks = [...tasks];
       tempTasks[idNum].done=! tempTasks[idNum].done;
       setTasks(tempTasks);
    
    }


    const tasksList = tasks.map((tsk, index) => (
        <TaskComponent tasks={tasks} task={tsk} idNum={index} onChecked = {taskDone} setTasks={setTasks} />)
    )
    return (
        <Container >
            <h1>Todo List</h1>
            <Row>
            <input type="text" value={taskText} placeholder="Enter new Task" onChange={e => setTaskText(e.target.value)} />
           
            <button onClick={addToList}>New Task</button>
            </Row>
            {tasksList}
            <p className="coun-tasks">{taskCount} items left</p>
        </Container>
    );
}

export default TodoPage;