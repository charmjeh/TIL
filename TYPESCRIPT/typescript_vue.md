# Typescript + Vue
> 이번 문서는 기존에 사용하던 프로젝트에 타입스크립트 세팅 시 사용한 설정 및 내용을 저장하기 위하여 작성되었다.

### **설치**
```javascript
$ vue add typescript // 기존 프로젝트에 추가
```

```javascript
$ vue add typed-vuex // vuex 타입 설정
```

### **설정**

```javascript
// tsconfig.json
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false, // 암시적으로 any로 추론되면 에러를 알려줍니다.
    "noImplicitThis": false, // this가 암시적으로 any로 추론되면 에러를 알려줍니다.
    "paths": { // @폴더명으로 시작하는 절대 경로를 사용하기 위해 추가함
      "@src/*": ["src/*"],
      "@action/*": ["src/action/*"],
      "@store/*": ["src/store/*"],
      "@api/*": ["src/api/*"],
      "@assets/*": ["src/assets/*"],
      "@components/*": ["src/components/*"],
      "@config/*": ["src/config/*"],
      "@layouts/*": ["src/layouts/*"],
      "@locale/*": ["src/locale/*"],
      "@pages/*": ["src/pages/*"],
      "@utils/*": ["src/utils/*"],
    },
    "target": "esnext", // 빌드 결과물은 esnext 방식으로
    "module": "esnext", // 빌드 결과의 모듈 방식은 esnext방식으로
    "moduleResolution": "node", // 모듈 해석 방식은 node로
    "importHelpers": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "resolveJsonModule": true, // 확장자가 .json인 모듈의 import 를 허용하는 설정
    "typeRoots" : [ // 기본적으로, @types 패키지들은 컴파일 목록에 포함이 됩니다. 그런데 만약 typeRoots 프로퍼티가 특정 경로들로 지정되어 있다면, 오직 그 경로에 존재하는 패키지들만이 컴파일 목록에 포함이 된다
      "./node_modules/@types", // 기본
      "./typings" // 사용자 정의 타입 정의 폴더 설정함
    ],
    "types": [
      "webpack-env"
    ],
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [ // 프로그램에 포함할 패턴이나 파일 이름을 명시합니다. (컴파일 대상에 포함할 대상 지정)
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/**/*.json",
    "src/**/*.scss",
    "tests/**/*.ts",
    "tests/**/*.tsx",
  ],
  "exclude": [ // 컴파일 대상에 포함하지 않음
    "node_modules"
  ]
}
```

```javascript
// package.json
{
  "devDependencies": {
    "typescript": "~4.1.5",
    "@types/js-cookie": "^2.2.6", // @types로 타입 정의를 제공하는 라이브러리가 있다면 사용 가능
    "@types/lodash": "^4.14.170",
    "@vue/cli-plugin-typescript": "~4.5.0", // TypeScript + ts-loader + fork-ts-checker-webpack-plugin (VUE-CLI에 맞는 TYPESCIRPT LIBRARY)
    "@vue/eslint-config-typescript": "^4.0.0", // TYPESCIRPT 에 맞춘 ESLINT CONFIG
    "typed-scss-modules": "^4.1.1", // SCSS 타입 정의를 위한 라이브러리
    "typed-vuex": "^0.2.0", // vuex(vue store)의 타입 정의를 위한 라이브러리
  }
}
```
> 이외에 vue add typesciprt 기본 자동설정되는 설정들은 큰 변화없이 사용하였다.

### typings (사용자 정의 타입 활용)

```typescript
/@typings
- /base
   /interface.d.ts
- /store
   /video.d.ts
/action.d.ts
/base.d.ts
/store.d.ts
/index.d.ts


```

```typescript
// index.d.ts
import BaseTyped from '@typings/base';
import ActionTyped from '@typings/action';
import StoreTyped from '@typings/store';

export { BaseTyped, ActionTyped, StoreTyped };
```
```typescript
// base/interface.d.ts
export interface IGenericObject<T> {
  [key: string]: T;
}
```
```typescript
// store.video.d.ts
export interface IVideoState {
  example: string;
}
// store.d.ts
import Video from '@typings/store/video';

namespace StoreTyped {
  export = Video;
}

export default StoreTyped;
```

