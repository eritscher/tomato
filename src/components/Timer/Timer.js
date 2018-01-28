import React from 'react';

const timer = (props) => {
    const getSeconds = () => {
        return ('0' + props.secondsRemaining % 60).slice(-2)
    }
    const getMinutes = () => {
        return Math.floor(props.secondsRemaining / 60);
    }
    let formattedTime = `${getMinutes()}:${getSeconds()}`;

    return (
        <div>
            {formattedTime}
            <button onClick={props.reset}>Reset</button>

        </div>
    );
}

export default timer;