module.exports = {
  mode: 'development',
  devtool: false,
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle-2.js'
  },
  resolve: {mainFields: ['module']} // This may be unneeded because 'module' > 'main' by default.
};
