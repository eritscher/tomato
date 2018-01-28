import React from "react";
import Button from '../UI/Button/Button';
import './Selection.css';
const selection = (props) => {
    document.title = 'Pomodoro App'
    return (
        <div className='btn-container'>
            <Button onClick={() => props.selectionHandler('work')}> I need to work</Button>
            <Button onClick={() => props.selectionHandler('break')}> I need to take five</Button>
            <Button onClick={() => props.selectionHandler('longBreak')}>I need a longer break</Button>

        </div>
    );

};

export default selection