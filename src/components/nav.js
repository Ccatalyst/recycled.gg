import React from "react";
import { Button, IconButton, Tooltip, Link, useMediaQuery, useTheme, Box, SpeedDial, SpeedDialAction } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Logo from "../components/logo";
import RIOLogo from "../assets/pictures/raiderio-white.svg";
import WCLLogo from "../assets/pictures/wcl-logo.png";
import WOWLogo from "../assets/pictures/wowlogo-white.png";

const Nav = () => {
	const [open, setOpen] = React.useState(false);

	const handleTooltipClose = () => {
		setOpen(false);
	};
	// Sets the links in the mobile version of the navigation bar
	const actions = [
		{
			icon: (
				<Link
					href="https://www.warcraftlogs.com/guild/id/596438"
					target="_blank"
					rel="noreferrer"
					sx={{
						mt: 1,
					}}
				>
					<img
						src={WCLLogo}
						alt=" Recycled Warcraft Logs"
						style={{ objectFit: "contain", width: 30, height: "auto", marginRight: 3 }}
						loading="lazy"
					/>
				</Link>
			),
			name: "RIO",
		},
		{
			icon: (
				<Link
					href="https://raider.io/guilds/us/zuljin/recycled"
					target="_blank"
					rel="noreferrer"
					sx={{
						mt: 1,
					}}
				>
					<img src={RIOLogo} alt=" Recycled Raider.io" style={{ objectFit: "contain", width: 30, height: "auto" }} loading="lazy" />
				</Link>
			),
			name: "WCL",
		},
		{
			icon: (
				<Link
					href="https://worldofwarcraft.com/en-us/guild/us/zuljin/recycled"
					target="_blank"
					rel="noreferrer"
					sx={{
						mt: 1,
					}}
				>
					<img src={WOWLogo} alt=" Recycled World of Warcraft" style={{ objectFit: "contain", width: 35, height: "auto" }} loading="lazy" />
				</Link>
			),
			name: "WoW",
		},
	];
	const handleTooltipOpen = () => {
		setOpen(true);
	};
	const theme = useTheme();
	// Checks to see if the screen size is less than the "sm" breakpoint of Material UI.
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<>
			{/* If the screen size is mobile, it will change the Navigation bar from a "bar" to a SpeedDial, where the button will be fixed to the bottom right of the window. If it isn't mobile, it'll show the normal navigation bar */}
			{mobile ? (
				<Box>
					<SpeedDial
						background-color="palette.background.default"
						size="small"
						FabProps={{
							sx: {
								bgcolor: "#12121200",
								"&:hover": {
									bgcolor: "#12121200",
								},
							},
						}}
						ariaLabel="Navigation"
						sx={{ position: "fixed", bottom: 16, right: 16 }}
						icon={<Logo />}
					>
						{actions.map((action) => (
							<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
						))}
					</SpeedDial>
				</Box>
			) : (
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
			)}
		</>
	);
};

export default Nav;
