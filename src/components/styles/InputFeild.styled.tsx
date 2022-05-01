import { IconType } from "react-icons";
import styled from "styled-components";

type FieldType = {
  icon: IconType;
  type: string;
  placeholder: string;
  disable?: boolean;
}

const Input = styled.div`
    width : 80%;
    height : 50px;
    border-radius : 0.5rem;
    margin : 5% auto;
    display : flex;
    overflow : hidden;
    background-color : white;

    @media (max-width: 768px) { 
        width : 80%;
    }
    
`

const Icon = styled.div`
    display : flex;
    background-color : red;
    width : 20%;
    font-size : xx-large;
    justify-content : center;
    align-items : center;
    color : white;
    background-color : #1C4F46;
    
`

const Text = styled.input`
    height : 100%;
    width : 80%;
    font-size : x-large;
    padding : 5px;

    &:focus {
        outline : none;
        border : 0;
    }

`

const InputFeild = (props: FieldType) => {

  let {disable = false} = props;
  
  return (
    <>
      <Input>
        <Icon>
          <props.icon />
        </Icon>
        <Text 
          type={props.type} 
          placeholder={props.placeholder} 
          disabled = {disable}
        />
      </Input>
    </>
  )
}

export default InputFeild