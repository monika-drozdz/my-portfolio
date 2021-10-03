import React from "react";
import { Link } from "react-scroll";

import "./Navbar.scss";
const Navbar = ({ isOpen }) => {
	return (
		<div className={isOpen ? "navbar open" : "navbar"}>
			<Link to="about" spy={true} smooth={true}>
				ABOUT ME
			</Link>
			<Link to="technologies" spy={true} smooth={true}>
				TECHNOLOGIES
			</Link>
			<Link to="projects" spy={true} smooth={true}>
				PROJECTS
			</Link>
			<Link to="contact" spy={true} smooth={true}>
				CONTACT
			</Link>
		</div>
	);
};

export default Navbar;
