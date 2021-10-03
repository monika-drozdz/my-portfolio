import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, isGithub }) => {
	return <button className={`${isGithub ? "git" : ""} btn`}>{children}</button>;
};

export default CustomButton;
