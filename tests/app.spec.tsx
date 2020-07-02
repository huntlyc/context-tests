import React from 'react';
import App from '../src/App';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Context Sensitive'));
});
