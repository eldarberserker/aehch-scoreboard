import React, { useState, useEffect } from 'react';
import './Doubles.scss';

const Doubles = (props) => {

    const [doubles, setDoubles] = useState(0);

    const buttons = [
        { points: 1, label: '+1' },
        { points: -1, label: '-1' },
    ];

    const addDoubleHandler = (event) => {
        event.preventDefault();
        
        setDoubles(prevDoubles => {
            const sum = parseInt(prevDoubles) + parseInt(event.target.attributes.points.value);

            return sum >= 0 ? sum : 0; 
        });
    }

    useEffect(() => {
        props.resetDoubles.current = resetDoubles
    }, [props.resetDoubles]);

    const resetDoubles = () => {
        setDoubles(prevDoubles => {
            return 0;
        })
    }

    return (
        <div className="double-hits">
            <h3>Dobles</h3>
            <div className="double-hit-counter">{doubles}</div>
            { buttons.map((btn, index) => {
                const btnKey = "btn" + index;
                return (
                    <button 
                        key={btnKey} 
                        className="button" 
                        onClick={addDoubleHandler}
                        points={btn.points}
                    >{btn.label}</button>
                );
            }) }
        </div>
    );
}

export default Doubles;