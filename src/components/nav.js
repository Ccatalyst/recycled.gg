import React from "react";
import { Button, IconButton, Tooltip, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Logo from "../components/logo";
import RIOLogo from "../assets/pictures/raiderio-white.svg";
import WCLLogo from "../assets/pictures/wcl-logo.png";
import WOWLogo from "../assets/pictures/wowlogo-white.png";
// 	TODO: Turn center icon into a SpeedDial or something similar, with links to WCL, RIO, etc. */

// This one is weird. I need to turn the nav bar into a fixed menu on the screen, which means transforming this Grid container into a Floating Action Button with the Nav inside of it. It's that or make the Nav fixed on the screen once you scroll past it
// Look into the react-app-bar on MUI
window.onscroll = function () {};

const Nav = () => {
	const [open, setOpen] = React.useState(false);

	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};

	return (
		<Grid
			container
			maxWidth="xl"
			sx={{
				margin: "auto",
				my: 3,
				direction: "column",
				alignItems: "center",
				justifyContent: "space-around",
				borderBottom: 2,
			}}
		>
			<Grid item>
				<Button size="large" value="Home" name="Home">
					Home
				</Button>
			</Grid>
			<Grid item>
				<Button size="large" value="News" name="News">
					About
				</Button>
			</Grid>
			{/* Icon between buttons to stretch the nav bar across the page more, and provide aesthetic */}
			<Grid item>
				<ClickAwayListener onClickAway={handleTooltipClose}>
					<div>
						<Tooltip
							PopperProps={{
								disablePortal: true,
							}}
							onClose={handleTooltipClose}
							open={open}
							arrow
							disableFocusListener
							disableHoverListener
							disableTouchListener
							title={
								<>
									<Link href="https://www.warcraftlogs.com/guild/id/596438">
										<img src={WCLLogo} alt=" Recycled Warcraft Logs" style={{ objectFit: "contain", width: 40, height: "auto" }} />
									</Link>
									<Link href="https://raider.io/guilds/us/zuljin/recycled">
										<img src={RIOLogo} alt=" Recycled Raider.io" style={{ objectFit: "contain", width: 40, height: "auto" }} />
									</Link>
									<Link href="https://worldofwarcraft.com/en-us/guild/us/zuljin/recycled">
										<img src={WOWLogo} alt=" Recycled World of Warcraft" style={{ objectFit: "contain", width: 40, height: "auto" }} />
									</Link>
									<br />
									<Typography variant="captiontext" component="span" sx={{ pr: 1 }}>
										WCL
									</Typography>
									<Typography variant="p" component="span" sx={{ pr: 1 }}>
										Raider.io
									</Typography>
									<Typography variant="p" component="span">
										WCL
									</Typography>
								</>
							}
						>
							<IconButton onClick={handleTooltipOpen}>
								{/* <NavIcon /> */}

								<Logo />
							</IconButton>
						</Tooltip>
					</div>
				</ClickAwayListener>
			</Grid>
			<Grid item>
				<Button size="large" value="theTeam" name="Team">
					Team
				</Button>
			</Grid>
			<Grid item>
				<Button
					size="20%"
					value="Apply"
					name="Apply"
					href="https://docs.google.com/forms/d/e/1FAIpQLSeZ0ntFKaEzTyz02NKS4pR5CbDoXLF-M0Sex7t4ztLjGLxkOQ/viewform"
					target="_blank"
					rel="noreferrer"
				>
					Apply
				</Button>
			</Grid>
		</Grid>
	);
};

export default Nav;
