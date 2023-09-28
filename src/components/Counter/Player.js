import React, { useState, useEffect } from 'react';

import ControlButtons from './ControlButtons';
import Display from './Display';
import FlagButtons from './FlagButtons';

import './Player.scss';

const Player = (props) => {
    const [point, setPoint] = useState(0);

    const [flags, setFlag] = useState({ yellow: 0, red: 0, amIDead: 'not-yet' });

    const player = props.data;

    const addPointHandler = (points) => {
        const amount = parseInt(points) || 0;

        setPoint(prevPoint => { 
            const sum = parseInt(prevPoint) + parseInt(amount);
            
            return sum >= 0 ? sum : 0;
        });
    }

    const addYellowFlagHandler = (event) => {

        setFlag(prevFlags => {
            if( prevFlags.yellow === 2 ) {
                const totalRedFlags = (prevFlags.red + 1);
                let shouldIKillPlayer = 'not-yet'
                if( totalRedFlags > 1 ) {
                    shouldIKillPlayer = 'yes-you-are';
                    props.stopTimer(event); 
                }

                return {...prevFlags, yellow: 0, red: totalRedFlags, amIDead: shouldIKillPlayer};
            } else {
                return {...prevFlags, yellow: (prevFlags.yellow + 1)};
            }
        });
    }

    const addRedFlagHandler = (event) => {
        setFlag(prevFlags => {
            if( prevFlags.red >= 1 ) {
                props.stopTimer(event);
                return {...prevFlags, red: (prevFlags.red + 1), amIDead: 'yes-you-are'};
            } else {
                return {...prevFlags, red: (prevFlags.red + 1)};
            }
        });
    }

    useEffect(() => {
        props.resetPoints.current = resetPlayer
    }, [props.resetPoints]);

    const resetPlayer = () => {
        setFlag(prevFlags  => {
            return  {...prevFlags, yellow: 0, red: 0, amIDead: 'not-yet'};
        });

        setPoint( prevPoint => { 
            return 0; 
        });
    }

    return (
        <div className={props.className}>
            <input type="text" className={player.inputClassName} placeholder={player.placeHolder} />
            <Display point={point} yellowFlag={flags.yellow} redFlag={flags.red} amIDead={flags.amIDead} />
            <ControlButtons className="button" onClickHandler={addPointHandler} aehchScores={props.aehchScores} />
            <FlagButtons addYellowFlag={addYellowFlagHandler} addRedFlag={addRedFlagHandler} />
        </div>
    );
}

export default Player;