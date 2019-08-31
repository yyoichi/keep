module.exports = ({ config }) => {
  config.module = {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  };

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
