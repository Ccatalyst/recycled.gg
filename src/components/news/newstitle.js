import React from "react";
import { Link, Typography } from "@mui/material";
import "./news.css";
const NewsTitle = () => {
	return (
		<Typography variant="h6" noWrap={true} sx={{ ml: 1 }}>
			<Link href="#" underline="none">
				Methane gas overloads Northern Hemisphere
			</Link>
		</Typography>
	);
};

export default NewsTitle;
