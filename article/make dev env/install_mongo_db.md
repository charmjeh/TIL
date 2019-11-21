## SETUP THE MONGO DB

1. DOWNLOAD MONGODB COMMUNITY SERVER
[Mongo DB Community 다운로드 링크](https://www.mongodb.com/download-center/community?jmp=docs)

    1) 프로젝트에서 `mongod`를 터미널에 입력하여 서버를 실행할 수 있다.
    2) `mongo` 입력 시 접속 가능
    3) `exit`을 통해 서버 접속 해제 가능

2. `npm install dotenv`


```
PS C:\Users\..\wetube> mongo
MongoDB shell version v4.0.7
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
MongoDB server version: 4.2.1
> help
> use we-tube <!-- set current database -->
switched to db we-tube
> show collections
videos
> db.video.remove({}) <!-- remove video -->
> exit
bye