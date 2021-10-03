import React, { useState, useEffect } from "react";

// import FaHtml5 from "./../../assets/images/FaHtml5.svg";
// import FaCss3Alt from "./../../assets/images/FaCss3Alt.svg";
// import FaJsSquare from "./../../assets/images/FaJsSquare.svg";
// import FaSass from "./../../assets/images/FaSass.svg";
// import FaReact from "./../../assets/images/FaReact.svg";
// import FaFigma from "./../../assets/images/FaFigma.svg";
// import Blender from "./../../assets/images/Blender.svg";
import lang from "../../data/languages.js";
import "./Technologies.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Technologies = () => {
	const [languages, setLanguages] = useState([]);

	useEffect(() => {
		setLanguages(lang);
	}, []);

	return (
		<div id="technologies" className="technologies">
			<SectionTitle>technologies</SectionTitle>
			<div className="lang-overview">
				{languages.map((item) => {
					return (
						<div className="lang">
							<img src={item.logo} alt="logo" />
							<p>{item.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Technologies;
