import React from "react";
import CustomButton from "./../CustomButton/CustomButton";
import githubik from "../../assets/images/FaGithub.svg";
import externalLink from "../../assets/images/external-link.svg";

import "./Card.scss";
const Card = ({ item: { name, image, languages, demo, git } }) => {
	return (
		<div className="cards">
			<div className="label">
				<div className="name">{name}</div>
				<div className="icons">
					{languages.map((i) => {
						return <img src={i} alt="logo"></img>;
					})}
				</div>
			</div>
			<div className="card-container">
				<div className="image-container">
					<img src={image} className="image" alt="proj" />
				</div>
				<div className="buttons">
					<a href={demo} target="_blank" rel="noopener noreferrer">
						<CustomButton>
							Preview
							<img src={externalLink} className="icon" alt="proj" />
						</CustomButton>
					</a>
					<a href={git} target="_blank" rel="noopener noreferrer">
						<CustomButton isGithub>
							code on
							<img src={githubik} className="icon" alt="proj" />
						</CustomButton>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
