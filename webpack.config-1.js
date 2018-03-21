module.exports = {
  mode: 'development',
  devtool: false,
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle-1.js'
  },
  resolve: {mainFields: ['main']}
};
