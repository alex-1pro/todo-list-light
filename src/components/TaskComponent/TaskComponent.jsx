import './TaskComponent.css';
import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
function TaskComponent({ tasks, task, idNum, onChecked, onRemove }) {


    

    // const trashlogo = <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        {/* <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" /> */}
    {/* </svg></> */}

    return (

       <div className="c-task-row">
   
            <div class=" task-col">
                <input type="checkbox" id={"box-" + idNum} onChange={() => onChecked(idNum)} />
            

                <label for={"box-" + idNum} className={task.done ? "done" : ""}>{task.task} </label>
            </div>
            <div class=" task-col">
                <span onClick={()=>onRemove(idNum)} className="cont-trash"><img src="https://img.icons8.com/material-rounded/24/000000/trash.png" alt="" /></span>
            </div>
           
    </div>

    );
}

export default TaskComponent;