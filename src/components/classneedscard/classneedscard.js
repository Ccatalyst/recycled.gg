import React from "react";
import { Card, CardContent, CardActions, Button, Typography, Tooltip } from "@mui/material";
import ClassNeedsTable from "./classneedstable";

const ClassNeedsCard = () => {
	return (
		<Card>
			<CardContent>
				<Typography
					variant="h5"
					sx={{
						pb: 1,
					}}
				>
					Current Raid Needs
				</Typography>
				<ClassNeedsTable />
			</CardContent>
			<CardActions>
				{/* <Typography
					variant="h6"
					component="p"
					sx={{
						m: "auto",
					}}
				>
					Interested?
				</Typography> */}
				<Tooltip title="Apply here" placement="top">
					<Button size="large" sx={{ m: "auto", width: "100%" }}>
						Interested?
					</Button>
				</Tooltip>
			</CardActions>
		</Card>
	);
};
export default ClassNeedsCard;