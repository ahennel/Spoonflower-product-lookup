import React from 'react';

const Colors = ({ updateColor, color }) => {
	const colorSelections = [
		'allColors',
		'Black',
		'Brown',
		'Grey',
		'White',
		'Yellow',
		'Green',
		'Blue',
		'Purple',
		'Pink',
		'Red',
		'Orange',
	];

	const ColorSwatch = ({ csColor }) => {
		return (
			<button
				onClick={() => updateColor(csColor)}
				style={{
					background:
						csColor === 'allColors'
							? 'linear-gradient(217deg,rgba(255,0,0,.8),rgba(255,0,0,0) 70.71%),linear-gradient(127deg,rgba(0,255,0,.8),rgba(0,255,0,0) 70.71%),linear-gradient(336deg,rgba(0,0,255,.8),rgba(0,0,255,0) 70.71%)'
							: csColor,
					width: '30px',
					height: '30px',
					margin: '0 10px 10px 0',
					border: '1px solid #ddd',
					outline: color === csColor ? '3px solid #9cc5ca' : 'none',
				}}
			>
				<span
					style={{
						opacity: 0,
					}}
				>
					{color}
				</span>
			</button>
		);
	};

	return (
		<div
			style={{
				marginTop: '1rem',
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			{colorSelections.map((c, i) => (
				<ColorSwatch csColor={c} key={i} />
			))}
		</div>
	);
};

export default Colors;
