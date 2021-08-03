import './TodoPage.css'
import React from 'react';
import TaskComponent from '../../components/TaskComponent/TaskComponent';
import { useState } from 'react';
import TaskModel from '../../model/TaskModel';
import { Col, Container, Row } from 'react-bootstrap';

function TodoPage() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filterType, setFilterType] = useState("All");
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

    function removeTask(idNum) {
        let tempTasks = [...tasks];
        tempTasks.splice(idNum, 1);
        setTasks(tempTasks);
    }



    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            console.log('do validate');
            addToList();
        }
    }
    function displayAllTask() {
        return tasksList;
    }

    function displayCompletTaska() {
        const completed = tasks.filter(t => t.done);
        return completed.map((tsk, index) => (
            <TaskComponent tasks={completed} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
        )
    }
    function displayActiveTasks() {
        const incompleted = tasks.filter(t => t.done === false);
        return incompleted.map((tsk, index) => (
            <TaskComponent tasks={incompleted} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
        )
    }

    const incompleteTasks = tasks.filter(t => t.done === false).length;

    function filterTask() {
        if (filterType === "All") {
            return tasks.map((tsk, index) => (
                <TaskComponent tasks={tasks} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            )
        } else if (filterType === "Active") {
            const active = tasks.filter(t => t.done === false);
            return active.map((tsk, index) => (
                <TaskComponent tasks={active} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            )
        } else {
            const doneTasks = tasks.filter(t => t.done);
            return doneTasks.map((tsk, index) => (
                <TaskComponent tasks={doneTasks} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            )
        }

    }
    const tasksList = filterTask();

    // const tasksList = tasks.map((tsk, index) => (
    // <TaskComponent tasks={tasks} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
    // )
    console.log(filterType);
    return (
        <div className="c-todopage">
            <Container >
                <h1>Todo List</h1>
                <Row >

                    <input className="input-task" type="text" value={taskText} placeholder="Enter new Task" onChange={e => setTaskText(e.target.value)} onKeyDown={handleKeyDown} />
                    {/* <input type="text" value={taskText} placeholder="Enter new Task" onChange={e => setTaskText(e.target.value)} /> */}
                    <Col>
                        <div className={filterType === "All" ? "m-press" : "" + " my-btn "} onClick={() => setFilterType("All")}>All</div>

                    </Col>
                    <Col>
                        <div className={filterType === "Active" ? "m-press" : "" + " my-btn "} onClick={() => setFilterType("Active")}>Active</div>
                    </Col>
                    <Col>
                        <div className={filterType === "Completed" ? "m-press" : ""  + " my-btn "} onClick={() => setFilterType("Completed")}>Completed</div>
                    </Col>
                    {/* <button onClick={addToList}>New Task</button> */}
                    {incompleteTasks > 0 ? <p className="coun-tasks">{incompleteTasks} items left</p> : <p className="coun-tasks">No tasks to do</p>}
                </Row>

                {tasksList}

            </Container>

        </div>
    );
}

export default TodoPage;