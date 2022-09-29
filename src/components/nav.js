import React from "react";
import { Button, IconButton, Tooltip, Link } from "@mui/material";
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
	// TODO: terinary operator using mediaquery hook to display different menu for phone screens.
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
			<Grid item xs={6} sm="auto" flex>
				<Tooltip title="Home" arrow>
					<span>
						<Button size="fill" value="Home" name="Home">
							Home
						</Button>
					</span>
				</Tooltip>
			</Grid>
			<Grid item xs={6} sm="auto">
				<Tooltip title="Not yet implemented" arrow>
					<span>
						<Button size="large" value="News" name="News" disabled>
							About
						</Button>
					</span>
				</Tooltip>
			</Grid>
			{/* Icon between buttons to stretch the nav bar across the page more, and provide aesthetic */}
			<Grid item xs={12} sm="auto">
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
									<Tooltip title="Warcraft Logs">
										<Link href="https://www.warcraftlogs.com/guild/id/596438" target="_blank" rel="noreferrer">
											<img
												src={WCLLogo}
												alt=" Recycled Warcraft Logs"
												style={{ objectFit: "contain", width: 40, height: "auto", marginRight: 3 }}
												loading="lazy"
											/>
										</Link>
									</Tooltip>
									<Tooltip title="Raider.io">
										<Link href="https://raider.io/guilds/us/zuljin/recycled" target="_blank" rel="noreferrer">
											<img src={RIOLogo} alt=" Recycled Raider.io" style={{ objectFit: "contain", width: 40, height: "auto" }} loading="lazy" />
										</Link>
									</Tooltip>
									<Tooltip title="World of Warcraft guild page">
										<Link href="https://worldofwarcraft.com/en-us/guild/us/zuljin/recycled" target="_blank" rel="noreferrer">
											<img
												src={WOWLogo}
												alt=" Recycled World of Warcraft"
												style={{ objectFit: "contain", width: 40, height: "auto" }}
												loading="lazy"
											/>
										</Link>
									</Tooltip>
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
			<Grid item xs={6} sm="auto">
				<Tooltip title="Not yet implemented" arrow>
					<span>
						<Button size="large" value="The Team" name="Team" disabled>
							Team
						</Button>
					</span>
				</Tooltip>
			</Grid>
			<Grid item xs={6} sm="auto">
				<Tooltip title="Apply here" arrow>
					<span>
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
					</span>
				</Tooltip>
			</Grid>
		</Grid>
	);
};

export default Nav;
