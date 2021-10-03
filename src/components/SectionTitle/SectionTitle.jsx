import React from "react";

import "./SectionTitle.scss";
import smallL from "./../../assets/images/arrow-l.svg";
import smallR from "./../../assets/images/arrow-r.svg";

const SectionTitle = ({ children }) => {
	return (
		<div className="title">
			{/* <img src={smallL} alt="arrow" /> */}
			<h3>{children}</h3>
			{/* <img src={smallR} alt="arrow" /> */}
		</div>
	);
};

export default SectionTitle;
