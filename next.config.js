module.exports = {
  // Define custom routes to match your existing structure
  async rewrites() {
    return [
      // Map URLs from the root to your existing structure
      { source: "/images/:path*", destination: "/images/:path*" },
      { source: "/assets/:path*", destination: "/assets/:path*" },
      { source: "/components/:path*", destination: "/components/:path*" },
      { source: "/app.css", destination: "/src/app.css" },
      { source: "/app.js", destination: "/src/app.js" },
      { source: "/app.test.js", destination: "/src/app.test.js" },
      { source: "/index.css", destination: "/src/index.css" },
      { source: "/index.js", destination: "/src/index.js" },
      { source: "/reportwebvitals.js", destination: "/src/reportwebvitals.js" },
      { source: "/setuptest.js", destination: "/src/setuptest.js" },
      { source: "/style.css", destination: "/src/style.css" },

      // Add more routes as needed
    ];
  },

  webpack(config) {
    // Add .ts and .tsx as valid resolvable extensions
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
