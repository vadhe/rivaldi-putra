// .eleventy.js
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("index.css");

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
