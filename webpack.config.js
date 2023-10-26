module.exports = {
    //...
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          }
        }
      ]
    }
  };
