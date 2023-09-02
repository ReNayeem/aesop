/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co",
                // ...
            },
            {
                protocol: "https",
                hostname: "https://www.pexels.com/",
                // ...
            },
        ],
    },
};
