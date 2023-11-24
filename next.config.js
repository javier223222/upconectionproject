/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"res.cloudinary.com",
            },
            {
                protocol:"https",
                hostname: "res-console.cloudinary.com"
            }
        ]
    }
}

module.exports = nextConfig
