import React from "react";
import NewsFeed from "../components/newsfeed";
import Grid from "@mui/material/Unstable_Grid2";
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
