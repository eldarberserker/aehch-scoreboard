import React from 'react';

import './Display.scss';

const Display = (props) => {

    const yellowFlags = [];
    for (let i = 0; i < props.yellowFlag; i++) { 
        let yellowKey = 'y' + i;
        yellowFlags.push(<span key={yellowKey}><i className="fas fa-flag falta-leve"></i>&nbsp;</span>);
    }

    const redFlags = [];
    for (let i = 0; i < props.redFlag; i++) { 
        let redKey = 'r' + i;
        yellowFlags.push(<span key={redKey}><i className="fas fa-flag falta-grave"></i>&nbsp;</span>);
    }

    return (
        <div className="display">
            <div className="big-points">
                {props.point}
            </div>
            <div key="flags-container" className="flags-container">
                <div className="yellow-flags">{ yellowFlags }</div>
                <div className="red-flags">{ redFlags }</div>
            </div>
            <div className={props.amIDead}><i className="fas fa-dizzy"></i></div>
        </div>
    );
}

export default Display;