// @flow

import * as React from "react";
import Helmet from "react-helmet";

import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import GTMBody from "../components/GTMBody";
import { GTM_DEVELOP, GTM_ID, GTM_LIVE } from "../config";
import { isEnvLive } from "../utils/env";
// Temporarily disabled
// import { initLogRocket } from "../utils/log-rocket";

/**
 * IMPORT MAIN.CSS
 *
 * Using 'require' instead of 'import' as this file is dynamically generated outside of Gatsby by PostCSS
 * Turning off lint checking as file may not be created yet
 */
/* eslint-disable import/no-unresolved */
// $FlowFixMe
require("../../build/styles/main.css");
/* eslint-enable import/no-unresolved */

// Temporarily disable
// initLogRocket();

declare var graphql: Function;
export const pageQuery = graphql`
	fragment ContentPreview on JavascriptFrontmatter {
		fields {
			slug
		}
		frontmatter {
			title
			description
			dateCreated
			dateUpdated
			cover {
				childImageSharp {
					sizes(maxHeight: 400) {
						...GatsbyImageSharpSizes
					}
				}
			}
		}
	}

	fragment Content on JavascriptFrontmatter {
		fields {
			slug
		}
		frontmatter {
			title
			description
			dateCreated
			dateUpdated
			type
			cover {
				childImageSharp {
					sizes(maxWidth: 1920) {
						...GatsbyImageSharpSizes
					}
				}
			}
			shareImage {
				childImageSharp {
					resolutions(width: 1200, height: 630) {
						...GatsbyImageSharpResolutions_noBase64
					}
				}
			}
		}
	}

	fragment ContentListResult on JavascriptFrontmatterConnection {
		edges {
			node {
				...ContentPreview
			}
		}
	}

	fragment ContentList on RootQueryType {
		contentListResult: allJavascriptFrontmatter(
			filter: { frontmatter: { type: { eq: "article" }, unlisted: { ne: true } } }
			sort: { order: DESC, fields: [frontmatter___dateUpdated] }
			limit: 9
		) {
			...ContentListResult
		}
	}

	fragment CurrentContent on RootQueryType {
		currentContent: javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
			...Content
		}
	}
`;

type LayoutProps = {
	children: () => React.Node,
	location: {
		pathname: string,
	},
};

const Layout = (props: LayoutProps) => (
	<div>
		<Helmet>
			<html lang="en" />
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

			{/* Fonts */}

			<link
				href="https://fonts.googleapis.com/css?family=Roboto+Slab|Fira+Mono|Roboto:400,400i,700,700i"
				rel="stylesheet"
			/>

			{/* Google Tag Manager */}

			<script>{isEnvLive() ? GTM_LIVE : GTM_DEVELOP}</script>

			{/* Icons */}

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
			<link rel="manifest" href="/site.webmanifest?v=1" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#01dfba" />
			<link rel="shortcut icon" href="/favicon.ico?v=1" />
			<meta name="msapplication-TileColor" content="#01dfba" />
			<meta name="theme-color" content="#ffffff" />
		</Helmet>
		<GTMBody id={GTM_ID} />
		<GlobalHeader />
		<main>{props.children()}</main>
		<GlobalFooter currentPath={props.location.pathname} />
	</div>
);

export default Layout;
