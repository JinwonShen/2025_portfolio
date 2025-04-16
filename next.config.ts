import path from 'node:path'
import type { Configuration } from 'webpack'

const nextConfig = {
  webpack(config: Configuration) {
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        src: path.resolve(__dirname, 'src'),
        '@': path.resolve(__dirname, 'src'), // Added alias for '@'
      },
    }
    return config
  },
}

export default nextConfig