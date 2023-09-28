
import React from "react";
import "./ControlButtons.scss";
 
export default function ControlButtons(props) {

    const addPointHandler = (event) => {
        event.preventDefault();
        
        props.onClickHandler(event.target.attributes.points.value);
    }

    const buttons = [
        { points: 1, label: '+1' },
        { points: 3, label: '+3' },
        { points: 9, label: '+9' },
        { points: -1, label: '-1' },
        { points: -3, label: '-3' },
        { points: -9, label: '-9' }
    ];

    if(!props.aehchScores) {
        buttons[1] = { points: 2, label: '+2' };
        buttons[2] = { points: 3, label: '+3' };
        buttons[4] = { points: -2, label: '-2' };
        buttons[5] = { points: -3, label: '-3' };
    }
    
    
    return (
        <div className="point-control-buttons">
            {buttons.map((button, index) => { 
                return (
                    <button 
                        key={index} 
                        className="button" 
                        onClick={addPointHandler}
                        points={button.points}
                    >{button.label}</button>
                );
            }) }
        </div>
    );
}