import React, { useContext } from "react";
import { Button, makeStyles } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
	black: {
		color: "black",
	},
}));

const Notifications = () => {
	const { answerCall, call, callAccept } = useContext(SocketContext);
	const classes = useStyles();
	return (
		<>
			{call.isReceivingCall && !callAccept && (
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<h3 className={classes.black}>{call.name} is calling:</h3>
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
