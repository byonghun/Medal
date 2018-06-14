module.exports = ({ platform }, defaults) => ({
  entry: `./index.js`,
  module: {
    ...defaults.module,
    rules: [
      ...defaults.module.rules,
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    ...defaults.resolve,
    extensions: [...defaults.resolve.extensions, '.jsx', '.js'],
    alias: {
      ...defaults.resolve.alias
    }
  }
});
