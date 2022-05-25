import React from "react";
import Jumbotron from "./jumborom";

//include images into your bundle
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
		</>
	);
};

export default Home;
