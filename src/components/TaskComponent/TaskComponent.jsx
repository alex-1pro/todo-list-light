import './TaskComponent.css';
import React from 'react';
import { useState } from 'react';

function TaskComponent({ tasks, task, idNum, onChecked, setTasks }) {


    // function changeDone(){
    //     console.log("in func changeDone()"+ idNum);
    //     onChecked(idNum);
    // }



    return (
        <div className="task-row">
            <input type="checkbox" id={"box-" + idNum} onChange={() => onChecked(idNum)} />
            <label for={"box-" + idNum} className={task.done ? "done" : ""}>{task.task}</label>

        </div>
    );
}

export default TaskComponent;