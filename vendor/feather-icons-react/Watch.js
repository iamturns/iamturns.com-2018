import React from "react";

const Watch = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-watch"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={7} />
		<path d="M12 9v3l1.5 1.5m3.01 3.85l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
	</svg>
);

export default Watch;
