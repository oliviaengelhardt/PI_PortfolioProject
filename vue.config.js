const rupture = require("rupture");
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [rupture()],
      }
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
    },
    // when using the entry-only string format,
    // template is inferred to be 'public/about.html'
    // and falls back to 'public/index.html' if not found.
    // Output filename is inderred to be 'about.html'.
    subpage: 'src/about/main.js'
  }
};
