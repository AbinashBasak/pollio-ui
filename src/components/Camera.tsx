import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import profile_pic from '../images/default-profile.jpg';

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    position  : absolute;
    display : flex; 
    justify-content : center;
    align-items : center;
    background-color : #2d282890;
`

const Button = styled.button`
    width : 20%;
    height : 50px;
    font-size : x-large;
    border-radius : 0.2rem;
    cursor : pointer;
    border : 3px solid transparent;
    margin : 50px auto;

    &:hover {
        background-color : #d8cfcf;
        border : 3px solid #1c4008;
    }
`

const ImagePreview = styled.img`
    height : 500px;
    width : 700px;
`

const NestedDiv = styled.div`
    margin-top : 5vh;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction:column;
    margin : auto;
`

type CameraProps =  {
    hide:()=>void;
}
const Camera = (props: CameraProps) => {

    const [img, setImg] = useState('');
    const webcamRef: any = useRef(null);
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImg(imageSrc);
        },
        [webcamRef]
    );
    return (
        <Container>
            <NestedDiv>
                <Webcam
                    screenshotFormat="image/png"
                    height={500}
                    width={700}
                    ref={webcamRef}
                />
                <Button onClick={capture}>Take Photo</Button>
            </NestedDiv>
            <NestedDiv>
                <ImagePreview src={img || profile_pic} alt="your picture will be appear here" />
                <Button onClick={props.hide}>Save</Button>
            </NestedDiv>
        </Container>

    )
}

export default Camera