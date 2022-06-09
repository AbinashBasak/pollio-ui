import { SignUpContainer } from '../components/styles/SignUpContainer.styled';
import styled from 'styled-components';
import pic from "../images/sign-up.svg";
import { BiEnvelope, BiHash, BiPhone, BiIdCard, BiCamera } from "react-icons/bi";
import InputFeild from '../components/styles/InputFeild.styled';
import { useState } from 'react';
import Camera from '../components/Camera';

const Main = styled.div`
    background-color : ${({ theme }) => theme.color.blur};
    width : 70vw;
    margin : auto;
    overflow : hidden;
    border-radius : 1rem;
    display: flex;

    @media (max-width: 768px) { 
        flex-direction : column;
    }
`

const Left = styled.div`
    background-color : #dae9e432;
    padding : 5%;
    display : flex;
    flex-direction : column;
    width : 35vw;
    h1 {
        color : white;
        display :inline-block;
    }
    h2 {
        color : #1C4F46;
        display :inline-block;
    }
    img {
        width : 100%;
    }

    @media (max-width: 768px) { 
        width : 100%;
    }
`

const Right = styled.div`
    padding : 10px;
    width : 35vw;
    padding : 5% 1%;

    @media (max-width: 768px) { 
        width : 100%;
        padding : 0;
    }
`

const Button = styled.button`
    width : 80%;
    height : 50px;
    border : 0;
    border-radius : 0.5rem;
    display : flex;
    margin : 10% auto;
    background-color : #DAE9E4;
    color : #1C4F46;
    justify-content : center;
    align-items : center;
    cursor : pointer;
    font-size : x-large;
    font-weight : bold;
    border : 3px solid transparent;

    &:hover {
        background-color : #b9c9c4;
        outline : 3px solid #284e41;
    }

    @media (max-width: 768px) { 
        width : 80%;
    }
`

const SignUp = () => {
    const [camera, setCamera] = useState(false);

    const showCamera = () => {
        setCamera(true);
    }

    return (
        <SignUpContainer>
            <Main>
                <Left>
                    <h1>POLL.IO</h1>
                    <h2>Voting made easy</h2>
                    <img src={pic} alt="img-logo" />
                </Left>
                <Right>
                    <InputFeild icon={BiEnvelope} type="text" placeholder='Enter your email' />
                    <InputFeild icon={BiHash} type="password" placeholder='Enter your password' />
                    <InputFeild icon={BiPhone} type="text" placeholder='Enter your phone' />
                    <InputFeild icon={BiIdCard} type="text" placeholder='Enter voterId no' />
                    <div onClick={showCamera} style={{cursor : "pointer"}}>
                        <InputFeild icon={BiCamera} type="text" placeholder='Take a picture' disable={true} />
                    </div>
                    <Button>Verify Cedentials</Button>
                </Right>
            </Main>

            {camera && <Camera hide={() => setCamera(false)}/>}
        </SignUpContainer>
    )
}

export default SignUp
