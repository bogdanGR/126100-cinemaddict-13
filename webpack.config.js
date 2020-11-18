const path = require(`path`);
//const MomentLocalesWebpackPlugin = require(`moment-locales-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname,'public')
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.resolve(__dirname,'public'),
    publicPath: `http://localhost:8080/`,
    compress: true,
    watchContentBase: true
  },
  plugins: [
    // new MomentLocalesWebpackPlugin({
    //   localesToKeep: [`es-us`]
    // })
  ]
};
