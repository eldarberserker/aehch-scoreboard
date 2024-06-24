import React, { useState, useRef } from 'react';

import StopWatch from './components/StopWatch/StopWatch';
import Counter from './components/Counter/Counter';
import Header from './components/UI/Header';
import Logo from './components/UI/Logo';

import "@fortawesome/fontawesome-free";

import './App.scss';

function App() {

    const resetCounters = useRef(null);
    const resetStopWatch = useRef(null);
    const pauseStopWatch = useRef(null);

    const [aehchScores, setAehchScores] = useState(true);

    const resetAllHandler = (event) => {
        event.preventDefault();
        
        resetCounters.current();
        resetStopWatch.current();
    }

    const stopTimer = (event) => {
        event.preventDefault();

        pauseStopWatch.current();
    }

    const configAehchScoreHandler = (event) => {
        const newValue = event.target.attributes.rules.value === 'aehch';
        setAehchScores(newValue);
    }

    return (
        <div  className="App">
            <Logo className="mobile-logo"/>
            <Header />
            <div className="row">
                <div className="col-5 expand-on-mobile">
                    <h3>TIMER</h3>
                    <StopWatch 
                        resetStopWatch={resetStopWatch}
                        pauseStopWatch={pauseStopWatch}
                    />
                    <Logo className="desktop-logo" />
                </div>
                <div className="col-7 expand-on-mobile">
                    <h3>PUNTAJES</h3>
                    <Counter className="row" 
                        resetCounters={resetCounters} 
                        resetAll={resetAllHandler}
                        stopTimer={stopTimer}
                        aehchScores={aehchScores} />
                    <div>
                        <h3>Reglas Puntaje</h3>
                        <button className={`button ${aehchScores ? 'active' : ''}`} rules="aehch" onClick={configAehchScoreHandler}>AEHCH</button>
                        <button className={`button ${!aehchScores ? 'active' : ''}`} rules="international" onClick={configAehchScoreHandler}>Otros</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
