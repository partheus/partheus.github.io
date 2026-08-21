// config/shortcodes.js
const path = require('path');

// Create a lazy-loaded Image module
let imageModule = null;
async function getImage() {
  if (!imageModule) {
    imageModule = await import('@11ty/eleventy-img');
  }
  return imageModule;
}

module.exports = function(eleventyConfig) {
  // Use addNunjucksAsyncShortcode for Nunjucks async shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", async function(src, alt, className) {
    try {
      const Image = await getImage();
      
      const metadata = await Image.default(src, {
        widths: [300, 600, 900, 1200],
        formats: ['webp', 'jpeg'],
        outputDir: './_site/img/',
        urlPath: '/img/',
        filenameFormat: function(id, src, width, format, options) {
          const extension = path.extname(src);
          const name = path.basename(src, extension);
          return `${name}-${width}w.${format}`;
        }
      });

      const imageAttributes = {
        alt,
        sizes: "100vw",
        loading: "lazy",
        decoding: "async",
        class: className || ""
      };

      return Image.default.generateHTML(metadata, imageAttributes);
    } catch (error) {
      console.error('Error generating image:', error);
      return `<img src="${src}" alt="${alt}" class="${className || ''}">`;
    }
  });
};