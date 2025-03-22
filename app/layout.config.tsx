import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<>
				<svg
					width="24"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
					aria-label="Logo"
				>
					<title>Logo</title>
					<circle
						cx={12}
						cy={12}
						r={12}
						fill="currentColor"
					/>
				</svg>
				Poqk
			</>
		),
	},
	links: [
		{
			type: 'menu',
			text: 'Documentation',
			url: '/docs/guide',
			items: [
				{
					text: 'Guide',
					url: '/docs/guide',
				},
				{
					text: 'API',
					url: '/docs/api',
				},
				{
					text: 'CLI',
					url: '/docs/cli',
				},
				{
					text: 'GUI',
					url: '/docs/gui',
				},
			],
		},
	],
};
