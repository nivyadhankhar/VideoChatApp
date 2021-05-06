import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { ContextProvider } from "./SocketContext";

ReactDOM.render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
