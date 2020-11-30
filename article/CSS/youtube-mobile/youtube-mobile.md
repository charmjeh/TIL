반응형 유튜브 클론코딩(HTML+CSS+JAVASCRIPT)
==
### DEMO - MOBILE VERSION
![youtube-mobile-version](https://user-images.githubusercontent.com/43127789/100570237-a163ce80-3313-11eb-96a0-4b7d803f9bca.PNG)
### DEMO - PC VERSION
![youtube-pc-version](https://user-images.githubusercontent.com/43127789/100570239-a32d9200-3313-11eb-9a9e-9b2b816480d3.PNG)


### 특징
- [x] 제목을 접고 펴는 기능
- [x] mobile view에서 화면 키울 시 레이아웃 변경
- [x] 스크롤 내릴 시 미리보기가 상단에 고정
- [x] flex 사용

### color demo  
[COLOR PICKER](https://www.google.com/search?q=color+picker&oq=color+picker&aqs=chrome..69i57.1698j0j7&sourceid=chrome&ie=UTF-8)  
[COLOR TOOL](https://material.io/resources/color/#!/)

### -webkit-line-clamp
-webkit-line-clamp CSS 속성은 블록 컨테이너의 콘텐츠를 지정한 줄 수만큼으로 제한합니다.

```css
p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

### position: sticky
스크롤 시 지정한 자리에 고정되어있도록 할 수 있음
```css
div.container {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}
```

### box-sizing: border-box;
border-box는 테두리와 안쪽 여백의 크기(margin, padding)도 요소의 크기로 고려합니다.
```css
div {
    box-sizing: border-box;
}
```

### flex
[(번역) CSS flex box 3분만에 배우기](https://joshuajangblog.wordpress.com/2016/09/19/learn-css-flexbox-in-3mins/)
[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

#### 출처 : [DreamCoding by Ellie](https://www.youtube.com/watch?v=67stn7Pu7s4&t=398s)