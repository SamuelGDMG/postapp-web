import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;
width: 100%;
`;

const appearFromRight = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`;

export const AnimationContainer = styled.div`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;

animation: ${appearFromRight} 1s;
`;

export const Input = styled.input`
background: #fff;
    border-radius: 10px;
    border: 2px solid blue;
    padding: 16px;
    width: 100%;
    color: blue;
    display: flex;
    align-items: center;

    & + input {
    margin-top: 10px;
    }
`;