import React from 'react';
import AppContext from './AppContext';

const ContextReporter = () => {
    const value = React.useContext(AppContext);
    return (
        <p>
            Current Context:{' '}
            <input type="text" readOnly value={value.appState} />
        </p>
    );
};

export default ContextReporter;
