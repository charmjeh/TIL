
<img width="382" alt="콤마찍기" src="https://user-images.githubusercontent.com/43127789/99161538-b3037e80-2736-11eb-9573-878c49e46f5a.PNG">

```javascript
const comma = (s) => {
  if (s.length <= 3) {
    return s; // (*)
  } else {
    return `${comma(s.slice(0, s.length - 3))},${s.slice(s.length - 3)}`; // (**)
  }
};

console.log(comma("123456789")); // 123,456,789
```


### ✔ KEY CONCEPT

> **재귀 함수를 이용하여 풀이가 가능하다.**   
  (*) 재귀함수인 경우 반드시 early return 문을 만들어야 한다.  
  (**) comma(123456) ,789 와 같은 방식으로 계속 문자열을 나누어가며 ,를 추가한다.  
  
