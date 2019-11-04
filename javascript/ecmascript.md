## Object.entries & Object.fromEntries 

- 객체 => 배열 : Object.entries  
- 배열 => 객체 : Object.fromEntries

```javascript
const obj = {a: 4, b: 9, c: 16};


// 객체를 배열로 바꿈
const arr = Object.entries(obj); // [['a': 4], ['b': 9], ['c': 16]];

// 각 수의 제곱근을 구함
const map = arr.map(([key, val])=> [key, Math.sqrt])

// 다시 배열을 객체로 변환
const obj2 = Object.fromEntries(map);

console.log(obj2); // {a: 2, b: 3, c: 4}
```

## flat() & flatMap()

배열 내부의 하위 배열을 쉽게 합칠 수 있다. (flatMap = (flat + map))

```javascript
const arr = [4.25, 19.99, 25.5];

console.log(arr.map(value=> [Math.round(value)]))
// => [[4], [20], [26]]

console.log(arr.flatMap(value)=> [Math.round(value)])
// => [4, 20, 26]
```

## Optional catch

```javascript
// before

try {
    new Error('hello')
} catch( unusedErr ) {
    console.err('기존에는 문법 오류를 피하기 위해 반드시 unusedError를 사용해야했음.');
}
```

```javascript
// after

try {
    new Error('hello');
} catch {
    console.err('필요없는 경우 더이상 unusedErr를 쓰지 않아도 된다');
}
```
