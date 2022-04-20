import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './theme/GlobalStyles';

// Components
import Sidebar from './components/Sidebar';
import Search from './components/Search/Index';
import SortBy from './components/Sort';
import ProductFilter from './components/ProductFilter';
import Colors from './components/Colors/Index';
import Pagination from './components/Pagination/Index';
import Gallery from './components/Gallery/Index';

const App = () => {
	const [listings, setListings] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [offset, setOffset] = useState(0);
	const [sort, setSort] = useState('bestSelling');
	const [product, setProduct] = useState('Fabric');
	const [color, setColor] = useState('');
	const [terms, setTerms] = useState('');

	// API
	const api = `https://pythias.spoonflower.com/search/v1/designs?page_offset=${offset}&sort=${sort}&product=${product}${
		terms && '&terms=' + terms
	}${color && color !== 'allColors' ? '&color=' + color : ''}`;

	useEffect(() => {
		fetch(api)
			.then(res => res.json())
			.then(
				result => {
					setListings(result.page_results);
					setIsLoaded(true);
					window.scrollTo(0, 0);
				},
				error => {
					setIsLoaded(true);
					setError(error);
				},
			);
	}, [api, offset, sort, terms, color, product]);

	// Update color on selection
	const updateColor = (colorType: React.SetStateAction<string>) => {
		setOffset(0);
		setColor(colorType);
	};

	// Update sort filter on selection
	const updateSorted = (type: React.SetStateAction<string>) => {
		setOffset(0);
		setSort(type);
	};

	// Update product on selection
	const updateProduct = (productType: React.SetStateAction<string>) => {
		setOffset(0);
		setProduct(productType);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
			}}>
			<GlobalStyles />
			<Sidebar>
				<Search setTerms={setTerms} />
				<SortBy updateSorted={updateSorted} />
				<ProductFilter updateProduct={updateProduct} />
				<Colors updateColor={updateColor} color={color} />
			</Sidebar>

			{error ? (
				<div>There was an error</div>
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
