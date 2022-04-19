import React from 'react';

const SortBy = ({ updateSorted }) => {
	return (
		<div>
			<label htmlFor='sort-by'>Sort by</label>
			<select
				id='sort-by'
				defaultValue='bestSelling'
				onChange={e => updateSorted(e.target.value)}
			>
				<option value='bestSelling'>Best Selling</option>
				<option value='newest'>Newest</option>
				<option value='trending'>Trending</option>
				<option value='mostFavorited'>Most Favorited</option>
				<option value='mostRelevant'>Most Relevant</option>
			</select>
		</div>
	);
};

export default SortBy;
