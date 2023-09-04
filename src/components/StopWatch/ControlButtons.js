
import React from "react";
import "./ControlButtons.scss";
 
export default function ControlButtons(props) {

    const onStartHandler = (event) => {
        event.preventDefault();
        
        props.handleStart();
    }

    const onPauseHandler = (event) => {
        event.preventDefault();

        props.handlePause();
    }
    const onResetHandler = (event) => {
        event.preventDefault();

        props.handleReset();
    }
 
    return (
        <div className="control-buttons">
            <a href="#Iniciar" className="button" onClick={onStartHandler}>Iniciar</a>
            <a href="#Detener" className="button" onClick={onPauseHandler}>Detener</a>
            <a href="#Reiniciar" className="button" onClick={onResetHandler}>Reiniciar</a>
        </div>
    );
}