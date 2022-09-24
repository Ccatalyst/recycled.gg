import React from "react";
import Container from "@mui/material/Container";
import "./component.css";
// NOTE: Container component centers the content inside horizontally
const Banner = () => {
	return (
		<Container
			maxWidth="xlg"
			sx={{
				px: 5,
			}}
		>
			<div className="bannerphoto">
				<h1>&lt;recycled&gt;</h1>
			</div>
		</Container>
	);
};

export default Banner;
