import React from 'react';
import Task from './Task/Task';
import './TaskList.css';

import PropTypes from 'prop-types';

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.newTaskInput = React.createRef();
    }
    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.props.addTask(e.target.value);

            this.newTaskInput.current.focus()

            this.newTaskInput.current.value = '';
        }
    }

    createTasks = () => this.props.tasks.map(task => (
        <Task
            key={task.id}
            task={task}
            handleRemoveTask={this.props.handleRemoveTask}
        />
    ));
    render() {
        return (
            <div className="task-list-container">
                {!this.props.playing ?
                    <div>
                        <h2>Add New Tasks</h2>
                        <div className="input-container" onKeyUp={this.handleKeyUp}>
                            <input type="text" className="input" ref={this.newTaskInput} disabled={this.props.disabled} />
                        </div>
                    </div>
                    : null}
                {this.createTasks()}

            </div>
        );
    }

};

export default TaskList;

TaskList.propTypes = {
    addTask: PropTypes.func,
    tasks: PropTypes.array,
    playing: PropTypes.bool,
    disabled: PropTypes.bool

};
