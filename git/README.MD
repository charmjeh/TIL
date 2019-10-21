git command study
===

1. git을 사용하면서 발생할 수 있는 이슈들과 기본 개념들을 잘 섞어서 정리된 글
   + [ref link](https://parksb.github.io/article/28.html)
2. new command : reflog, rebase -i(pick/edit)
3. err fix
   + Waiting for your editor to close the file... error: There was a problem with the editor
     - editor를 변경해서 해결하였음.
     ```
     $ git config --list // git 설정 확인
     $ git config --global core.editor vim // git editor를 vim으로 변경 
     ```
