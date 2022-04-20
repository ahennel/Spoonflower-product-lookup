import React from 'react';

interface Props {
	setTerms: (val: string) => void;
}

const Search: React.FC<Props> = ({ setTerms }) => {
	return (
		<div
			style={{
				marginBottom: '1rem',
			}}>
			<label htmlFor='product-search'>Search Products</label>
			<input
				id='product-search'
				type='text'
				placeholder='Search products'
				onChange={e => setTerms(e.target.value)}
			/>
		</div>
	);
};

export default Search;
