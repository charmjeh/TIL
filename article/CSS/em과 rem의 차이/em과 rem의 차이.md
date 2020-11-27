EM과 REM의 차이
===

#### `box`에 따라서 사이즈가 변경되어야한다면 `%나 view port`, `font`에 따라서 사이즈가 변경되어야 한다면 `em` 또는 `rem`을 사용하는 것이 권장된다.

### EM : 부모 요소를 기준으로 크기를 정한다.
```html
<div class="level1">
  <h1>level 1</h1>
  <div class="level2">
    <h1>level 2</h1>
    <div class="level3">
      <h1>level 3</h1>
      <div class="level4">
        <h1>level 4</h1>
      </div>
    </div>
  </div>
</div>
```
```css
.level1,
.level2,
.level3,
.level4 {
  font-size: 2rem;
}
* {
 margin: 0;
 padding: 0;
}
```
![em](https://user-images.githubusercontent.com/43127789/100442963-37b5ab80-30ec-11eb-8afb-b8ce273041d1.PNG)

```css
h1 {
    display: inline-block;
    background-color: #4285F4;
    color: white;
    font-size: 5em;
    /* 부모인 h1의 font-size인 5em에 맞추어서 결정된다. */
    padding: 0.5em;
}
```
![image](https://user-images.githubusercontent.com/43127789/100445377-59189680-30f0-11eb-9ca9-162589133554.png)

### REM : 브라우저 사이즈를 기준으로 크기를 정한다.

```css
.level1,
.level2,
.level3,
.level4 {
  font-size: 2rem;
}
* {
 margin: 0;
 padding: 0;
}
```
![rem](https://user-images.githubusercontent.com/43127789/100442517-844cb700-30eb-11eb-8913-b82441c4156e.PNG)

✨ This is from [Youtube Tutorial](https://www.youtube.com/watch?v=xWMKz9NCD0k) of dream coding ellie

✨ 복습용 문서들
MDN (CSS values and units) ⇢https://developer.mozilla.org/en-US/d...

✨ 유용한 툴
pxtoem.com ⇢ http://pxtoem.com/
