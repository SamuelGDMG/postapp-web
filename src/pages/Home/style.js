
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

const appearFromTop = keyframes`
from {
    opacity: 0;
    transform: translateY(-50px);
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

animation: ${appearFromTop} 1s;
`;

export const NavBar = styled.div`

    background: #A3130D;
    width: 100%;
    height: 56px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;

    div {
        display: flex;
        flex: 1;
        align-items: center;
    }

`;

export const Opcoes = styled.div`
    justify-content: flex-end;
    padding-right: 30px;
`;

