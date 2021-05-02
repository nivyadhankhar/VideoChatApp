import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div class="d-flex justify-content-between">
				<Fade left cascade delay={500}>
					<img
						alt="Interface"
						src="https://secure.skypeassets.com/content/dam/scom/all-features/skype-web/windows-edge-skype-web-main.png"
					/>
				</Fade>
				<Fade right cascade delay={500}>
					<div>
						<h1>
							Stay connected anywhere with <strong>VChat</strong>{" "}
							online
						</h1>
						<h4 className="pt-5">
							Enjoy the full effortless experience from your
							browser without having to install the application on
							your computer or mobile phone.
						</h4>
					</div>
				</Fade>
			</div>
			<div class="d-flex justify-content-center mt-5 pt-2">
				<Fade bottom delay={1500}>
					<Link to="/call">
						<button type="button" class="btn btn-primary">
							Click Here!
						</button>
					</Link>
				</Fade>
			</div>
		</>
	);
};

export default Home;
