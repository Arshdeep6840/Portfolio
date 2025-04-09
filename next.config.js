/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static export
    images: {
      unoptimized: true, // Disable Next.js image optimization for static export
    },
    basePath: '/your-repo-name', // Use your GitHub repo name here
    assetPrefix: '/your-repo-name',
  };
  
  module.exports = nextConfig;
  