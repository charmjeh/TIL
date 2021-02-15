
🌇 리팩터링 2판
===

리팩토링: 첫번째 예시
---

#### 함수 추출 시
  1) 값이 바뀌지 않는 변수는 매개변수로 전달한다. (30p)
  2) 반환값에는 result를 쓴다.

#### volumeCredits 변수를 제거하기 => 보조 함수로 뺴냄
  1) 반복문 쪼개기
  2) 문장 슬라이드하기
  3) 함수 추출하기
  4) 변수 인라인하기

#### 다형성을 충족하도록 하기
  - `타입 코드` : 오브젝트의 종류를 표현하는 값.  
    예제에서는 공연 유형 타입을 정의한 것. tragedy와 comedy 두 개의 타입에 따라 계산식이 달라진다.
  1) 타입 코드를 서브 클래스로 변경
  2) 생성자 클래스를 팩터리 함수로 만든다
    함수를 이용하면 다음과 같이 PerformanceCalculator의 서브클래스중에서 어느것을 생성해서 반환할 지 선택할 수 있다.

```javascript
function createPerformanceCalculator(aPerformance, aPlay) {
    switch(aPlay.type) {
      case "tragedy": return new TregedyCalculator(aPerformance, aPlay);
      case "comedy": return new ComedyCalculator(aPerformance, aPlay);
      default:
       throw new Error('알 수 없는 장르: ${aPlay.type}')
    }
}

class TragedyCalculator extends PerformanceCalculator {
}
class ComedyCalculator extends PerformanceCalculator {
}
```
class Tragedy
      
![image](https://user-images.githubusercontent.com/43127789/107936192-b15f8600-6fc5-11eb-9be9-89d5ee86a932.png)

리팩토링 원칙
---

#### 두 개의 모자

    켄트벡의 비유로 소프트웨어를 개발할 때 목적이 '기능 추가'냐, 아니면 '리팩터링'이냐를 명확히 구분해 작업하는것.  
    저자는 두 모자를 바꿔쓰며 작업하는데, 한 모자를 쓰고 작업할때는 다른 모자의 작업이 섞이지 않도록 하며, 모든 작업은 테스트를 동반한다.
