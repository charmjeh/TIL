# Typescript

### 공식 홈페이지 설명
**TypeScript extends Javascript by adding types.**  
Typescript는 type을 더함으로써 Javascript를 확장합니다.

**By understanding Javascript, TypeScript saves you time catching errors and providing fixes before you run code**  
javascript를 이해함으로써, typescript는 코드를 실행하기 전에 에러를 찾고 수정 사항을 제공하여 당신의 시간을 줄여줍니다.

**Any browser, any OS, anywhere Javascript runs. Entirely Open Source.**  
Javascrpt가 실행되는 어떤 브라우저, OS, 어느 곳에서나 실행됩니다. 완전히 Open Source입니다.

### 설치

```bash
$ yarn init
$ yarn global add typescript
$ yarn add tsc-watch --dev
```

### TSCONFIG.JSON 설정
```typescript
{
    // 컴파일 시 적용되는 옵션들
    "compilerOptions": {
        "module": "CommonJS", // 어떤 모듈 방식으로 컴파일할 지
        "target": "ES2015", // 어떤 버전의 javascript로 컴파일할지
        "sourceMap": true // sourceMap 처리를 하고싶은지
    },
    // 어떤 파일이 컴파일 과정에 포함되는지
    "include": ["src/**/*"], // 컴파일 과정에서 포함할 파일의 배열
    "exclude": ["node_modules"] // 제외할 파일
}
```
**와일드 카드 패턴** [참조](https://joshua1988.github.io/ts/config/tsconfig.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EC%86%8D%EC%84%B1)  
  `*`: 해당 디렉토리의 모든 파일 검색  
  `**`: 하위 디렉토리를 재귀적으로 접근(하위 디렉토리의 하위 디렉토리가 존재하는 경우 반복해서 접근)  
  `?`: 해당 디렉토리 안에 있는 파일의 이름 중 한글자라도 맞으면 해당
  **위 와일드 카드 패턴에 해당하는 파일 확장자는 js, jsx, ts, tsx, .d.ts 입니다**

### TSC
ts파일에 있는 코드를 컴파일하여 index.js와 index.js.map을 만들어준다
```typescript
$ tsc
```

### package.json
```json
{
    "scripts": {
        "start": "tsc-watch --onSuccess \" node dist/index.js\""
    }
}
```

### interface
변수의 모양을 미리 정의하여 타입을 체크할 수 있다. 아래의 예제에서 인자를 덜 넣거나, 타입이 맞지 않다면 오류 메시지가 보여진다.

```typescript
interface Human {
    name: string;
    age: number;
    gender?: string; // optional
}

const person = {
    name: 'chulsu',
    age: 22,
    gender: 'female'
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

// Hello chulsu, you are 22, you are a female!
console.log(sayHi(person));
```

### class
```typescript
class Block {
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    )
    public name: string;
    public age: number;
}
```

### CLASS
`constructor` : 클래스로부터 객체를 만들때마다 호출되는 메서드  
`static method` :  
  - `Block` 클래스 안에서 항상 사용 가능한 `method`. `method`가 `block class`안에 있고, 클래스가 생성되지 않았어도 호출할 수 있는 `method`이다.
  - 만약 `static`이 붙지 않는 인스턴스 `method`라면, `new 생성자`를 통해 인스턴스를 만들지 않는다면 해당 `method`를 사용할 수 없다.  
`static method: string` : 해당 함수의 반환값은 string이라는 뜻

```typescript
class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;

    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timeStamp: number
    ): string => cryptoJS.SHA256(index + previousHash + timeStamp + data).toString();

    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === 'number' &&
        typeof aBlock.hash === 'string' &&
        typeof aBlock.previousHash === 'string' &&
        typeof aBlock.timeStamp === 'number' &&
        typeof aBlock.data === 'string';

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timeStamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}
```

### 관련 사이트
1. 이 글의 출처 : [Typescript로 블록체인 만들기 - NOMAD CODERS](https://www.youtube.com/watch?v=7wAhwv2Rbxw)  
2. SOLID의 의존성 역전 원칙에 의거하여 interface를 implement하여 요구사항 반영하는 예제가 있음 [링크](https://medium.com/humanscape-tech/solid-%EB%B2%95%EC%B9%99-%E4%B8%AD-lid-fb9b89e383ef)
