import styled from 'styled-components';
import { media } from '../../theme/media';

export const StyledSidebar = styled.div`
	position: relative;
	width: 100%;

	${media.greaterThan('lg')`
    position: fixed;
		width: 20%;
 `};
`;
