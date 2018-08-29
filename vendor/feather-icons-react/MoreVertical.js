import React from "react";

const MoreVertical = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-more-vertical"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={1} />
		<circle cx={12} cy={5} r={1} />
		<circle cx={12} cy={19} r={1} />
	</svg>
);

export default MoreVertical;
