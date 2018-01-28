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
            secondsRemaining: 0
        }
    }
    selectionHandler(selection) {
        let secondsRemaining = null;
        switch (selection) {
            case 'work':
                secondsRemaining = 1500
                break;
            case 'break':
                secondsRemaining = 300
                break;
            case 'longBreak':
                secondsRemaining = 5
                break;
            default:
                secondsRemaining = 1500
                break;
        }

        this.setState({ playing: true, secondsRemaining: secondsRemaining })
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
                reset={this.resetTimer}
            />
        }

        return output
    }


};

export default Tomato