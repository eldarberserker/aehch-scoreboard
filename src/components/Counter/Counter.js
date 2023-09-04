import React, { useRef, useEffect } from 'react';

import Player from './Player';
import Doubles from './Doubles';

import './Counter.scss';

const Counter = (props) => {
    const players = [{
        placeHolder: 'Competidor 1',
        className: 'player-one',
        inputClassName: 'styled-text'
    },{
        placeHolder: 'Competidor 2',
        className: 'player-two',
        inputClassName: 'styled-text'
    }];

    const classes = "players-grid "; // + props.className;

    const resetDoubles = useRef(null);
    const resetPointsP1 = useRef(null);
    const resetPointsP2 = useRef(null);

    useEffect(() => {
        props.resetCounters.current = resetPointsAndDoubles
    }, [props.resetCounters]);

    const resetPointsAndDoubles = () => {
        resetDoubles.current();
        resetPointsP1.current();
        resetPointsP2.current();
    };

    return (
        <div>
            <div className={classes}>
                <Player key={players[0].className} className={players[0].className} data={players[0]} resetPoints={resetPointsP1} stopTimer={props.stopTimer} />
                <Player key={players[1].className} className={players[1].className} data={players[1]} resetPoints={resetPointsP2} stopTimer={props.stopTimer} />
            </div>
            <Doubles doubles={props.doubles} addDouble={props.addDouble} resetDoubles={resetDoubles} />
            <div className="reset-all">
                <button  
                    className="button" 
                    onClick={props.resetAll}
                >Reiniciar Contadores</button>
            </div>
        </div>
    );
}

export default Counter;