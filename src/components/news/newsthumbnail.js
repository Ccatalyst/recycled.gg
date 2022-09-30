import React from "react";
import "./news.css";
import Box from "@mui/material/Box";

const NewsThumbnail = () => {
	return (
		<Box
			component="img"
			src="https://images.unsplash.com/photo-1508968419-73cca394e8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
			alt="placeholder"
			sx={{
				maxWidth: 1 / 1,
				p: 1,
			}}
		></Box>
	);
};

export default NewsThumbnail;
