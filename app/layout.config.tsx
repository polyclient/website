import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Plug, Satellite, Terminal, Wallpaper } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	githubUrl: 'https://github.com/poqk/poqk',
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
					icon: <BookOpen />,
					text: 'Getting Started',
					description: 'Get familiar with Poqk installation, configuration, and common database management procedures.',
					url: '/docs/guide',
					menu: {
						className: 'hidden md:block md:row-span-2',
						banner: (
							<div className="-mx-3 -mt-3 p-3">
								<img
									src="/banner.png"
									alt="Poqk"
									className="w-full h-full rounded-lg"
									aria-label="Poqk"
									style={{
										maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
									}}
								/>
							</div>
						),
					},
				},
				{
					icon: <Satellite />,
					text: 'API Reference',
					description: 'Learn the Poqk API for integration purposes.',
					url: '/docs/api',
					menu: {
						className: 'lg:col-start-2',
					},
				},
				{
					icon: <Terminal />,
					text: 'CLI',
					description: 'Learn Poqk CLI commands and usage details.',
					url: '/docs/cli',
					menu: {
						className: 'lg:col-start-2 lg:row-start-2',
					},
				},
				{
					icon: <Wallpaper />,
					text: 'GUI',
					description: 'Learn the graphical user interface and its functionalities.',
					url: '/docs/gui',
					menu: {
						className: 'lg:col-start-3 lg:row-start-1',
					},
				},
				{
					icon: <Plug />,
					text: 'Plugins',
					description: 'Learn to develop and utilize custom plugins for Poqk.',
					url: '/docs/plugins',
					menu: {
						className: 'lg:col-start-3 lg:row-start-2',
					},
				},
			],
		},
		{
			text: 'Plugins',
			url: '/plugins',
		},
	],
};
