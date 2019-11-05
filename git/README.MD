git command study
===

# RELATED LINK
  git을 사용하면서 발생할 수 있는 이슈들과 기본 개념들을 잘 섞어서 정리된 글
   + [ref link](https://parksb.github.io/article/28.html)
# COMMAND
   + reflog, rebase -i(pick/edit)
     커밋 로그를 수정하는 기능
   + STASH
     커밋하지 않은 로컬 변경사항을 저장하고 스테이지를 비우는 기능
     ```
     git stash (save {stash-name}) // 스태시 저장
     git stash list // 스태시 목록 확인
     git stash apply // 스태시 목록 중 마지막 저장 항목을 남겨둔채로 다시 로컬 변경사항으로 가져오기
     git stash pop // 스태시 목록 중 마지막 저장 항목을 지우면서 다시 로컬 변경사항으로 가져오기
     git stash drop // 스태시 목록에서 마지막 저장 항목 삭제
     ```

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
