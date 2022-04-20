import styled from 'styled-components';
import { media } from '../../theme/media';

export const StyledGallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 0 100px auto;
	width: 100%;

	${media.greaterThan('lg')`
    width: 80%;
 `};
`;

export const StyledProductCard = styled.div`
	flex: 0 0 calc(50% - 1rem);
	max-width: calc(50% - 1rem);
	position: relative;
	padding: 1rem;
	border: 1px solid #ddd;
	margin: 0.5rem;
	border-radius: 5px;

	${media.greaterThan('md')`
	  flex: 0 0 calc(33% - 1rem);
	  max-width: calc(33% - 1rem);
 `};

	${media.greaterThan('xl')`
	  flex: 0 0 calc(25% - 1rem);
	  max-width: calc(25% - 1rem);
 `};
`;
