import React from "react";
import classIcons from "../assets/pictures/specsprite.webp";

const SpecIcon = (props) => {
	return <img className={props.specName} alt={props.spec} src={classIcons} />;
};

export default SpecIcon;
