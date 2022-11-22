/** @type {import('next').NextConfig} */
const nextConfig = {
  
  typescript:{
    ignoreBuildErrors:true
  },
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['lh3.googleusercontent.com', 'upload.wikimedia.org']
  }
}

module.exports = nextConfig
