import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { BookOpen, Plug, Satellite, Terminal, Wallpaper } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			{...baseOptions}
			tree={source.pageTree}
			sidebar={{
				tabs: [
					{
						title: 'Guide',
						description: 'Guide to start using Poqk',
						icon: <BookOpen className="size-5 opacity-50" />,
						url: '/docs/guide',
					},
					{
						title: 'API',
						description: 'API reference for integration',
						icon: <Satellite className="size-5 opacity-50" />,
						url: '/docs/api',
					},
					{
						title: 'CLI',
						description: 'Commands and usage details',
						icon: <Terminal className="size-5 opacity-50" />,
						url: '/docs/cli',
					},
					{
						title: 'GUI',
						description: 'Overview of graphical interface',
						icon: <Wallpaper className="size-5 opacity-50" />,
						url: '/docs/gui',
					},
					{
						title: 'Plugins',
						description: 'Extend Poqk with custom plugins',
						icon: <Plug className="size-5 opacity-50" />,
						url: '/docs/plugins',
					},
				],
				collapsible: false,
			}}
			githubUrl="https://github.com/poqk/poqk"
		>
			{children}
		</DocsLayout>
	);
}
