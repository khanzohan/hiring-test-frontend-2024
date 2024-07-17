const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point file
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output path
  },
  mode: 'development', // Can be 'production' as well
};