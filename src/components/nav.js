import React from "react";
import { Button, Container } from "@mui/material";

const Nav = () => {
	return (
		<Container maxWidth="lg">
			<Button size="medium" value="Home" name="Home">
				Home
			</Button>
			<Button size="medium" value="News" name="News">
				News
			</Button>
			{/* Icon between buttons to stretch the nav bar across the page more, and provide aesthetic */}

			<span>ICON</span>
			<Button size="medium" value="theTeam" name="theTeam">
				The Team
			</Button>
			<Button size="medium" value="Apply" name="Apply">
				Apply
			</Button>
		</Container>
	);
};

export default Nav;
