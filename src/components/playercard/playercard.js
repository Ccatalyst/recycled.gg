import React from "react";
import { Card, CardActions, Button, CardMedia } from "@mui/material";
import PlayerCardContent from "./playercardcontent";
import Cardimg from "../../assets/pictures/cardimg.jpg";
const PlayerCard = () => {
	return (
		<Card>
			<CardMedia component="img" height="140" image={Cardimg} />
			<PlayerCardContent />
			<CardActions>
				<Button size="small">More</Button>
			</CardActions>
		</Card>
	);
};

export default PlayerCard;
