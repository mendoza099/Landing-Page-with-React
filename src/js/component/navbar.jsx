import React from "react";

const Navbar = () => {
	return (
		<>
			<nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
				<div ClassName="container-fluid">
					<a ClassName="navbar-brand" href="#">
						Navbar w/ text
					</a>
					<button
						ClassName="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span ClassName="navbar-toggler-icon"></span>
					</button>
					<div ClassName="collapse navbar-collapse" id="navbarText">
						<ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
							<li ClassName="nav-item">
								<a
									ClassName="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li ClassName="nav-item">
								<a ClassName="nav-link" href="#">
									About
								</a>
							</li>
							<li ClassName="nav-item">
								<a ClassName="nav-link" href="#">
									Service
								</a>
							</li>
							<li ClassName="nav-item">
								<a ClassName="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
						<span ClassName="navbar-text">Start Bootstrap</span>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
