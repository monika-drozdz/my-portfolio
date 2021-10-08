import React, { useState, useEffect } from "react";

import data from "../../data/data";
import "./CardOverview.scss";

import Card from "./../Card/Card";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const CardOverview = () => {
	const [projects, setProject] = useState([]);

	useEffect(() => {
		setProject(data);
	}, []);

	return (
		<div id="projects" className="projects">
			<SectionTitle>Projects</SectionTitle>
			<div className="card-overview">
				{projects.map((item, id) => {
					return <Card item={item} key={id} />;
				})}
			</div>
		</div>
	);
};

export default CardOverview;
