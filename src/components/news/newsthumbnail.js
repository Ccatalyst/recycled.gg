import React from "react";
import "./news.css";
import Container from "@mui/material/Container";
const NewsThumbnail = () => {
	return (
		<Container
			sx={{
				pt: 6,
				pb: 6,
				pl: 0,
			}}
		>
			<img src="https://images.unsplash.com/photo-1508968419-73cca394e8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
		</Container>
	);
};

export default NewsThumbnail;
