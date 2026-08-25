import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images5.alphacoders.com",
        port:""
      }
    ]
  }
};

export default nextConfig;
