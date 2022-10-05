import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./component.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "../assets/pictures/WoWScrnShot_051522_210632.jpg";
import RecycledLogoText from "../assets/pictures/recycled_logo_fixt_it_ONLY_text.png";
const Banner = () => {
	const theme = useTheme();

	const mobile = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<>
			{mobile ? (
				<Grid
					container
					maxWidth="xl"
					sx={{
						m: "auto",
					}}
				>
					<Grid
						container
						xs={12}
						sx={{
							backgroundImage: `url(${Image})`,
							backgroundPosition: "45% 42%",
							height: 400,
							display: {
								xs: "none",
								sm: "block",
							},
						}}
					>
						<Grid item xs={12}>
							<img src={RecycledLogoText} alt="recycled logo" className="banner-logo-main" />
						</Grid>
					</Grid>
				</Grid>
			) : (
				<Grid container>
					<Grid item sx={{ m: "auto" }}>
						<img src={RecycledLogoText} alt="recycled logo" className="banner-logo-mobile" />
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Banner;
