import React from "react";
import { Button, IconButton, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ClickAwayListener from "@mui/material/ClickAwayListener";
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
					News
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
							disableFocusListener
							disableHoverListener
							disableTouchListener
							title="Outside Links"
						>
							<IconButton onClick={handleTooltipOpen}>
								{/* <NavIcon /> */}

								<DeleteOutlineIcon fontSize="large" color="primary" />
							</IconButton>
						</Tooltip>
					</div>
				</ClickAwayListener>
			</Grid>
			<Grid item>
				<Button size="large" value="theTeam" name="theTeam">
					The Team
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
