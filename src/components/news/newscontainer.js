import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import NewsThumbnail from "./newsthumbnail";
import NewsContent from "./newscontent";
import NewsTitle from "./newstitle";

const NewsContainer = () => {
	return (
		// Gives the paper effect on the whole container
		<Paper
			elevation={2}
			sx={{
				my: 1,
				mx: 1,
			}}
		>
			<Grid container col={{ xs: 12 }}>
				<Grid item xs={3}>
					<NewsThumbnail />
				</Grid>
				<Grid item xs={9}>
					<Grid
						item
						xs={12}
						sx={{
							maxHeight: 40,
						}}
					>
						<NewsTitle />
					</Grid>
					<Grid item xs={12}>
						<NewsContent />
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default NewsContainer;