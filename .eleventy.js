module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"src/images": "images"});

    return {
      dir: {
        input: "src",
        output: "dist",
        includes: "_includes",
        data: "_data"
      },
      templateFormats: ['njk', 'md', 'html'],
    //   passthroughtFileCopy: true
    }
  };