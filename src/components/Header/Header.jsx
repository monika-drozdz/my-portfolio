import React from "react";
import github from "../../assets/images/FaGithub.svg";
import arrow from "../../assets/images/big-arrow.svg";
import linkedin from "../../assets/images/FaLinkedin.svg";
import { Link } from "react-scroll";

import SocialIcon from "../SocialIcon/SocialIcon";

import "./Header.scss";
const Header = () => {
	return (
		<header className="App-header" id="home">
			<div className="social-links">
				<SocialIcon link="https://github.com/monika-drozdz">
					{github}
				</SocialIcon>
				<SocialIcon link="https://linkedin.com/in/monika-dróżdż">
					{linkedin}
				</SocialIcon>
			</div>

			<h1>Monika Dróżdż</h1>
			<h2>PORTFOLIO</h2>
			<Link to="about" spy={true} smooth={true}>
				<img src={arrow} className="arrow" alt="logo" />
			</Link>
		</header>
	);
};

export default Header;
