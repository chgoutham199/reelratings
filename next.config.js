/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'image.tmdb.org',
                pathname:'**',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig
