import React from "react";
import Notifications from "./Notifications";
import Options from "./Options";
import VideoPlayer from "./VideoPlayer";
import Fade from "react-reveal/Fade";

const Main = () => {
	return (
		<div className="container d-flex align-items-center flex-column">
			<Fade delay={500} duration={800}>
				<VideoPlayer />
				<Options>
					<Notifications />
				</Options>
			</Fade>
		</div>
	);
};

export default Main;
