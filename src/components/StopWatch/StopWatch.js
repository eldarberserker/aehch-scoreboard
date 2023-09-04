import React, { useState, useEffect } from "react";
import "./StopWatch.scss";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
 
function StopWatch(props) {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
 
    React.useEffect(() => {
        let interval = null;
 
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);
 
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
 
    const handlePause = () => {
        setIsPaused(true);
    };
 
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    useEffect(() => {
        props.resetStopWatch.current = handleReset;
        props.pauseStopWatch.current = handlePause;
    }, [props.resetStopWatch, props.pauseStopWatch]);

 
    return (
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePause={handlePause}
                handleReset={handleReset}
            />
        </div>
    );
}
 
export default StopWatch;