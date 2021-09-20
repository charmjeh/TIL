# SVG

SVG는 XHTML과 비슷한 XML 언어로 그래픽을 그리는 데 사용된다. svg 요소와 속성은 대소문자를 구분한다 (xml언어라서) .

캔버스나 플래시와 비교했을 때 
단점 : HTML5 캔버스나 (애플리케이션 인터페이스로서) 어도비 플래시보다 느린 편이다.
장점 : DOM 인터페이스를 사용할 수 있는 점과 서드파티 확장을 필요로 하지 않는 이점을 가지고 있다.

IE와 안드로이드 브라우저에서 지원하지 않는다 https://caniuse.com/svg

기본적인 요소들
1. 원, 사각형, 곡선들을 그릴 수 있는 요소 제공
2. <g>요소를 통해 간단한 모양을 조합할 수 있다.
3. SVG는 그라디언트, 회전, 필터 효과, 애니메이션, 자바스크립트를 통한 조작을 지원한다.
    - 이러한 추가적인 기능들은 그래픽 영역을 정의하는 비교적 작은 요소들의 집합에 의존하고 있다

사용자 단위와 화면 단위 비율 변경은 viewBox로 가능 (기본값은 1 : 1)
```html
<!-- 기본 -->
<svg width="100" height="100"></svg>

<!-- 이미지 비율 확대 - (0, 0)에서 시작하는 100x100화면을 200x200화면에 출력합니다. -->
<svg width="200" height="200" viewBox="0 0 100 100"></svg>

<!-- 이미지 비율 축소 - (0, 0)에서 시작하는 200x200화면을 100x100화면에 출력합니다. -->
<svg  width="100" height="100" viewBox="0 0 200 200"></svg>
```

```html
<svg
  version="1.1"
  baseProfile="full"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
>
  <rect width="100%" height="100%" fill="red" />

  <circle cx="50" cy="50" r="30" fill="green" />

  <text x="50" y="55" font-size="15" text-anchor="middle" fill="white">
    SVG
  </text>
</svg>
```

## Path

Path 엘리먼트는 SVG 기본 도형 라이브러리에서 가장 강력한 엘리먼트이다. 선과 곡선, 호 등 다양한 형태를 그릴 수 있다.
복잡한 패스를 XML 편집기 또는 일반적인 텍스트 에디터로 그리는 것은 권장하지 않지만, SVG가 표시될 때 문제점을 찾고 고치는 데는 충분히 도움이 될 것이다

polylines와의 비교
직선으로만 이루어진 복잡한 도형은 둘 다 그릴수 잇지만 곡선 묘시 시 polylines는 패스보다 더 많은 직선이 필요에 확대가 잘 되지 않을 수 있다.

D속성
패스의 모양 정의. 여러개의 명령어와 파라미터들로 이루어진다.
명령어는 특정 알파벳으로 시작하며 "10, 10좌표로 이동(Move To)"는 "M 10 10"으로 표기된다.
이때 대문자이면 절대, 소문자면 상대 좌표로 참조된다.

### Path 기본 명령어 목록

이동 : M(Move to) x y  
선 그리기: L(Line to) x y / H(가로선 그리기(Horizontal..?)) x / Y(세로선 그리기) y  
패스 닫기: Z  

```html
<svg width="100" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black" />
</svg>
```

### 곡선 명령어 목록

1. C(Cubic, 3차 베지어 곡선)
  - 선을 잇는 두 점에 하나씩 제어점을 가짐
  -  C x1 y1, x2 y2, x y
2. Q(Quadratic, 2차 베지어 곡선)
  - 3차 베지어 곡선보다 간단, 하나의 제어점이 시작과 끝 제어점의 방향을 모두 결정
  -  Q x1 y1, x y (제어점, 곡선의 끝점 2개)
3. 호
  - 너무 복잡하다....
  - A rx ry x축-회전각 큰-호-플래그 쓸기-방향-플래그 x y
    a rx ry x축-회전각 큰-호-플래그 쓸기-방향-플래그 dx dy

### 결과 이미지
svgHandlding.vue
![image](https://user-images.githubusercontent.com/43127789/133556011-c772b49d-7b0b-4551-b882-04c2a5433399.png)

### 출처
+ SVG
  - svg 다루기 - nana blog  
  https://nykim.work/35  
  - mdn 튜토리얼  
  https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial/Introduction  

+ Path
  - mdn 튜토리얼  
  https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial/Paths#%EC%84%A0(line)_%EB%AA%85%EB%A0%B9%EC%96%B4 
