export const paths = {
	home: {
		path: "/",
		getHref: () => "/",
	},
	about: {
		path: "/about",
		getHref: () => "/about",
	},
	auth: {
		userInfoSetup: {
			path: "/user-info-setup",
			getHref: () => "/user-info-setup",
		},
		register: {
			path: "/sign-up",
			getHref: () => "/sign-up",
		},
		login: {
			path: "/sign-in",
			getHref: () => "/sign-in",
		},
	},
	app: {
		// tickets: {
		// 	path: "/tickets",
		// 	getHref: () => "/tickets",
		// },
		// ticket: {
		// 	path: "/tickets/:ticketId",
		// 	getHref: (id: string) => `/tickets/${id}`,
		// },
		// ticketEdit: {
		// 	path: "/tickets/:ticketId/edit",
		// 	getHref: (id: string) => `/tickets/${id}/edit`,
		// },
	},
} as const;
