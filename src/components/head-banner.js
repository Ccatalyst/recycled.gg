import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./component.css";
import Image from "../assets/pictures/WoWScrnShot_051522_210632.jpg";
const Banner = () => {
	return (
		<Grid
			container
			maxWidth="xl"
			sx={{
				m: "auto",
			}}
		>
			<Grid
				item
				xs={12}
				sx={{
					backgroundImage: `url(${Image})`,
					backgroundPosition: "center",
					objectFit: "cover",
					height: 400,
					display: {
						xs: "none",
						sm: "block",
					},
				}}
			></Grid>
			<Grid
				container
				xs={12}
				sx={{
					justifyContent: "center",
				}}
			>
				<Typography variant="h2" color="lightblue" component="h1">
					recycled
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Banner;
