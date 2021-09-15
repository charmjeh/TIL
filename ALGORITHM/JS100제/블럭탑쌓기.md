![q66](https://user-images.githubusercontent.com/43127789/99389301-2f09ec00-291a-11eb-9716-8708f9907690.PNG)

```javascript
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

const solution = (전체블록, 규칙) => {
	let answer = [];
  
  for (let 부분블록 of 전체블록) {
  	answer.push(블록순서체크(부분블록, 규칙))
  }
  
  return answer;
}

const 블록순서체크 = (부분블록, 규칙) => {
	let 임시변수 = 규칙.indexOf(규칙[0]);
  
  for (let 문자 of 부분블록) {
  	if (규칙.includes(문자)) {
    	if (임시변수 > 규칙.indexOf(문자)) {
        return '불가능'
      }
      임시변수 = 규칙.indexOf(문자);
    }
  }
  
  return '가능'
}

console.log(solution(탑, 규칙))
```

> 핵심 개념 : 배열을 순회하면서 규칙의 인덱스를 검사하여
  기준 인덱스보다 작아지는 경우 규칙에 맞지 않은것으로 한다. 
