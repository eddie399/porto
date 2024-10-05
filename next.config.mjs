import { fileURLToPath } from 'url';
import { dirname } from 'path';
import withImages from 'next-images';

/** @type {import('next').NextConfig} */
const nextConfig = {};

/*
export default withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(pdf|png|svg|gif|)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/pdf/',
          publicPath: '/_next/static/pdf/',
        },
      },
    });

    return config;
  },
});


export default nextConfig
*/
import path from 'path';

export default {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/pdf/',
          publicPath: '/_next/static/pdf/',
        },
      },
    });

    return config;
  },
};