import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import PlayerCard from "../components/playercard/playercard";
import { Typography } from "@mui/material";

//// DEFAULT BREAKPOINTS
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const Team = () => {
	return (
		<Grid
			container
			maxWidth="xl"
			sx={{
				margin: "auto",
			}}
			spacing={2}
		>
			<Grid item xs={12} sx={{ mb: 2 }}>
				<Typography variant="h4" sx={{ textDecoration: "underline" }}>
					Officers
				</Typography>
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={12} sx={{ mb: 2 }}>
				<Typography variant="h4" sx={{ textDecoration: "underline" }}>
					Raiders
				</Typography>
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
			<Grid item xs={6} sm={3} lg={2}>
				<PlayerCard />
			</Grid>
		</Grid>
	);
};

export default Team;
