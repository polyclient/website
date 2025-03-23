import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

const docsLayoutOptions: DocsLayoutProps = {
	...baseOptions,
	tree: source.pageTree,
	sidebar: {
		tabs: {
			transform(option, node) {
				const meta = source.getNodeMeta(node);
				if (!meta) {
					return option;
				}

				const color = `var(--${meta.file.dirname}-color, var(--color-fd-foreground))`;

				return {
					...option,
					icon: (
						<div
							className="rounded-md p-1 ring-2 [&_svg]:size-5"
							style={
								{
									color,
									border: `1px solid color-mix(in oklab, ${color} 50%, transparent)`,
									'--tw-ring-color': `color-mix(in oklab, ${color} 20%, transparent)`,
								} as object
							}
						>
							{node.icon}
						</div>
					),
				};
			},
		},
		collapsible: false,
	},
	githubUrl: 'https://github.com/poqk/poqk',
};

export default function Layout({ children }: { children: ReactNode }) {
	return <DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>;
}
