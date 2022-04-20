import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './components/Sidebar';

test('Renders Sidebar', async () => {
	render(<Sidebar children={undefined} />);
});
