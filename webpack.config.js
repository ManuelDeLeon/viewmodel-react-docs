var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   // A common mistake is not stringifying the "production" string.
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel', __dirname + '/lib/block-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};
