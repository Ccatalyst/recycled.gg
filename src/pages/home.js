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
				margin: "auto",
			}}
		>
			<Grid item xs={10} md={7}>
				<NewsFeed />
			</Grid>
			<Grid item xs={9} md={3}>
				<ClassNeedsCard />
			</Grid>
		</Grid>
	);
};
export default Home;
