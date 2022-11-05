/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "api.lorem.space",
      "placeimg.com",
      "st.shop-serpantin.ru",
      "planetasharov.ru",
      "www.oblako-sharov.ru",
      "funbaby.pro",
      "cdn.lorem.space",
    ],
  },
};
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

module.exports = withPWA(nextConfig);
