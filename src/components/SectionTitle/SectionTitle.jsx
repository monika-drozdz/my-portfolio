import React from "react";

import "./SectionTitle.scss";

const SectionTitle = ({ children }) => {
	return (
		<div className="title">
			<h3>{children}</h3>
		</div>
	);
};

export default SectionTitle;
