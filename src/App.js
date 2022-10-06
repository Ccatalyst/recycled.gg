import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Banner from "./components/head-banner";
import Nav from "./components/nav";
import Home from "./pages/home";
import Team from "./pages/team";
import PropTypes from "prop-types";
// eslint-disable-next-line
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#ffb74d",
		},
	},
});

function Router(props) {
	const { children } = props;
	if (typeof window === "undefined") {
		return <StaticRouter location="/">{children}</StaticRouter>;
	}
	return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
	children: PropTypes.node,
};
function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<div className="App">
					<Banner />
					<Router>
						<Nav />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/team" element={<Team />} />
						</Routes>
					</Router>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
