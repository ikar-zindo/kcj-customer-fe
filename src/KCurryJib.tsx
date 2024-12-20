import React from "react";
import {Provider} from "react-redux";
import store from "./store/store";
// @ts-expect-error: for gh-pages
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";
import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
	palette: {
		primary: {
			main: '#D05C5C'
		},
		secondary: {
			main: '#123432'
		},
		error: {
			main: '#761212'
		},
		warning: {
			main: '#7612f2'
		}
	},
	typography: {
		fontFamily: 'Shojumaru, sans-serif',
		h1: {
			fontSize: '2.25rem',
			fontWeight: 600
		},
		h2: {
			fontSize: '1.75rem',
			fontWeight: 600
		},
		h3: {
			fontSize: '1.5rem',
			fontWeight: 600
		},
	},
	colorSchemes: {
		dark: true,
	},
	components: {
		MuiSnackbar: {
			styleOverrides: {
				root: {
					marginBottom: 0
				}
			}
		}
	}
});

const KCurryJib: React.FC = () => {
	return (
		// <BrowserRouter basename={import.meta.env.BASE_URL}
		//                future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
		<HashRouter> {/* HashRouter создаёт хеш приложения, что позволяет разместить на gh-pages */}
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline/>
					<App/>
				</ThemeProvider>
			</Provider>
		</HashRouter>
		// </BrowserRouter>
	);
};

export default KCurryJib;