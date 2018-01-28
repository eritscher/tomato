import React from "react";

const selection = (props) => {

    return (
        <div>
            <button onClick={()=> props.selectionHandler('work')} >Work</button>
            <button onClick={() => props.selectionHandler('break')}>Break</button>
            <button onClick={() => props.selectionHandler('longBreak')}>Long Break</button>
        </div>
    );

};

export default selection