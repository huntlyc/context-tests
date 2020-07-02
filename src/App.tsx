import * as React from 'react';
import ContextReporter from './ContextReporter';
import LevelOneComponent from './LevelOneComponent';
import LevelTwoComponent from './LevelTwoComponent';
import './styles.css';

import AppContext from './AppContext';
import { useState } from 'react';

export default function App() {
    const [appState, changeAppState] = useState('init');

    return (
        <div className="App">
            <h1>Context Sensitive</h1>
            <h2>...it's sensitive to context</h2>
            <img
                src="https://itc.ua/img/dpk/2003/5/!conker's_bad_fur_day_(n64)_2.jpg"
                alt="Scarecrow from Conkers Bad Fur Day"
            />

            <AppContext.Provider value={{ appState, changeAppState }}>
                <ContextReporter />
                <LevelOneComponent>
                    <LevelTwoComponent />
                </LevelOneComponent>
            </AppContext.Provider>
        </div>
    );
}
