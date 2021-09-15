Husky
===

### Git Hooks ([Git 공식 설명](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Hooks))
Git도 다른 버전관리 시스템처럼 어떤 이벤트가 생겼을때 자동으로 특정 이벤트를 실행하도록 할 수 있다.  

#### 커밋 워크플로 훅 (4가지)
`pre-commit` : 커밋메시지 작성 전 호출. 빠트린것은 없는지, 테스트는 확실히 했는지 등을 검사하며, 이 훅의 Exit 코드가 0이 아니면 커밋이 취소된다.  
`prepare-commit-msg` : Git이 커밋메시지를 작성하기전에 호출. 커밋메시지 수정 전 프로그램으로 손보고싶을때 사용  
`commit-msg` : 커밋 메시지가 들어있는 임시파일의 경로를 아규먼트로 받는다. 커밋 메시지가 정책에 맞는지 검사할 수 있다.  
`post-msg` : 커밋이 완료된 후 실행된다. 커밋 해시정보를 git log -1 HEAD 명령으로 가져올 수 있다. 커밋이 되었음을 누군가 혹은 다른 프로그램에게 알릴 수 있다.  

### Husky
Git Hooks를 더 쉽게 사용하도록 함 ([Github](https://github.com/typicode/husky))  
`.git/Hooks/` 폴더의 pre-commit 파일을 편집하는 식으로 사용할 수 있지만, 여러사람과 같은 설정을 공유하기 위해서는 npm에서 Husky을 받아 사용하면 편하다.  

```js
//.package.json
{
  "devDependencies": {
    "husky": "^4.3.8",
    "lint-staged": "^10.5.3",
  },
  "lint-staged": {
    "*.{js,vue}": "eslint"
  }
}
```

#### 커밋 전 현재 브랜치명을 출력하고 스테이지된 파일에 대해 린트검사 진행하는 예제

```js
//.huskyrc
{
    "hooks": {
        "pre-commit": "echo 'I am Husky, Woof!!'; git rev-parse --abbrev-ref HEAD; lint-staged"
    }
}
```

