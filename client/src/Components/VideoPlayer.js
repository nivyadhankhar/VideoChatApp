import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "./VideoPlayer.css";

const VideoPlayer = () => {
	const {
		name,
		callAccepted,
		myVideo,
		userVideo,
		callEnded,
		stream,
		call,
	} = useContext(SocketContext);
	return (
		<div className="container">
			{/* Own Video */}
			<div className="row paper">
				{stream && (
					<div className="col-md-5 col-sm-12">
						<h5 className="m-3 p-3">{name || "Name"}</h5>
						<video
							playsInline
							muted
							ref={myVideo}
							autoPlay
							className="video"
						/>
					</div>
				)}
				{/* Other's video */}
				{callAccepted && !callEnded && (
					<div className="col-md-5 offset-md-1 col-sm-12">
						<h5 className="m-3 p-3">{call.name || "Name"}</h5>
						<video
							playsInline
							ref={userVideo}
							autoPlay
							className="video"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default VideoPlayer;
