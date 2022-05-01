import { ThemeProvider } from "styled-components";
import GlobalStyle from './components/styles/Global.styled';
import { ThemeType } from './components/types/theme.type';
import SignUp from './components/SignUp'

// Our Theme of the app goes here 
const theme : ThemeType = {
  nav : {
    background : 'green',
    text : 'white',
    link : 'teal'
  },
  footer : {
    background : '#292b2c',
    text : 'white',
    link : 'blue'
  },
  color : {
    primary: '#1C4F46',
    secondary : '#f0ad4e',
    error : '#d9534f',
    blur : '#c4c4c440'
  }
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SignUp/>
      </ThemeProvider>
    </>

  );
}

export default App;
