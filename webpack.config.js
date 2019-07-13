const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

const common = {
  entry: {
    script: path.join(__dirname, 'src/index.tsx'),
    style: path.join(__dirname, 'src/index.css')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css'
    })
  ]
};

const development = (...config) =>
  Object.assign({}, ...config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      contentBase: path.join(__dirname, 'dist')
    }
  });

const production = config =>
  Object.assign({}, ...config, {
    ...config,
    mode: 'production'
  });

module.exports = (env, args) => {
  const mode = (env && env.mode) || (args && args.mode) || 'development';
  switch (mode) {
    case 'production':
      return production(common);
    case 'development':
      return development(common, devServer);
    default:
      return null;
  }
};
