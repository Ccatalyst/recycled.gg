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
	// I need to sort out what is going to be a good set of breakpoints for this site. The defaults for Material UI are weird. This is an attempt at rushing through it, but I need to ensure that I'm using industry standards. TODO: Find the industry standards of responsive design and alter breakpoints based on that. Already built components will need to be checked for proper display when this is done.
	// breakpoints: {
	// 	values: {
	// 		xs: 0,
	// 		sm: 480,
	// 		md: 768,
	// 		lg: 1200,
	// 		xl: 1536,
	// 	},
	// },
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
					{/* TODO: ADD FOOTER WITH LINKS AND CREDITS */}
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
