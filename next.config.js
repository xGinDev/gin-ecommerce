/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    experimental: {
        appDir: true,
      },
      images: {
        domains: ['i.annihil.us', 'rickandmortyapi.com', 'mydrugs123.web.app'],
      }
}

module.exports = nextConfig
