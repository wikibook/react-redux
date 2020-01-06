// webpack.config.js
// 웹팩 설정 파일
module.exports = {
  // client.js를 엔트리 포인트로 설정
  entry: './client.js',

  // 출력과 관련된 설정
  output: {
    // 출력 파일 이름
    filename: 'client.bundle.js'
  },

  module: {
    rules: [
      // babel-loader 설정
      //
      // - 확장자가 .js인 파일에 바벨 트랜스파일 적용
      // - 다음 프리셋을 활용
      //   - babel-preset-env
      //   - babel-preset-react
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};
