import React from "react";
import classIcons from "../assets/pictures/actors.jpg";
import { Tooltip } from "@mui/material";

const SpecIcon = (props) => {
	let className = `${props.spec}  icon icon-rounded icon-sprite`;
	return (
		<Tooltip title={props.need} arrow>
			<img className={className} alt={props.spec} src={classIcons} style={{ marginLeft: 6 }} />
		</Tooltip>
	);
};

export default SpecIcon;
