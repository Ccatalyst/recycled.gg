import React from "react";
import { Card, CardActions, Button } from "@mui/material";
import PlayerCardContent from "./playercardcontent";
const PlayerCard = () => {
	return (
		<Card>
			<PlayerCardContent />
			<CardActions>
				<Button size="small">More</Button>
			</CardActions>
		</Card>
	);
};

export default PlayerCard;
