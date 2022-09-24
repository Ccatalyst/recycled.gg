import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import NewsContainer from "./news/newscontainer";
const NewsFeed = () => {
	return (
		<Grid
			container
			sx={{
				alignItems: "center",

				columns: { xs: 12 },
			}}
			maxWidth="lg"
			columns={{ xs: 12 }}
		>
			<Grid
				item
				sx={{
					bgcolor: "primary",
				}}
				sm={12}
			>
				<NewsContainer />
			</Grid>
			<Grid
				item
				sx={{
					bgcolor: "primary",
				}}
				sm={12}
			>
				<NewsContainer />
			</Grid>
			<Grid
				item
				sx={{
					bgcolor: "primary",
				}}
				sm={12}
			>
				<NewsContainer />
			</Grid>
		</Grid>
	);
};

export default NewsFeed;
