import { baseOptions } from '@/app/layout.config';
import { HomeLayout, type HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import { Library, Plug, Satellite, Terminal, Wallpaper } from 'lucide-react';
import type { ReactNode } from 'react';

const homeLayoutOptions: HomeLayoutProps = {
	...baseOptions,
	links: [
		{
			type: 'menu',
			text: 'Documentation',
			url: '/docs/guide',
			items: [
				{
					icon: <Library />,
					text: 'Getting Started',
					description: 'Get familiar with PolyClient installation, configuration, and common database management procedures.',
					url: '/docs/guide',
					menu: {
						className: 'hidden md:block md:row-span-2',
						banner: (
							<div className="-mx-3 -mt-3 p-3">
								<img
									src="/banner.png"
									alt="PolyClient"
									className="w-full h-full rounded-lg"
									aria-label="PolyClient"
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
					description: 'Learn the PolyClient API for integration purposes.',
					url: '/docs/api',
					menu: {
						className: 'lg:col-start-2',
					},
				},
				{
					icon: <Terminal />,
					text: 'CLI',
					description: 'Learn PolyClient CLI commands and usage details.',
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
					description: 'Learn to develop and utilize custom plugins for PolyClient.',
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

export default function Layout({ children }: { children: ReactNode }) {
	return <HomeLayout {...homeLayoutOptions}>{children}</HomeLayout>;
}
