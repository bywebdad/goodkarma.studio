/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Включение автономного режима для Docker
  output: 'standalone',
  
  // Optimize for modern browsers only
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
    // Disable SWC transforms for modern features
    swcTraceProfiling: false,
  },
  
  // Configure SWC to avoid unnecessary transformations
  swcMinify: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    // Remove React dev tools in production
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
  
  // Optimize webpack for modern browsers
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Target modern browsers to avoid polyfills
      config.target = ['web', 'es2020'];
      
      // Disable specific Babel transformations that are causing bloat
      config.module.rules.forEach((rule) => {
        if (rule.use && rule.use.loader === 'next-swc-loader') {
          rule.use.options = {
            ...rule.use.options,
            jsc: {
              ...rule.use.options?.jsc,
              target: 'es2020',
              // Disable class transformation
              transform: {
                ...rule.use.options?.jsc?.transform,
                legacyDecorator: false,
                decoratorMetadata: false,
              },
            },
          };
        }
      });
    }
    
    return config;
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
  },
  
  // Настройка порта для разработки
  devServer: {
    port: process.env.PORT || 3001,
  },
}

export default nextConfig
