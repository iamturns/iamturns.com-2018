import React from "react";

const Droplet = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-droplet"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
	</svg>
);

export default Droplet;
