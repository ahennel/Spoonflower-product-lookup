import React from 'react';

interface Props {
	goToPrevPage: () => void;
	goToNextPage: () => void;
	offset: number;
}

const Pagination: React.FC<Props> = ({
	goToPrevPage,
	goToNextPage,
	offset,
}) => {
	return (
		<div
			style={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				width: '100%',
				textAlign: 'center',
				background: '#9cc5ca',
				padding: '20px',
				borderTop: '1px solid gray',
			}}>
			<button onClick={goToPrevPage} disabled={offset === 0}>
				Previous
			</button>
			<button onClick={goToNextPage}>Next</button>
		</div>
	);
};

export default Pagination;
