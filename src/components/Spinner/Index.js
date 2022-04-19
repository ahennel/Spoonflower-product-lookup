// Original Source but modified by me for React: https://codesandbox.io/s/spinner-loader-ozfrr?from-embed=&file=/src/App.js
import styled, { keyframes } from 'styled-components';

const Spinner = () => (
	<AbsoluteContainer>
		<StyledLoader />
	</AbsoluteContainer>
);

const keyframeRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AbsoluteContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	height: calc(100% - 62px);
	align-items: center;
	justify-content: center;
`;

const StyledLoader = styled.div`
	border: 10px solid #f3f3f3;
	border-top: 10px solid #3498db;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: ${keyframeRotate} 1s linear infinite;
`;

export default Spinner;
