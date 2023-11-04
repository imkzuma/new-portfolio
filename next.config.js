/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*
    for next export command to generate static html. 
    it for google cloud app engine
  */
  distDir: 'build'
}

module.exports = nextConfig
