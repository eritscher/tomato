import React from "react";
import Button from '../UI/Button/Button';
import './Selection.css';
import PropTypes from 'prop-types';
const selection = (props) => {
    document.title = 'Tomato Tomato'
    return (
        <div className='btn-container'>
            <Button onClick={() => props.selectionHandler('work')}> I need to work</Button>
            <Button onClick={() => props.selectionHandler('break')}> I need to take five</Button>
            <Button onClick={() => props.selectionHandler('longBreak')}>I need a longer break</Button>

        </div>
    );

};

export default selection;

selection.propTypes = {
    selectionHandler: PropTypes.func
};