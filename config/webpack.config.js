const webpack = require('webpack');
const uuidv1 = require('uuid/v1');
const path = require('path');

const env = process.env.NODE_ENV;
const corePath = path.join(__dirname, '..', 'src');

module.exports = {
  mode: env,
  entry: {
    background: path.join(corePath, 'background', 'index.ts'),
    content: path.join(corePath, 'content', 'index.ts'),
  },
  watchOptions: {
    ignored: [ 'dist', 'config', 'node_modules', '.gitignore', '.eslintrc.js' ]
  },
  plugins: [
    new webpack.DefinePlugin({
      Identifier: JSON.stringify(`AutoFindXss_${uuidv1()}`),
    })
  ],
  devtool: (env === 'production') ? 'none' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            'less-loader',
        ],
    },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, '..', 'dist')
  }
};
