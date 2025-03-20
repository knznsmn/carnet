import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export', // Add this line to enable static export
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
