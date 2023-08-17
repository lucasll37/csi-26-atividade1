import { BrowserRouter } from "react-router-dom";
import { Router } from "./routers";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";


export function App() {

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />

					<Router />
					
			</ThemeProvider>
		</BrowserRouter>
	)
}
