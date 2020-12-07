WEBPACK
==
모듈 번들러로서, scss및 최신 자바스크립트 문법에 맞는 파일들을 이전 문법에 맞는 css와 자바스크립트 문법으로 만들어 브라우저가 이해할 수 있는 static파일로 변환하여준다.

```bash
npm install webpack webpack-cli
```

### WEBPACK.CONFIG.JS
**`entry`**  
An entry point indicates which module webpack should use to begin building out its internal dependency graph.
진입점은 웹팩이 내부 종속성 그래프 작성을 시작하는데 어느 모듈을 웹팩이 사용해야하는지 나타내는것이다...(=output 폴더에 변환할 파일들이 있는 폴더를 정함)  
**`output`**  
The output property tells webpack where to emit the bundles it creates and how to name these files  
어느 폴더에 무슨 이름으로 번들을 만들어서 내보낼지 결정한다.(변환 결과물이 저장되는곳)  
**`mode`**  
webpack에 내장된 최적화를 사용하도록(minify) 지시. `development`는 개발용, `production`(기본값)은 배포용으로 주로 쓴다(`none`도 있음).
**`loader`**  
webpack에게 파일을 처리하는 방법을 알려주는 역할(.scss 파일을 처리하는 방법 등)

```javascript
const path = require('path');
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = process.env.WEBPACK_ENV;
// ./assets/js/main.js
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
// ./static (또는 공식문서의 예제에서는 dist)
const OUTPUT_DIR = path.join(__dirname, 'static');
const config = {
    // async 처리에 대한 부분은 polyfill을 사용
    // 이게 없다면 regeneratorRuntime이 정의되지 않았다고 나옴
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
      {
        test: /\.(js)$/,
        use: [
            {
                loader: 'babel-loader'
            }
        ]
      },
      {
        // 정규식을 사용해 scss파일을 찾음
        test: /\.(scss)$/,
        // 파일을 찾았을떄, extractCSS를 사용하도록 함
        // use블록 내에서는 아래에서 위로 순차적으로 읽으면 됨.
        // SCSS파일 다루기 -> css 파일 이해시키기 -> 추출
        use: ExtractCSS.extract([
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            // 접두사부터 시작해서 
            // CSS 브라우저 호환에 관련된것들을 처리함
            loader: "postcss-loader",
            options: {
              plugin() {
                return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
        ]
    }
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    },
    plugins: [new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css'
    })]
};

module.exports = config;
```

### PACKAGE.JSON

`npm run dev:assets` 와 같이 웹팩 명령어를 사용할 수 있다.
```json
{
    "scripts": {
        "dev:assets": "cross-env WEBPACK_ENV=development webpack -w",
        "build:assets": "cross-env WEBPACK_ENV=production webpack",
    }
}
```