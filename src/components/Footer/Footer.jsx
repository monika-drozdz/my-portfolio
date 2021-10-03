import github from "../../assets/images/FaGithub.svg";
import linkedin from "../../assets/images/FaLinkedin.svg";
import myLogo from "../../assets/images/my-logo.svg";
import { Link } from "react-scroll";

import SocialIcon from "./../SocialIcon/SocialIcon";
import "./Footer.scss";
const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<div className="info-container">
				<div className="logo">
					<Link to="home" spy={true} smooth={true}>
						<img src={myLogo} alt="logo" />
					</Link>
				</div>
				<div className="information">
					<div className="contact">
						<p>Monika Dróżdż</p>
						<p>phone: +48 888 251 109</p>
						<p>e-mail: monika.anna.drozdz@gmail.com</p>
					</div>
				</div>
				<div className="footer-map">
					<Link to="about" spy={true} smooth={true}>
						ABOUT ME
					</Link>
					<div className="dot">•</div>
					<Link to="projects" spy={true} smooth={true}>
						PROJECTS
					</Link>
					<div className="dot">•</div>

					<Link to="technologies" spy={true} smooth={true}>
						TECHNOLOGIES
					</Link>
				</div>
				<div className="social-links">
					<SocialIcon link="https://github.com/monika-drozdz">
						{github}
					</SocialIcon>
					<SocialIcon link="https://linkedin.com/in/monika-dróżdż">
						{linkedin}
					</SocialIcon>
				</div>
			</div>

			<span>Copyright © 2021 Monika Dróżdż</span>
		</footer>
	);
};

export default Footer;
