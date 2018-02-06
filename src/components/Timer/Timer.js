import React from 'react';
import './Timer.css';
import Button from "../UI/Button/Button";
import PropTypes from 'prop-types';

const timer = (props) => {

    const  { secondsRemaining, totalSeconds, reset } = props
    const fillPercentage = ((totalSeconds - secondsRemaining) / totalSeconds) * 100 + '%';

    const getSeconds = () => {
        return ('0' + secondsRemaining % 60).slice(-2)
    }
    const getMinutes = () => {
        return Math.floor(secondsRemaining / 60);
    }
    const seconds = getSeconds();
    const minutes = getMinutes();

    let titleText = `${minutes}:${seconds}`;
    if(titleText === '0:00') {
        titleText = '🔔🔔🔔 Timer Done'
    }
    document.title = titleText;

    let formattedTime =
        <div className='timer'>
            {`${getMinutes()}`}
            <div className="tomato-container">
            <span className="tomato" role="img" aria-label="clock-colon">🍅</span>
            <span className="tomato" role="img" aria-label="clock-colon">🍅</span>
            </div>
            {`${getSeconds()}`}
        </div>;

    return (
        <div className="timer-container">
            <div className="progress">
                <div className="inner-progress" style={{ width: fillPercentage}}></div>
            </div>
            {formattedTime}
            <Button onClick={reset}>Reset</Button>

        </div>
    );
}

export default timer;

timer.propTypes = {
    secondsRemaining: PropTypes.number.isRequired,
    totalSeconds: PropTypes.number.isRequired,
    reset: PropTypes.func
}