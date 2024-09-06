/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
      // Thêm loader cho các file .frag và .vert
      config.module.rules.push({
        test: /\.(frag|vert)$/,
        type: 'asset/source',
      });
  
      return config;
    },
    reactStrictMode: false,
  };
  
  export default nextConfig;