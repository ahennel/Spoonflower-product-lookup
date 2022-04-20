import React from 'react';
import logo from '../../sf-logo.svg';
import { StyledSidebar } from './styles';

interface Props {
	children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
	return (
		<StyledSidebar>
			<img
				src={logo}
				alt='Spoonflower Logo'
				style={{
					maxWidth: '90%',
					marginTop: '20px',
				}}
			/>
			<div
				style={{
					margin: '2rem auto',
					padding: '1rem',
				}}>
				{children}
			</div>
		</StyledSidebar>
	);
};

export default Sidebar;
