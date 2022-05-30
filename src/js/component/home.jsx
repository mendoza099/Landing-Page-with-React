import React from "react";
import Card from "./card";
import Footer from "./footer";
import Jumbotron from "./jumborom";

//include images into your bundle
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div>
			<Card/><Card/><Card/><Card/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
