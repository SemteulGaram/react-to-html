/** @type {import('next').NextConfig} */
const withOptimizedImages  = require('next-optimized-images');

module.exports = withOptimizedImages({
  // optimizedImages options
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
  removeOriginalExtension: false,
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75,
  },

  // Next.js configuration 
  reactStrictMode: true,
  images: {
    loader: 'custom',
    disableStaticImages: true,
  },
});
