// 11ty Plugins
// const socialImages = require("@11tyrocks/eleventy-plugin-social-images");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

// Helper packages
const slugify = require("slugify");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const CleanCSS = require("clean-css");

// Local utilities/data
const packageVersion = require("./package.json").version;
const { DateTime } = require("luxon");

const fs = require("fs");
const NOT_FOUND_PATH = "public/404.html";



module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(socialImages);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/manifest.json");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("./src/favicons");


  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["entry", "nav", "post", "posts", "pages"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH);
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });


  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("packageVersion", () => `v${packageVersion}`);

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }

    return slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    });
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      class: "irevamp-anchor",
      space: false,
    }),
    level: [1, 2, 3, 4, 5],
    slugify: (str) =>
      slugify(str, {
        lower: true,
        strict: true,
        remove: /["]/g,
      }),

  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};
