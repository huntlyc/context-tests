import React from 'react';

import AppContext from './AppContext';

export default function LevelTwoComponent() {
    const value = React.useContext(AppContext);

    return (
        <>
            <p>
                Level 2 Component{' '}
                <button onClick={() => value.changeAppState('lv2')}>
                    Change Context (c{value.appState})
                </button>
            </p>
        </>
    );
}
