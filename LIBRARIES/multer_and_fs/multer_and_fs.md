### 텍스트 파일을 불러와서 내용 출력

#### MULTER와 `FS라이브러리를 설치한다.
`multer`는 파일 업로드에 사용하는 라이브러리고,  
`fs`는 노드에서 기본 제공하는 라이브러리로, 파일 처리를 담당한다.
```bash
$ npm install --save multer fs
```

#### MULTER를 사용하여 사용자에게 받은 파일을 업로드한다.
`multer({ dest: 'uploads/' })` : dest부분에 지정한 이름의 폴더가 자동으로 생성되어, 해당 위치에 파일이 저장된다.
```javascript
// home.html
  form(action="/read" method="post" enctype="multipart/form-data")
    input(type="file" name="textFile")
    input(type="submit" value='Convert!')

// routers/fileRouter.js
import multer from multer;

const upload = multer({ dest: 'uploads/' });
fileRouter.post('/경로 이름', upload.single('파일 input태그의 name(textFile)'), readFile)
```

#### 다음은 업로드된 파일의 경로를 받아 fs.readFile을 사용하여 파일의 내용을 읽어 view에 값을 전달하면 된다.
```javascript
const readFile = (req, res) => {
  // req.file : multer가 업로드한 파일의 경로
  const {
    file: { path }
  } = req;
  fs.readFile(path, "utf8", (err, content) => {
    // read.pug를 읽은 파일의 내용과 함께 렌더하겠다는뜻.
    res.render("read", {
      pageTitle: "read",
      content
    });
  });
};
```

### 에러 처리
**`MulterError: Unexpected field at wrappedFileFilter`**  
반드시 input의 name과 upload.single의 인자값은 같아야한다. 그렇지 않으면 라는 에러를 받게 된다.
```javascript
input(type='file' name='textFile')
Router.post('/read', upload.single('textFile'), readFile)
```

**`fs.readFile()` 시 callback data로 `<buffer 54 35 73..>`가 나오는 현상**
```javascript
fs.readFile(path, 'utf8', (err, data) => {})
```
readFile의 두번째 인자로 인코딩 값을 지정하면 정상적으로 파일의 내용을 출력하는것을 확인할 수 있다.