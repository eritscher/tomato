import React from 'react';
import Task from './Task/Task';
import './TaskList.css';

const taskList = (props) => {

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
           props.addTask(e.target.value);
            this.newTaskInput.value = '';
        }
    }

        const tasks = props.tasks.map(task => (
          <Task
            task={task}
            handleRemoveTask={props.handleRemoveTask}
          />
        ))

    return (
        <div className="task-list-container">
            <h2>What needs doing?</h2>
            <div className="input-container" onKeyUp={handleKeyUp}>
                <input type="text" className="input" ref={el => this.newTaskInput = el} disabled={props.disabled} />
            </div>

            {tasks}

        </div>
    );

};

export default taskList;