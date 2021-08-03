import './TodoPage.css'
import React from 'react';
import TaskComponent from '../../components/TaskComponent/TaskComponent';
import { useState } from 'react';
import TaskModel from '../../model/TaskModel';
import { Col, Container, Row } from 'react-bootstrap';
import ModalComponent from '../../components/ModalComponent/ModalComponent';

function TodoPage() {
    //all tasks
    const [tasks, setTasks] = useState([]);

    const [taskText, setTaskText] = useState("");
    const [filteredTasks, setFilteredTasks] = useState([]);

    const [filterType, setFilterType] = useState("All");

    //show modal if task not completed
    const [showModal, setShowModal] = useState(false);

    const [conIdNum, setConIdNum] = useState();

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
        if (tempTasks[idNum].done === false) {

            setShowModal(true);
            setConIdNum(idNum);
            console.log("in remove");
        }
        else {
            tempTasks.splice(idNum, 1);
            setTasks(tempTasks);
        }


    }




    //Add tasks by press in 'Enter' key
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            console.log('do validate');
            addToList();
        }
    }

    //show incomplete tasks
    const incompleteTasks = tasks.filter(t => t.done === false).length;


    //let filterType ="All"

    //function for filter tasks 
    function filterTask() {
        if (filterType === "All") {
            return tasks.map((tsk, index) => (
                <TaskComponent tasks={tasks} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            )
            // setFilteredTasks(
            // tasks.map((tsk, index) => (
            // <TaskComponent tasks={tasks} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            // )

            // );
        } else if (filterType === "Active") {
            const active = tasks.filter(t => t.done === false);
            return active.map((tsk, index) => (
                <TaskComponent tasks={active} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            )
            // setFilteredTasks(
            // active.map((tsk, index) => (
            // <TaskComponent tasks={active} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            // )
            // );
        } else {
            const doneTasks = tasks.filter(t => t.done);
            return doneTasks.map((tsk, index) => (
                <TaskComponent tasks={doneTasks} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            )
            // setFilteredTasks(
            // doneTasks.map((tsk, index) => (
            // <TaskComponent tasks={doneTasks} task={tsk} idNum={index} onChecked={taskDone} onRemove={removeTask} />)
            // )
            // )
        }

    }

    const tasksList = filterTask();




    //  console.log(filterType);
    return (
        <div className="c-todopage">
            <Container >
                <h1>Todo List</h1>
                <Row >

                    <input className="input-task" type="text" value={taskText} placeholder="Enter new Task" onChange={e => setTaskText(e.target.value)} onKeyDown={handleKeyDown} />

                    <Col>
                        <div className={filterType === "All" ? "m-press" : "" + " my-btn "} onClick={() => {
                            setFilterType("All");


                        }
                        }>All</div>

                    </Col>
                    <Col>
                        <div className={filterType === "Active" ? "m-press" : "" + " my-btn "} onClick={(filterType) => setFilterType("Active")}>Active</div>
                    </Col>
                    <Col>
                        <div className={filterType === "Completed" ? "m-press" : "" + " my-btn "} onClick={() => setFilterType("Completed")}>Completed</div>
                    </Col>

                    {incompleteTasks > 0 ? <p className="coun-tasks">{incompleteTasks} items left</p> : <p className="coun-tasks">No tasks to do</p>}
                </Row>
                {/* {filteredTasks} */}
                {tasksList}
                <ModalComponent show={showModal} onClose={() => setShowModal(false)}
                    onRemove={() => {
                        let tempTasks = [...tasks];
                        tempTasks.splice(conIdNum, 1);
                        setTasks(tempTasks);
                        setShowModal(false);
                    }} />
            </Container>

        </div>
    );
}

export default TodoPage;