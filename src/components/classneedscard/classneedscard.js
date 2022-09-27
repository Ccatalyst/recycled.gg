import React from "react";
import { Card, CardContent, CardActions, Button, Typography, Tooltip } from "@mui/material";
import ClassNeedsTable from "./classneedstable";
import SpecIcon from "../specicon";
import "../component.css";
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
				<SpecIcon specName="deathknight-blood" spec="Deathknight Blood" style={{ width: 20 }} />
			</CardContent>
			<CardActions>
				<Tooltip title="Apply here" placement="top">
					<Button
						size="large"
						sx={{ m: "auto", width: "100%" }}
						href="https://docs.google.com/forms/d/e/1FAIpQLSeZ0ntFKaEzTyz02NKS4pR5CbDoXLF-M0Sex7t4ztLjGLxkOQ/viewform"
						target="_blank"
						rel="noreferrer"
					>
						Interested?
					</Button>
				</Tooltip>
			</CardActions>
		</Card>
	);
};
export default ClassNeedsCard;
