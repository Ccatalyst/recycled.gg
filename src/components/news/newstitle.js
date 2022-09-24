import React from "react";
import { Paper, Link } from "@mui/material";
import "./news.css";
const NewsTitle = () => {
	return (
		<Paper
			elevation={3}
			component="header"
			sx={{
				pt: 1,
				mr: 0.5,
				mt: 1.5,
			}}
		>
			<h3>
				<Link href="#" underline="none">
					Methane gas overloads Northern Hemisphere
				</Link>
			</h3>
		</Paper>
	);
};

export default NewsTitle;
