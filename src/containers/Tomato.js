import React, { Component } from 'react';
import Timer from '../components/Timer/Timer';
import Selection from '../components/Selection/Selection';
class Tomato extends Component {
    constructor(props) {
        super(props);
        this.selectionHandler = this.selectionHandler.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this)
        this.state = {
            playing: false,
            secondsRemaining: 0,
            totalSeconds: 0
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
                alert('timer done')
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

    render() {
        let output = <Selection
            selectionHandler={this.selectionHandler} />;
        if (this.state.playing) {
            output = <Timer
                secondsRemaining={this.state.secondsRemaining}
                totalSeconds={this.state.totalSeconds}
                reset={this.resetTimer}
            />
        }

        return output
    }


};

export default Tomato