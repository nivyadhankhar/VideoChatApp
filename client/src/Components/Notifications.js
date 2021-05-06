import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../SocketContext";
const Notifications = () => {
	const { answerCall, call, callAccept } = useContext(SocketContext);

	return (
		<>
			{call.isReceivingCall && !callAccept && (
				<div
					style={{ display: "flex", justifyContent: "space-around" }}
				>
					<h3>{call.name} is calling:</h3>
					<Button
						variant="contained"
						color="primary"
						onClick={answerCall}
					>
						Answer
					</Button>
				</div>
			)}
		</>
	);
};

export default Notifications;
