import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/Global.styled';
import { ThemeType } from './components/types/theme.type';

import RootRouts from './routes';
import { BrowserRouter } from 'react-router-dom';

const Muitheme = createTheme({
	palette: {
		primary: {
			main: '#1C4F46',
			contrastText: 'white',
		},
		secondary: {
			main: 'rgba(149,193,178,0.35)',
			contrastText: '#4E4E4E',
		},
		text: {
			primary: '#1C4F46',
		},
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'initial',
					borderRadius: '8px',
					boxShadow: 'none',
				},
				sizeLarge: {
					padding: '14px 24px',
				},
				sizeMedium: {
					padding: '11px 20px',
				},
				sizeSmall: {
					padding: '10px 16px',
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				inputSizeSmall: {
					fontSize: '14px',
					lineHeight: '20px',
				},
			},
		},
	},
});

// Our Theme of the app goes here
const theme: ThemeType = {
	nav: {
		background: 'green',
		text: 'white',
		link: 'teal',
	},
	footer: {
		background: '#292b2c',
		text: 'white',
		link: 'blue',
	},
	color: {
		primary: '#1C4F46',
		secondary: '#f0ad4e',
		error: '#d9534f',
		blur: '#c4c4c440',
	},
};

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<MuiThemeProvider theme={Muitheme}>
					<StyledEngineProvider injectFirst>
						<GlobalStyle />
						<BrowserRouter>
							<RootRouts />
						</BrowserRouter>
					</StyledEngineProvider>
				</MuiThemeProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
