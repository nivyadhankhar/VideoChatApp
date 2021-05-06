import React from "react";
import errorSvg from "../assets/404-4.svg";
import "./Error.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<>
			<div className="main">
				<Fade delay={500}>
					<img src={errorSvg} alt="404 Not Found"></img>
				</Fade>
			</div>

			<div className="main-btn">
				<Fade bottom delay={1000}>
					<Link to="/">
						<button type="button" className="btn btn-warning">
							Go Home
						</button>
					</Link>
				</Fade>
			</div>
		</>
	);
};

export default Error;
