# [stylelint](https://stylelint.io/)
A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.  
[airbnb css/scss styleguide](https://github.com/airbnb/css)를 따르기로 하면서 검토한 라이브러리로서, 스타일 코드에 대한 lint를 개발자끼리 통일시킬 수 있도록 강제할 수 있다.

### Getting Started
---
Install
```bash
$ yarn add -D stylelint stylelint-config-airbnb stylelint-config-prettier stylelint-order stylelint-scss
```

Configuration
```json
// .stylelintrc.json
{
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "extends": [
    "stylelint-config-airbnb",
    "stylelint-config-prettier"
  ]
}
```

`stylelint-order` : css의 선언 순서에 대한 lint  
`stylelint-scss` : scss에 대한 stylelint 규칙 모음  
`stylelint-config-prettier` : prettier와 stylelint의 충돌때문에 설치한 라이브러리

### Using Stylelint in VSCODE
---
개인적으로 vscode 에디터를 사용하고 있는데, stylelint 확장프로그램을 설치하면 소스에 빨간줄이 뜨면서 잡아줘서 쉽게 어디를 고쳐야 할 지 파악할 수 있다.
![image](https://user-images.githubusercontent.com/43127789/122158465-afd89880-cea7-11eb-876f-8ce6a28096dd.png)



### Errors
---
**Expected declaration to come before at-rule (order/order) stylelint(order/order)**   
❓ [`at-rule`](https://developer.mozilla.org/ko/docs/Web/CSS/At-rule)은 @-로 시작하는 CSS문이다. `at-rule`에 해당하는 애들은 일반 속성 정의의 뒤에 와야한다.

```css
// X
.background-edit-button {
  @include ghost-button;
  color: $primary;
  border: 1px solid $primary;
}

// O
.background-edit-button {
  color: $primary;
  border: 1px solid $primary;

  @include ghost-button;
}
```

#### 관련 고민들
---
1. stylelint는 0이 없는것을 권장하고, prettier는 0을 넣으라고 해서 (Error: Insert '0') stylelint-config-prettier를 설치하였다. 이 라이브러리는 두 lint의 충돌을 해결해주는 라이브러리이다.
```
box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
```
  
2. Nesting selector 개선 : 3 depth 이상 중첩하지 않도록 하는것이 좋다.
- 특정 클래스에 해당하는것은 큰 범주에서 꺼낼 수 있음  

```
body { .form-box{ /* body에서 꺼낼 수 있음 */} }  
=> body {}, .form-box {}  
```
3. OOCSS와 BEM, SMACSS 사용  
4. @mixin, @include 사용  

- mixin을 통해 자주 사용될만한 공통 스타일을 정의하고, @include를 통해 정의된 mixin을 사용한다.  
- Vue.config.js에서 loaderOptions라는 vue-loader의 내부 구성을 변경하는데 사용할 수 있는 css옵션이 있어서, mixin을 import하면 scss-loader에 추가된 모든 코드는 전역 범위에서 사용할 수 있다.
// vue.config.js
  ```
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@assets/styles/variables.scss";
            @import "@assets/styles/mixins.scss";
          `,
        },
      },
    },
  ```

  ```scss
  // assets/styles/mixins.scss
  @mixin custom-delete-button {
    display: none;
    width: 20px;
    height: 20px;
    background: #ffffff;
    color: #888;
    font-size: 1.3rem;
    font-weight: 700;
    text-shadow: 0 1px 0 #fff;

    &.show {
      display: block;
    }
  }

  // assets/styles/variables.scss
  $primary: #009eff;
  $orange: #f87b27;

  // .scss
  .background-edit-button {
    color: $primary;
    border: 1px solid $primary;

    @include ghost-button;

    .blue:hover {
      background-color: $primary;
      color: white;
    }
  }

  .text-edit-button {
    color: $orange;
    border: 1px solid $orange;
    
    @include ghost-button;

    &.orange:hover {
      background-color: $orange;
      color: white;
    }
  }
  ```
3. Id를 선택자로 사용하여 처리되는 코드가 있다면 class를 사용하는 코드로 변경해야 할 것 같다.  
    ```
    document.querySelector(‘#textCanvas’).style.border = ‘2px solid #009eff';
    document.querySelector('#drop').classList.add('dragging');
    ```
