import React from "react";
import { Button, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// Add Grid items around all the buttons and icon to have a mobile friendly navbar
const Nav = () => {
	return (
		<Grid
			container
			maxWidth="lg"
			sx={{
				margin: "auto",
				direction: "column",
				alignItems: "center",
				justifyContent: "space-around",
				background: "",
			}}
		>
			{/* TODO: Paper is here to see if the design looks better with elevation. Test more at some point */}
			{/* <Paper elevation={2}></Paper> */}
			<Button size="medium" value="Home" name="Home">
				Home
			</Button>
			<Button size="medium" value="News" name="News">
				News
			</Button>
			{/* Icon between buttons to stretch the nav bar across the page more, and provide aesthetic */}

			<DeleteOutlineIcon fontSize="large" color="primary" />
			<Button size="medium" value="theTeam" name="theTeam">
				The Team
			</Button>
			<Button size="large" value="Apply" name="Apply">
				Apply
			</Button>
		</Grid>
	);
};

export default Nav;
