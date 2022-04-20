import React from 'react';
import ColorSwatch from '../ColorSwatch';

interface Props {
	updateColor: (val: string) => void;
	color: string;
}

const Colors: React.FC<Props> = ({ updateColor, color }) => {
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

	return (
		<div
			style={{
				marginTop: '1rem',
				display: 'flex',
				flexWrap: 'wrap',
			}}>
			{colorSelections.map((c, i) => (
				<ColorSwatch
					csColor={c}
					key={i}
					color={color}
					updateColor={updateColor}
				/>
			))}
		</div>
	);
};

export default Colors;
