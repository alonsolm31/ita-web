/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        "fabulous-dogs-e1c598da6a.media.strapiapp.com"
      }
    ],
  },
}

module.exports = nextConfig
