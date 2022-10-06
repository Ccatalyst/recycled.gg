import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { deepOrange } from "@mui/material/colors";
import { Avatar, Typography } from "@mui/material";
//// DEFAULT BREAKPOINTS
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const CardContent = () => {
	return (
		<Grid container>
			<Grid item xs={3} md={4}>
				{/* having this avatar change to a full-width picture that takes up the top portion of the card might be worth it. Would look better to have a larger image. For now, this will do. */}
				<Avatar sx={{ bgcolor: deepOrange[500], m: 2 }}>T</Avatar>
			</Grid>
			{/* consider having the name be large, and grey text under it with their role. Below that could be the class/spec */}
			<Grid item xs={12} md={8} sx={{ mt: 2 }}>
				<Typography variant="h5">This is a Test</Typography>
			</Grid>
			<Grid item xs={12} md={12} sx={{ mx: 1 }}>
				{/* Setting a hard size on the container for each breakpoint will be a good idea. Typography noWrap is boolean, so even though the container has depth, it's not using it due to the element being block.  */}
				<Typography variant="body2" noWrap={true} xs={{ display: "inline-block" }}>
					this content will be where a brief summary of the player and their skills will go. It might just include their class/spec, depending on the
					final result of the card layout and design
				</Typography>
			</Grid>
		</Grid>
	);
};

export default CardContent;
