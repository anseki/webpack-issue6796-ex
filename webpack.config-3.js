module.exports = {
  mode: 'development',
  devtool: false,
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle-3.js'
  },
  resolve: {mainFields: ['module']}, // This may be unneeded because 'module' > 'main' by default.
  module: {
    rules: [
      {
        test: require('path').resolve(__dirname, 'node_modules'),
        resolve: {mainFields: ['module']}
      }
    ]
  }
};
