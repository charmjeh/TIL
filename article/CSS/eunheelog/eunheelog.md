## EUNHEELOG (포트폴리오 웹사이트, HTML+CSS+JAVASCRIPT)

### BEM
BEM방식으로 css naming하기 위한 참조 : https://nykim.work/15
```html
<div class="block__element--modifier"></div>
```

```html
<form class="search-form">
    <input class="search-form__input"/>
    <button class="search-form__button">Search</button>
</form>
```
**BLOCK과 ELEMENT의 차이**  
위의 예시에서 `.search-form`은 `블럭`이고, `.search-form__input`과 `.search-form__button`은 `엘리먼트`이다.  
`블럭`은 똑 떼어서 다른 곳에서 독립적으로 재사용 가능한 단위이고,  
`엘리먼트`는 블럭 내가 아니면 의미가 없어지는 단위이다.  
ex) 탭메뉴 : `block`, 탭 메뉴의 각 탭 : `element`  

```html
<ul class="tab">
  <li class="tab__item tab__item--focused">탭 01</li>
  <li class="tab__item">탭 02</li>
  <li class="tab__item">탭 03</li>
</ul>
```
**modifier** : 블럭이나 엘리먼트의 속성

### 플렉스 요소(flex item)의 align-self 속성 ([데모 보기](http://www.tcpschool.com/examples/tryit/tryhtml.php?filename=css3_expand_flexbox_15))
align-self 속성은 플렉스 컨테이너의 align-items 속성보다 우선 적용됩니다.
이 속성을 이용하면 플렉스 요소마다 서로 다른 align 속성값을 설정할 수 있습니다

```css
    .item:nth-child(2) { -webkit-align-self: flex-start; align-self: flex-start; }
    .item:nth-child(3) { -webkit-align-self: flex-end; align-self: flex-end; }
    .item:nth-child(4) { -webkit-align-self: center; align-self: center; }
    .item:nth-child(5) { -webkit-align-self: baseline; align-self: baseline; }
```


출처: [ZOZELAND](https://www.youtube.com/watch?v=3x5kbzp4tug&list=PLb-EgHHwKZoylzXPp-hhJkCse5ALOosRW&index=7)