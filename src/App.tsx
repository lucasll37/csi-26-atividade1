import { BrowserRouter } from "react-router-dom";
import { Router } from "./routers";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";
import {} 


export function App() {

	return (
		<BrowserRouter basename="">
			<ThemeProvider theme={Theme}>
				<GlobalStyle />

					<Router />
					
			</ThemeProvider>
		</BrowserRouter>
	)
}
