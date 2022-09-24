import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const NewsFeed = () => {
	return (
		<Grid
			container
			sx={{
				margin: "auto",
				alignItems: "center",
				bgcolor: "warning",
				border: 1,
			}}
			maxWidth="lg"
			columns={{ xs: 2 }}
		>
			<Grid
				item
				sx={{
					height: 100,
					bgcolor: "orange",
				}}
				sm={8}
			>
				<div>test</div>
			</Grid>
		</Grid>
	);
};

export default NewsFeed;
