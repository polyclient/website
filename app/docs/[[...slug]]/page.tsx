import { source } from '@/lib/source';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) {
		notFound();
	}

	const MdxContent = page.data.body;

	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
			tableOfContent={{
				style: 'clerk',
			}}
			editOnGithub={{
				repo: 'website',
				owner: 'poqk',
				sha: 'master',
				path: `content/docs/${page.file.path}`,
			}}
			lastUpdate={page.data.lastModified}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MdxContent
					components={{
						...defaultMdxComponents,
						// this allows you to link to other pages with relative file paths
						a: createRelativeLink(source, page),
						// you can add other MDX components here
					}}
				/>
			</DocsBody>
		</DocsPage>
	);
}

export function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) {
		notFound();
	}

	return {
		title: page.data.title,
		description: page.data.description,
	};
}
