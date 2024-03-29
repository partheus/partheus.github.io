const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const CleanCSS = require("clean-css");


const {
  getAllPosts,
  getCategoryList
} = require('./config/collections')

const {
  readableDate,
  getFirstCategory,
  getFilterTagList,
  getArticleYear,
  randomizeArray
} = require('./config/filters')

const {
  imageShortcode
} = require('./config/shortcodes')


module.exports = function(eleventyConfig) {

  /*================================*/
  /*   plugins and configurations   */
  /*================================*/
  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
    excerpt_alias: 'excerpt'
  })

  /*=================*/
  /*   Minify CSS    */
  /*=================*/
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  /*===================================================*/
  /* files that need to be copied to the build folder  */
  /*===================================================*/
  eleventyConfig.addPassthroughCopy('./src/assets/social-image.jpg')
  eleventyConfig.addPassthroughCopy('./src/assets/icons')
  eleventyConfig.addPassthroughCopy('./src/assets/fonts')
  eleventyConfig.addPassthroughCopy('./src/assets/favicons')
  eleventyConfig.addPassthroughCopy('./src/assets/img')
  eleventyConfig.addPassthroughCopy('./src/assets/videos')
  eleventyConfig.addPassthroughCopy({'./src/assets/favicons/favicon.ico' : '/favicon.ico'})
  eleventyConfig.addPassthroughCopy({'./src/.htaccess' : '/.htaccess'})
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy({
      'node_modules/svg-icon-sprite/dist/svg-icon-sprite.js': 'assets/svg-icon-sprite.js'
  })


  /*=================*/
  /*     Layouts     */
  /*=================*/
  eleventyConfig.addLayoutAlias('page', 'layouts/page')
  eleventyConfig.addLayoutAlias('article', 'layouts/article')
  eleventyConfig.addLayoutAlias('base', 'layouts/base')
  eleventyConfig.addLayoutAlias('slim', 'layouts/slim')


  /*=================*/
  /*   Collections   */
  /*=================*/
  eleventyConfig.addCollection('blog', getAllPosts)
  eleventyConfig.addCollection('categoryList', getCategoryList)

  /*=================*/
  /*     Filters     */
  /*=================*/
  eleventyConfig.addFilter('readableDate', readableDate)
  eleventyConfig.addFilter('getFirstCategory', getFirstCategory)
  eleventyConfig.addFilter('getFilterTagList', getFilterTagList)
  eleventyConfig.addFilter('getArticleYear', getArticleYear)
  eleventyConfig.addFilter('randomizeArray', randomizeArray)

  /*=================*/
  /*    shortcodes   */
  /*=================*/
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode)

  eleventyConfig.addNunjucksGlobal("BUILD_DATE", process.env.BUILD_DATE);

  // Add current year to global data object
  eleventyConfig.addGlobalData('currentYear', new Date().getFullYear());


  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['njk', 'md', 'html'],
    markdownTemplateEngine: 'njk',
    pathPrefix: '/'
  }
}
