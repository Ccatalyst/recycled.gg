import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

const Team = () => {
	return (
		<Grid container>
			<Grid item>
				<Box
					sx={{
						width: 300,
						height: 300,
						backgroundColor: "blue",
					}}
				></Box>
			</Grid>
		</Grid>
	);
};

export default Team;
