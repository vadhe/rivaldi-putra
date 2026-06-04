// .eleventy.js
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("index.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
