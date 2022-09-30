import React from "react";
import { Paper, Link, Typography } from "@mui/material";
import "./news.css";
const NewsTitle = () => {
	return (
		<Paper
			elevation={5}
			component="header"
			sx={{
				pt: 1,
				mr: 0.5,
				mt: 1.5,
			}}
		>
			<Typography variant="h6" noWrap="ellipsis" sx={{ ml: 1 }}>
				<Link href="#" underline="none">
					Methane gas overloads Northern Hemisphere
				</Link>
			</Typography>
		</Paper>
	);
};

export default NewsTitle;
