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


**BEM 가장 흔한 실수: .a__b__c--d, .a__b--c--d**  ([참조](https://tech.lezhin.com/2018/08/20/challenge-css))
```
/* 블록, 요소, 변형은 각각 한 번씩만 사용해야 한다. */
.a__b__c--d (X) /* 두 번째 키워드 'b'는 블록인가? 요소인가? 'a, b, c'는 DOM 구조를 의미하나? */
.a__b--c--d (X) /* 네 번째 키워드 'd'는 새 선택자로 분리해야 한다. '.a__b--c' 그리고 '.a__b--d' */

/* DOM 구조에 의존하는 명명 규칙 세트. 이렇게 하지 마세요. */
.comics (O)
.comics__list (O)
.comics__list__item (X)
.comics__list__item__link (X)
.comics__list__item__link__title (X)
.comics__list__item__link__thumb (X)

/* DOM 구조에 의존하지 않는 명명 규칙 세트. 이렇게 하세요. */
.comics (O)
.comics__list (O)
.comics__item (O)
.comics__link (O)
.comics__title (O)
.comics__thumb (O)
```

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
