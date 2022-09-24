import React from "react";
import { Paper } from "@mui/material";
const NewsContent = () => {
	return (
		<Paper
			elevation={5}
			sx={{
				minHeight: 150,
				mr: 0.5,
			}}
			flex="true"
		>
			<p>
				In other news, the fart that was heard in all of North America was found to come from a man who had just finished eating a gallon tub of ice
				cream, despite being lactose intolerant. The man could not be found for comment, but his wife was asked about it as she came out of the local
				divorce attorney's office, and had this to say, "Didn't even warn me! It blasted a hole in the side of the house!".
			</p>
		</Paper>
	);
};

export default NewsContent;
