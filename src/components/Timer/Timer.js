import React from 'react';
import './Timer.css';
import Button from "../UI/Button/Button";
const timer = (props) => {
    const getSeconds = () => {
        return ('0' + props.secondsRemaining % 60).slice(-2)
    }
    const getMinutes = () => {
        return Math.floor(props.secondsRemaining / 60);
    }
    let formattedTime =
        <div className='timer blink'>
            {`${getMinutes()}`}
            <div className="tomato-container">
            <span className="tomato">🍅</span>
            <span className="tomato">🍅</span>
            </div>
            {`${getSeconds()}`}
        </div>;

    return (
        <div>
            {formattedTime}
            <Button onClick={props.reset}>Reset</Button>

        </div>
    );
}

export default timer;