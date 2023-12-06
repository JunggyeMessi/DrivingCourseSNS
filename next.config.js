/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  compiler: {
    // ssr, displayName true가 기본값으로 켜진다.
    styledComponents: true,
  },
}

module.exports = nextConfig