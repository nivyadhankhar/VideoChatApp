import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { ContextProvider } from "./SocketContext";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="container pt-5">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<ContextProvider>
						<Route exact path="/call" component={Main} />
					</ContextProvider>
				</Switch>
			</div>
		</>
	);
};

export default App;
