import React from "react";
import { Link } from "react-router-dom";
import NewsFeed from "../components/newsfeed";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import ClassNeedsCard from "../components/classneedscard/classneedscard";

const Home = () => {
	return (
		<Grid
			maxWidth="xl"
			container
			columns={{ xs: 10 }}
			sx={{
				justifyContent: "center",
				margin: "auto",
			}}
		>
			<Grid item xs={8}>
				<NewsFeed />
			</Grid>
			<Grid item xs={2}>
				<ClassNeedsCard />
			</Grid>
		</Grid>
	);
};
export default Home;
