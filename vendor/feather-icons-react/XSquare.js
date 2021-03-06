import React from "react";

const XSquare = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-x-square"
		width="1em"
		height="1em"
		{...props}
	>
		<rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
		<path d="M9 9l6 6m0-6l-6 6" />
	</svg>
);

export default XSquare;
