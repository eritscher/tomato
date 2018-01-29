import React from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import './Explaination.css';

const explaination = (props) => {
    let openClass = props.shouldShow ? 'open' : 'close';
    return (
        <div>
            <Backdrop show={props.shouldShow} clicked={props.explainationToggle}></Backdrop>
            <div className={["explaination-container", openClass].join(' ')}>
                <h2 style={{ textAlign: 'center' }}>What is Pomodoro?</h2>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
                        Pomodoro
                    </a>
                    &nbsp;is a productivity technique to keep yourself organized.
                </p>

                <ul>
                    <p>The basic principle is as follows:</p>
                    <li>List out 3-4 tasks you need to complete.</li>
                    <li>Work uninterupted for 25 minutes.</li>
                    <li>Cross out any tasks as you complete them.</li>
                    <li>Take a 5 minute break.</li>
                    <li>Repeat.</li>
                    <li>After 3-4 iterations take a longer break, about 15 minutes.</li>
                </ul>

            </div>
        </div>

    )
}

export default explaination