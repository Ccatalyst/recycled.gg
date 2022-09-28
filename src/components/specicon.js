import React from "react";
import classIcons from "../assets/pictures/actors.jpg";

const SpecIcon = (props) => {
	let className = `${props.spec} icon icon-rounded icon-sprite`;

	return <img className={className} alt={props.spec} src={classIcons} need={props.need} style={{ marginLeft: 6 }} />;
};

export default SpecIcon;
