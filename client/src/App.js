import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route component={Error} />
			</Switch>
		</>
	);
};

export default App;
