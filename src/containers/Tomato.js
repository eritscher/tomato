import React, { Component } from 'react';
import Timer from '../components/Timer/Timer';
import Selection from '../components/Selection/Selection';
import TaskList from '../components/TaskList/TaskList';
import Explaination from '../components/Explaination/Explaination';
class Tomato extends Component {
    constructor(props) {
        super(props);
        this.selectionHandler = this.selectionHandler.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
        this.explainationToggle = this.explainationToggle.bind(this);
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.state = {
            playing: false,
            secondsRemaining: 0,
            totalSeconds: 0,
            notificationsAllowed: false,
            showExplaination: false,
            taskList: tasks
        }

    }

    componentWillMount() {

    }
    componentDidMount() {
        if ("Notification" in window) {
            const notificationLevel = Notification.permission;
            if (notificationLevel === 'granted' ) {
                this.setState({notificationsAllowed: true})
            } else if (notificationLevel === 'default') {
                Notification.requestPermission()
                    .then(res => {
                        if(res === 'granted') {
                            this.setState({ notificationsAllowed: true })
                        } else {
                            this.setState({ notificationsAllowed: false })
                        }
                    }).catch(err => console.log(err))
            }

        }
    }

    selectionHandler(selection) {
        let seconds = null;
        switch (selection) {
            case 'work':
                seconds = 1500
                break;
            case 'break':
                seconds = 300
                break;
            case 'longBreak':
                seconds = 5
                break;
            default:
                seconds = 1500
                break;
        }

        this.setState({ playing: true, secondsRemaining: seconds, totalSeconds: seconds })
        this.startTimer();
    }

    startTimer() {
        this.interval = setInterval(() => {
            if (this.state.secondsRemaining === 0) {
                clearInterval(this.interval);
                this.setState({ playing: false });
                if (this.state.notificationsAllowed) {
                    new Notification('🔔🔔🔔 Timer Done!!');

                } else {
                    alert('🔔🔔🔔 Timer Done!!')

                }


            } else {
                this.setState((prevState, props) => {
                    return {
                        secondsRemaining: prevState.secondsRemaining - 1
                    }
                })
            }
        }, 1000);
    }
    resetTimer() {
        clearInterval(this.interval);
        this.setState({ playing: false, secondsRemaining: 0 })
    }
    addTaskHandler(value) {
        const newTaskList = [...this.state.taskList];
        newTaskList.push({id: newTaskList.length, value});
        localStorage.setItem('tasks', JSON.stringify(newTaskList));
        this.setState({ taskList: newTaskList});

    }
    removeTaskHandler(id) {
        const filtered = this.state.taskList.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(filtered));
        this.setState({taskList: filtered})
    }
    explainationToggle() {
        this.setState((prevState, props) => {
            return {showExplaination: !prevState.showExplaination}
        })
    }
    render() {
        let timerOutput = <Selection
            selectionHandler={this.selectionHandler} />;

        if (this.state.playing) {
            timerOutput = <Timer
                secondsRemaining={this.state.secondsRemaining}
                totalSeconds={this.state.totalSeconds}
                reset={this.resetTimer}
            />

        }

        return (
            <div>
                {timerOutput}
                <TaskList
                    playing={this.state.playing}
                    tasks={this.state.taskList}
                    addTask={this.addTaskHandler}
                    handleRemoveTask={this.removeTaskHandler}
                ></TaskList>
                <Explaination
                    shouldShow={this.state.showExplaination}
                    explainationToggle={this.explainationToggle}
                ></Explaination>
                <a onClick={this.explainationToggle} className="what-is">What is Pomodoro?</a>
            </div>
        )
    }


};

export default Tomato