/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images:{
        loader: "custom",
        loaderFile: "./loader.js",
        domains:['i.ytimg.com']
    }
};

export default nextConfig;
