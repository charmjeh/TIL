## Object.entries & Object.fromEntries

```
const obj = {a: 4, b: 9, c: 16};


// 객체를 배열로 바꿈
const arr = Object.entries(obj);

// 각 수의 제곱근을 구함
const map = arr.map(([key, val])=> [key, Math.sqrt])

// 다시 배열을 객체로 변환
const obj2 = Object.fromEntries(map);

console.log(obj2); // {a: 2, b: 3, c: 4}
```

