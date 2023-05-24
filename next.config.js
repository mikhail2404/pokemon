/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.pokemon.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
