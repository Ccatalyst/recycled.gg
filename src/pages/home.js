import React from "react";
import { Link } from "react-router-dom";
import NewsFeed from "../components/newsfeed";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

const Home = () => {
	return (
		<Grid
			maxWidth="lg"
			container
			columns={{ xs: 12 }}
			sx={{
				justifyContent: "space-between",
				margin: "auto",
			}}
		>
			<Grid item xs={10}>
				<NewsFeed />
			</Grid>
			<Grid item xs={2}>
				<Box
					sx={{
						height: 100,
						width: 100,
						backgroundColor: "blue",
					}}
				></Box>
			</Grid>
		</Grid>
	);
};
export default Home;
