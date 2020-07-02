import React from 'react';

import AppContext from './AppContext';

export default function LevelOneComponent(props: { children: any }) {
    const value = React.useContext(AppContext);

    return (
        <>
            <p>
                Level 1 Component{' '}
                <button onClick={() => value.changeAppState('lv1')}>
                    Change Context (current: {value.appState})
                </button>
            </p>
            {props.children}
        </>
    );
}
