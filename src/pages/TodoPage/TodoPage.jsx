import './TodoPage.css'
import React from 'react';
import TaskComponent from '../../components/TaskComponent/TaskComponent';
import { useState } from 'react';
import TaskModel from '../../model/TaskModel';
import { Container, Row } from 'react-bootstrap';

function TodoPage() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [taskCount, setTaskCount] = useState(0);
    function addToList() {
        if (taskText) {
            const newTask = new TaskModel(taskText, false);
            setTasks(tasks.concat(newTask));
            setTaskText("");
            
        }
    }

    function taskDone(idNum) {
        console.log(idNum);
        let tempTasks = [...tasks];
        tempTasks[idNum].done = !tempTasks[idNum].done;
        setTasks(tempTasks);
    
    }
    // function  incompleteTasks(){
    //     const count = tasks.filter(t => t.done === false);
    //     setTaskCount(count.length);
    // }
    const incompleteTasks=tasks.filter(t => t.done === false).length;
        console.log(tasks.filter(t => t.done === false).length);
    const tasksList = tasks.map((tsk, index) => (
        <TaskComponent tasks={tasks} task={tsk} idNum={index} onChecked={taskDone} setTasks={setTasks} />)
    )
    return (
        <Container >
            <h1>Todo List</h1>
            <Row>
                <input type="text" value={taskText} placeholder="Enter new Task" onChange={e => setTaskText(e.target.value)} />

                <button onClick={addToList}>New Task</button>
            </Row>
            {tasksList}
            <p className="coun-tasks">{incompleteTasks} items left</p>
        </Container>
    );
}

export default TodoPage;