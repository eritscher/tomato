import React from 'react';
import './Task.css'
const task = (props) => (

    <div className="task" >
       <div className="task-text">
            {props.task.value}
        </div>
        <div className="task-delete" onClick={() => props.handleRemoveTask(props.task.id)}>&times;</div>
    </div>
)



export default task;