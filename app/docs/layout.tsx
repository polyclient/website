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

				return {
					...option,
					icon: <div className="rounded-md p-1 ring-2 ring-fd-accent bg-fd-accent [&_svg]:size-5">{node.icon}</div>,
				};
			},
		},
		collapsible: false,
	},
	githubUrl: 'https://github.com/polyclient/polyclient',
};

export default function Layout({ children }: { children: ReactNode }) {
	return <DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>;
}
