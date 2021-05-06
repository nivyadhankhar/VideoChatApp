import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import Main from "./Components/Main";
import { ContextProvider } from "./SocketContext";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="container pt-5">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<ContextProvider>
						<Route path="/call" component={Main} />
					</ContextProvider>
					<Route component={Error} />
				</Switch>
			</div>
		</>
	);
};

export default App;
