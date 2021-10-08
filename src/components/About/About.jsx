import React from "react";
import resume from "../../docs/resume.pdf";
import linkedin from "../../assets/images/FaLinkedin.svg";

import SocialIcon from "./../SocialIcon/SocialIcon";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./About.scss";
const About = () => {
	return (
		<div className="about-container" id="about">
			<SectionTitle>About me</SectionTitle>
			<h4>Hello, I am Monika</h4>
			<p>
				I am an aspiring frontend enthusiast looking for the first work
				experience as a Front-end Web Developer.
			</p>
			<br></br>
			<p>
				I am perceptive and patient person who combines strong analytical skills
				with a creative approach to problems. I develop my creativity through
				working on DIY projects - discovering how things are made and trying to
				make them on my own (e.g. macrame, handmade natural soap and soy
				candles). I have been learning Figma and I used this tool to design
				custom minimalist labels for candles. Currently I am working on
				e-commerce shop using ReactJS, React Router, Redux & Firebase.
			</p>
			<br></br>
			<p>
				Moreover, I have experience working in open-source software Blender 2.8
				(e.g. architectural visualizations). My next challenge is to combine
				this skill with Tree.js (JavaScript 3D library) in my future projects.
			</p>
			<br></br>
			<p>
				You can read more about my experience, skills, education and much more
				in the PDF attached bellow:
			</p>

			<a
				href={resume}
				className="resume"
				target="_blank"
				rel="noopener noreferrer"
			>
				RESUME
			</a>

			<br></br>
			<br></br>

			<div className="about-icon">
				<p>Check out my Linkedin profile:</p>
				<SocialIcon link="https://linkedin.com/in/monika-dróżdż">
					{linkedin}
				</SocialIcon>
			</div>
		</div>
	);
};

export default About;
