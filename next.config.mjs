import { createMDX } from 'fumadocs-mdx/next';

const withMdx = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	output: 'export',
	images: {
		unoptimized: true,
	},
};

export default withMdx(config);
