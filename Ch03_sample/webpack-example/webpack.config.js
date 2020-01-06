// webapck.config.js
module.exports = {
  // entry 필드
  entry: './entry.js',

  // output 필드
  output: {
    filename: 'output.js'
  },

  module: {
    rules: [
      // babel-loader 설정
      {
        loader: 'babel-loader',
        test: /\.js$/,
        options: {
          presets: ['react']
        }
      }
    ]
  }
};