import React from 'react';

const Search = ({ setTerms }) => {
	return (
		<div
			style={{
				marginBottom: '1rem',
			}}
		>
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
