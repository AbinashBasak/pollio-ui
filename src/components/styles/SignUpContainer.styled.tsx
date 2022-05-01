import styled from 'styled-components';


export const SignUpContainer = styled.div`
    display : flex;
    margin : auto;
    justify-content : center;
    align-items : center;
    background-color : ${({theme}) => theme.color.primary};
    height : 100vh;
    width : 100vw;
`