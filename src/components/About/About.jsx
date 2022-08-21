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
			<h4>Hello, I am Monika,</h4>
			<p>Front-end developer from Poland</p>
			<br></br>
			<p>
				I am familiar with Angular, RxJS, NgRx and SCSS. Additionally, I often
				use Highcharts library for data visualization.
			</p>
			<br></br>
			<p>
				I am perceptive and patient person who combines strong analytical skills
				with a creative approach to problems. I develop my creativity through
				working on DIY projects - discovering how things are made and trying to
				make them on my own (e.g. macrame, handmade natural soap and soy
				candles). I have been learning Figma and I used this tool to design
				custom minimalist labels for candles and mockups for my non-commercial
				projects such as e-commerce shop built with ReactJS, React Router, Redux
				& Firebase which I'm still working on.
			</p>
			<br></br>
			<p>
				Moreover, I have experience working in open-source software Blender 2.8
				(e.g. architectural visualizations). My next challenge is to combine
				this skill with Three.js (JavaScript 3D library) in my future projects.
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
