import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
width: 100%;
`;

export const Content = styled.div`
display: flex;
place-content: center;
align-items: center;
width: 100%;
`;

const appearFromLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`;

export const AnimationContainer = styled.div`
display: flex;
place-content: center;
align-items: center;
width: 100%;

animation: ${appearFromLeft} 1s;
`;
