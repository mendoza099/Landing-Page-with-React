import React from "react";

const Jumbotron = () => {
	return (
		<>
			<div ClassName="jumbotron">
				<h1 ClassName="display-4">Hello, world!</h1>
				<p ClassName="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr ClassName="my-4" />
				<p>
					It uses utility ClassNamees for typography and spacing to
					space content out within the larger container.
				</p>
				<p ClassName="lead">
					<a
						ClassName="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		</>
	);
};

export default Jumbotron;
