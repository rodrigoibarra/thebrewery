module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("assets/css");
    eleventyConfig.addPassthroughCopy("assets/img");
    eleventyConfig.addPassthroughCopy("assets/fonts");
    return{
        addPassthroughfileCopy: true,
        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "_includes",
            layouts: "_layouts",
            posts: "_posts"
        }
    }

};