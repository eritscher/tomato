import React from "react";
import Button from '../UI/Button/Button';

const selection = (props) => {

    return (
        <div>
            <Button onClick={() => props.selectionHandler('work')} >Work</Button>
            <Button onClick={() => props.selectionHandler('break')} > Short Break</Button>
            <Button onClick={() => props.selectionHandler('longBreak')} >Long Break</Button>

        </div>
    );

};

export default selection