// .eleventy.js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("index.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
