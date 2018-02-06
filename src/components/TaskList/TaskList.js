import React from 'react';
import Task from './Task/Task';
import './TaskList.css';

import PropTypes from 'prop-types';

const taskList = (props) => {

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            props.addTask(e.target.value);
            this.newTaskInput.value = '';
        }
    }

    const tasks = props.tasks.map(task => (
        <Task
            key={task.id}
            task={task}
            handleRemoveTask={props.handleRemoveTask}
        />
    ))

    return (
        <div className="task-list-container">
            {!props.playing ?
                <div>
                    <h2>Add New Tasks</h2>
                    <div className="input-container" onKeyUp={handleKeyUp}>
                        <input type="text" className="input" ref={el => this.newTaskInput = el} disabled={props.disabled} />
                    </div>
                </div>
                : null}
            {tasks}

        </div>
    );

};

export default taskList;

taskList.propTypes = {
    addTask: PropTypes.func,
    tasks: PropTypes.array,
    playing: PropTypes.bool,
    disabled: PropTypes.bool

};