import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';

const task = (props) => (

    <div className="task" >
       <div className="task-text">
            {props.task.value}
        </div>
        <div className="task-delete" onClick={() => props.handleRemoveTask(props.task.id)}>&times;</div>
    </div>
)



export default task;

task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
    })
}