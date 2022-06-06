import React from "react";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotrom.jsx";

//include images into your bundle
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</>
	);
};

export default Home;
