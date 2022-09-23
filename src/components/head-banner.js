import React from "react";
import Container from "@mui/material/Container";
import "./component.css";
// NOTE: Container component centers the content inside horizontally
const Banner = () => {
	return (
		<Container maxWidth="lg">
			<div className="bannerphoto">
				<h1>recycled</h1>
			</div>
		</Container>
	);
};

export default Banner;
