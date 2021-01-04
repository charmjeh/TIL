NextJS
===

node.js의 프레임워크로, express위에서 움직임. 객체지향 프로그래밍과 함수형 프로그래밍, 함수 반응형 프로그래밍의 요소도 일부분 사용

### REQUIREMENTS
---
**Insomnia Core**  
: API의 테스트를 위해 필요, The Desktop API client for REST and GraphQL.

### PROJECT SETUP
---
```bash
$ npm i -g @nestjs/cli
$ nest # show command list
$ nest new # make new project like vue-cli
$ git remote add origin <GIT REPOSITORY URL>
```

### ARCHITECTURE OF NEXTJS
---
```
src/
- app.controller.ts
- app.module.ts
- app.service.ts
- main.ts
```


**`main.ts`** : 애플리케이션의 시작점, 하나의 모듈에서 어플리케이션 생성
```typescript
// main.ts
async function bootstrap() {
    const app = await NextFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
```

**`app.module.ts`** : 루트 모듈  
`@Module` : Decorator. express의 get라우터와 같은 역할을 하며, 클래스에 함수 기능을 추가할 수 있다. (클래스 위의 함수이고, 클래스를 위해 움직인다.) 
```typescript 
@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
```

**`app.controller.ts`**  
`controller`: 기본적으로 url을 가져오고 함수를 실행한다. (express의 라우터같은 존재).  
`@Get`: (express의 get요청과 같은 존재, 라우터 설정 필요없음.)  
```typescript
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/example')
    showExample(): string {
        return "if you access to /example, you'll see me";
    }
}
```
Next.js는 controller를 비즈니스 로직과 구분짓고싶어함. controller는 단순히 url을 가져오는 역할만 하며, 비즈니스 로직은 service에서 실행된다.
`controller`에서 url을 가져오고 function을 리턴하면, `service`에서 해당 function(비즈니스 로직)을 실행한다.

**`app.service.ts`**
```typescript
@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello Nest';
    }
}
```

### REST API
---

**Controller 생성**
```bash
nest g co # (nest generate controller)
```

`@Param(id) movieId: string` :  
NestJS에서는 무언가가 필요하면 요청해야만 한다. 이 표현은 `id`라는 `parameter`를  원한다는 의미로, `string`형태의 `movieId`로 `get`한다.  
@get('/:id')과 @Param('id') 두 인자의 이름은 같아야한다.  
`@Put` : 리소스를 모두 업데이트한다. (ex: 전체 영화 리스트)  
`@Patch` : 리소스의 일부분만 업데이트한다 (ex: 특정 영화).  
```typescript
// movies.controller.ts
@Controller('movies')
export class MoviesController {
  @Get() // localhost:3000/movies
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id') // localhost:3000/movies/1
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  // ...@Post, @Delete, @Put, @Patch와 같이 쓸 수 있다.
}
```