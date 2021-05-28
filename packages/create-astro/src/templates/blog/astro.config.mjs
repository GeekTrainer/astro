export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // astroRoot: './src',   // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  extensions: {
    // '.jsx': 'react',    // Set this to "preact" or "react" to determine what *.jsx files should load
  },
  buildOptions: {
    // site: '',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    // sitemap: true,      // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    // port: 3000,         // The port to run the dev server on.
    // tailwindConfig: '', // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
  },
};