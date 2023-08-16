import { BrowserRouter } from "react-router-dom";
import { Router } from "./routers";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";
// import { baseUrl } from "./constants";

export function App() {

	return (
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />

					<Router />
					
			</ThemeProvider>
		</BrowserRouter>
	)
}
