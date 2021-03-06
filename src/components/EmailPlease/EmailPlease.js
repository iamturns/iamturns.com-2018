// @flow

import * as React from "react";

import ArrowRight from "../../../vendor/feather-icons-react/ArrowRight";

type EmailList = "default" | "doing-javascript" | "javascript-roundup";

type EmailPleaseProps = {
	list?: EmailList,
	id?: string,
	hideFooter?: boolean,
};

const EmailPlease = ({ list = "default", id, hideFooter = false }: EmailPleaseProps) => (
	<div>
		<form action={getFormAction(list)} method="post" className="flex items-center mt-4">
			<div className="flex-1">
				<input
					type="email"
					name="EMAIL"
					placeholder="Enter your email"
					className="input w-full border-turtle border-r-0 rounded-r-none"
				/>
			</div>
			<div className="w-12 flex">
				<button
					name="subscribe"
					type="submit"
					className="button border-turtle border-l-0 w-full rounded-l-none shadow"
				>
					<div className="flex justify-center">
						<ArrowRight className="w-4 h-4" />
					</div>
				</button>
			</div>
			{id && <input type="hidden" name="ID" value={id} />}
		</form>
		{!hideFooter && (
			<div className="text-xs text-center pt-2 text-turtle-darker">
				I know, emails suck. I promise to send only quality stuff. And if not, just unsubscribe!
			</div>
		)}
	</div>
);

export default EmailPlease;

function getFormAction(list: EmailList): string {
	const listId = getListId(list);
	return `https://iamturns.us17.list-manage.com/subscribe/post?u=5d5780fe2d3de49f7c38306f2&amp;id=${listId}`;
}

function getListId(list: EmailList): string {
	switch (list) {
		case "doing-javascript":
			return "bdea2a1aea";
		case "javascript-roundup":
			return "970fb402d2";
		case "default":
		default:
			return "46266d5c5e";
	}
}
