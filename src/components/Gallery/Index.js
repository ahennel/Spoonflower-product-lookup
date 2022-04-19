import React from 'react';
import Spinner from '../Spinner/Index';
import { StyledGallery, StyledProductCard } from './styles';

const Gallery = ({ listings, isLoaded }) => {
	return (
		<StyledGallery>
			{!isLoaded ? (
				<Spinner />
			) : listings.length ? (
				listings.map(l => (
					<StyledProductCard key={l.id}>
						<img
							src={`https://garden.spoonflower.com/c/${l.designId}/p/f/m/${l.thumbnail}`}
							alt={l.name}
							style={{
								width: '100%',
								border: '1px solid #ddd',
							}}
						/>
						<div
							style={{
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
							}}
						>
							<span>{l.productListing.name}</span>
							<br />
							{l.name}
							<br />
							<span>by: {l.user.screenName}</span>
						</div>
					</StyledProductCard>
				))
			) : (
				<div
					style={{
						position: 'fixed',
						right: 0,
						textAlign: 'center',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						top: '50%',
						width: '100%',
					}}
				>
					Sorry there are no listings available.
				</div>
			)}
		</StyledGallery>
	);
};

export default Gallery;
