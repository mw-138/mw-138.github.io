/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    tmdbApiKey: process.env.TMDB_API_KEY,
  },
};

export default nextConfig;
