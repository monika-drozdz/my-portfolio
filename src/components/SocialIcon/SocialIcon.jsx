import React from "react";

import "./SocialIcon.scss";
const LinkedinIcon = ({ children, link }) => {
	return (
		<div className="social-icon">
			<a className="link" href={link} target="_blank" rel="noopener noreferrer">
				<img src={children} alt="logo" />
			</a>
		</div>
	);
};

export default LinkedinIcon;
