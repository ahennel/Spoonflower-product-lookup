import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './theme/GlobalStyles';

// Components
import Gallery from './components/Gallery/Index';
import Pagination from './components/Pagination/Index';
import Search from './components/Search/Index';
import SortBy from './components/Sort';
import Colors from './components/Colors/Index';
import Sidebar from './components/Sidebar';

const App = () => {
	const [listings, setListings] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [offset, setOffset] = useState(0);
	const [sort, setSort] = useState('bestSelling');
	const [color, setColor] = useState(null);
	const [terms, setTerms] = useState('');

	// API
	const api = `https://pythias.spoonflower.com/search/v1/designs?page_offset=${offset}&sort=${sort}${
		terms && '&terms=' + terms
	}${color && color !== 'allColors' ? '&color=' + color : ''}`;

	useEffect(() => {
		fetch(api)
			.then(res => res.json())
			.then(
				result => {
					setIsLoaded(true);
					setListings(result.page_results);
					window.scrollTo(0, 0);
				},
				error => {
					setIsLoaded(true);
					setError(error);
				},
			);
	}, [api, offset, sort, terms, color]);

	// Update color on selection
	const updateColor = color => {
		setOffset(0);
		setColor(color);
	};

	// Update sort filter on selection
	const updateSorted = type => {
		setOffset(0);
		setSort(type);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			<GlobalStyles />
			<Sidebar>
				<Search setTerms={setTerms} />
				<SortBy updateSorted={updateSorted} />
				<Colors updateColor={updateColor} color={color} />
			</Sidebar>

			{error ? (
				<div>There was an error: {error.message}</div>
			) : (
				<Gallery listings={listings} isLoaded={isLoaded} />
			)}

			<Pagination
				goToNextPage={() => setOffset(offset + 84)}
				goToPrevPage={() => setOffset(offset - 84)}
				offset={offset}
			/>
		</div>
	);
};

export default App;
