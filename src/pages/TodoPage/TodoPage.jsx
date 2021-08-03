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

    function removeTask(idNum){
        let tempTasks = [...tasks];
        tempTasks.splice(idNum,1);
        setTasks(tempTasks);
    }


    // function  incompleteTasks(){
    //     const count = tasks.filter(t => t.done === false);
    //     setTaskCount(count.length);
    // }
    const incompleteTasks = tasks.filter(t => t.done === false).length;

    const tasksList = tasks.map((tsk, index) => (
        <TaskComponent tasks={tasks} task={tsk} idNum={index} onChecked={taskDone}  onRemove={removeTask}/>)
    )
   
    return (
        <div className="c-todopage">
            <Container >
                <h1>Todo List</h1>
                <Row>
                    <input type="text" value={taskText} placeholder="Enter new Task" onChange={e => setTaskText(e.target.value)} />

                    <button onClick={addToList}>New Task</button>
                </Row>
                {/* <ul className="ul-todolist"> */}
                    {tasksList}
                {/* </ul> */}
                <p className="coun-tasks">{incompleteTasks} items left</p>
            </Container>
        </div>
    );
}

export default TodoPage;