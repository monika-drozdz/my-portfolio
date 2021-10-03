import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isOpen, setIsOpen }) => {
	return (
		<div className="hamburger-cont">
			<div
				className={isOpen ? "hamburger open" : "hamburger"}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default Hamburger;

// className={displayNavbar ? "hamburger open" : "hamburger"}
// 				onClick={() => setDisplayNavbar(!displayNavbar)}
