import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

//// DEFAULT BREAKPOINTS
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const CardContent = () => {
	return (
		<Grid container spacing={0}>
			{/* consider having the name be large, and grey text under it with their role. Below that could be the class/spec */}
			<Grid item xs={12}>
				<Typography variant="h6" component="h4">
					This is a Test
				</Typography>
			</Grid>
			<Grid item xs={12} md={4}>
				<Typography variant="body1" color="text.secondary">
					Role/Class/Spec
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{/* Setting a hard size on the container for each breakpoint will be a good idea. Typography noWrap is boolean, so even though the container has depth, it's not using it due to the element being block.  */}
				<Typography noWrap variant="body2">
					very small blurb/nickname
				</Typography>
			</Grid>
		</Grid>
	);
};

export default CardContent;
