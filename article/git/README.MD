How To Write a Git Commit Message
===
**FIX** - 올바르지 않은 동작을 고친 경우  
**ADD** - 코드나 테스트, 예제, 문서등의 추가가 있을 때  
**REMOVE** - 코드의 삭제가 있을 때  
**USE** - 무언가를 사용해 구현하는 경우  
**REFACTOR** - 전면 수정이 있을 때  
**SIMPLIFY** - 복잡한 코드를 단순화할때  
**UPDATE** - 개정이나 버전 업데이트가 있을 때  
**IMPROVE** - 향상이 있을 때  
**MAKE** - 기존 동작의 변경  
**IMPLEMENT** - 코드가 추가된 정도보다 더 주목할 만한 구현체를 완성시켰을때, 특히 모듈이나 클래스 등의 단위  
**REVISE** - 문서의 개정이 잇는 경우  
**CORRECT** - 문법 오류 혹은 타입의 변경, 이름 변경 
**ENSURE** - 무엇이 확실하게 보장받는다는 것을 명시   
**PREVENT** - 특정한 처리를 못하게 막음  
**AVOID** - 회피, IF구문으로 특정한 동작을 제외시키는 경우에도 사용  
**MOVE** - 코드의 이동이 있는 경우  
**RENAME** - 이름 변경이 있는 경우  
**ALLOW** - 허용을 표현할 때 사용  
**VERIFY** - 검증 코드를 넣을 때 사용  
**SET** - 변수 값을 변경하는 등의 작은 수정에 주로 사용  
**PASS** - 파라메터를 넘기는 처리에 주로 사용

자주 쓰는 Git 명령어
===

### 🟧 깃 설정 조회
```bash
$ git config --list
```

### 🟧 사용자 정보 설정
```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

### 🟧 저장소 클론하기
```bash
$ git clone [깃 저장소] [폴더명 또는 .(현재 폴더)]
```
### 🟧 변경사항 업로드
```bash
$ git add [파일명 또는 .(전체)]
$ git commit -m '[feat 등의 타입] 커밋 내용'
$ git push origin [브랜치명]
```
### 🟧 가장 최근의 커밋 메시지 수정하기
```bash
$ git commit --amend
```
### 🟧 가장 최근의 커밋을 취소하고 스테이지 취소  
HEAD^ : 가장 최근 커밋
```bash
$ git reset HEAD^
```
### 🟧 커밋 리셋
해당 COMMIT으로 작업 내용을 되돌리되, [파일 수정 내용 삭제/수정 내용 유지/기본 옵션]
```bash
$ git reset --[hard/soft/mixed] [COMMIT ID]
```
### 🟧 커밋 병합하기
해당 사항은 --force를 통해 마지막에 병합한 로그로 덮어씌워지기때문에 협업 시 사용에 주의해야한다.
```bash
// STEP 1
$ git rebase -i HEAD~3

// STEP 2 (COMMIT 메시지를 모두 합칠 수 있다.)
// pick에서 squash로 수정하면, 이전 커밋에 병합된다.
pick [commitID] [commit messeage 1]
squash [commitID] [commit messeage 2] 
squash [commitID] [commit messeage 3]

$ git push origin [브랜치명] --force 
```

### 🟧 커밋메시지 여러줄 수정하기(pick/edit)
해당 사항은 --force를 통해 마지막에 병합한 로그로 덮어씌워지기때문에 협업 시 사용에 주의해야한다.
```bash
// STEP 1
$ git rebase -i HEAD~3

// STEP 2 (COMMIT 메시지를 모두 합칠 수 있다.)
// pick에서 edit로 변경 후 :wq를 통해 저장하고 닫으면, edit로 변경한 커밋이 차례로 보여진다.
pick [commitID] [commit messeage 1]
[edit / e] [commitID] [commit messeage 2]
[edit / e] [commitID] [commit messeage 3]

// 아래 명령어로 현재 위치에 있는 메시지 수정
$ git commit -amend

// 수정 완료 시 아래 명령어를 입력하면 다음 수정하는 커밋으로 HEAD가 이동된다.
git rebase --continue

// 완료 시 아래와 같은 메시지가 보여지면서 완료된다.
// Successfully rebased and updated refs/heads/branch_name.

$ git push origin [브랜치명] --force 
```

### 🟧 원격 저장소 소스 가져오기
```bash
$ git pull origin [브랜치명]
```

### 🟧 다른 브랜치로 이동하기
```bash
$ git checkout origin [브랜치명]
```

### 🟧 브랜치 이름 바꾸기
```bash
$ git branch -m [기존 브랜치명] [신규 브랜치명]
```

### 🟧 원격 신규 브랜치 가져오기
```bash
$ git remote set-branches --add origin [브랜치명]
$ git fetch origin [브랜치명]:[브랜치명]
```

### 🟧 수정 내용 저장 (수정내용 : 아직 커밋하지 않은 변경사항)
```bash
$ git stash save '작업내용' // 수정 내용 임시 저장
$ git stash list // 수정 내용 조회
$ git stash // 이름 지정하지 않고 현재 수정 내용을 스태시 목록에 저장
$ git stash pop // 마지막으로 저장된 스태시를 현재 브랜치에 적용
$ git stash apply // 마지막으로 저장된 스태시를 현재 브랜치에 적용
$ git stash drop // 스태시를 목록에서 삭제
```

### 🟧 수정한 사항이 있는데 잠시 다른 브랜치로 이동해야할 때
```bash
$ git stash save '작업내용'
$ git checkout [다른 브랜치]
$ git checkout [원래 브랜치] // 작업 끝나고 되돌아온다
$ git checkout [pop/stash] // pop : 적용과 동시에 스태시 목록에서 지움, stash : 현재 브랜치에 적용만 함
```

### 🟧 커밋하지 않은 로컬 변경사항을 저장하고 스테이지를 비우는 기능
```bash
git stash (save {stash-name}) // 스태시 저장
git stash list // 스태시 목록 확인
git stash apply // 스태시 목록 중 마지막 저장 항목을 남겨둔채로 다시 로컬 변경사항으로 가져오기
git stash pop // 스태시 목록 중 마지막 저장 항목을 지우면서 다시 로컬 변경사항으로 가져오기
git stash drop // 스태시 목록에서 마지막 저장 항목 삭제
```

### 🟧 삭제된 커밋 확인 및 복구하기
```bash
$ git reflog // 삭제된 commit id 확인
$ git reset --hard <커밋해시id>
```

### 🟧 깃 로그 조회
```bash
$ git log // 로그 조회
$ git log --pretty=oneline // 각 커밋당 한 줄로 로그 조회
```

### 🟧 변경사항 조회
```bash
$ git diff // working directory와 staging area 간의 차이점을 비교
$ git diff --cached // 워킹 디렉토리와 저장소에 저장된 커밋 간의 차이점을 비교
$ git diff --color-words // 변경된 단어 기준으로 색깔을 다르게 하여 보여줌
$ git diff [비교대상 커밋 1] [비교대상 커밋 2]
$ git diff [비교대상 브랜치1] [비교대상 브랜치 2]
$ git diff [비교브랜치] [origin/비교브랜치] // 해당 브랜치와 원격 저장소의 브랜치 간의 차이를 비교
```


...[기타 명령어를 위한 공식 문서 링크](https://git-scm.com/doc)
# RELATED LINK
  git을 사용하면서 발생할 수 있는 이슈들과 기본 개념들을 잘 섞어서 정리된 글
   + [ref link](https://parksb.github.io/article/28.html)
   
# err fix
   ## Waiting for your editor to close the file... error: There was a problem with the editor
   editor를 변경해서 해결하였음.
   ```
   $ git config --list // git 설정 확인
   $ git config --global core.editor vim // git editor를 vim으로 변경 
   ```
   ## LF will be replaced by CRLF in package.json.
   윈도우 사용자와 맥 사용자가 깃으로 협업할 때 발생하는 whitespace 에러이다.
   git에서 이를 자동 변환해주는 core.autocrlf 기능을 켜주면 된다.
   `git config --global core.autocrlf true`
