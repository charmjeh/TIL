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

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
  // ...@Post, @Delete, @Put, @Patch와 같이 쓸 수 있다.
}
```

**Service 생성**  
```bash
nest g s # (nest generate service)
```
* `Single Responsibility Principle, SRP` : 단일 책임 원칙
하나의 module, class 혹은 function이 하나의 기능은 꼭 책임져야 한다.  
* `201 Status Code`: post 리퀘스트에 문제없음  

**`movie.entity.ts`**
서비스로 보내고 받을 클래스(인터페이스)를 export함, 데이터베이스의 모델

Movie Service 구현
```typescript
// movies.service.ts
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies; // database query가 오게됨
  }

  getOne(id: string): Movie {
    return this.movies.find(movie => movie.id === +id);
  }

  // ...
}
```

Controller에 생성된 Service를 추가하여 사용
```typescript
// Movies.controller.ts
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }
  // ...
}
```

**`에러 처리`**
`NotFoundException`: HttpException에서 확장된 NextJS의 제공 기능

```typescript
getOne(id: string): Movie {
return this.movies.find(movie => movie.id === +id);
const movie = this.movies.find(movie => movie.id === +id);
if (!movie) {
    throw new NotFoundException(`Movie with ID ${id} not found.`);
}
return movie;
}
```

**`DTO, Data Transfer Object``**: 데이터 전송 객체

DTO로 CreateMovieDTO객체를 만들어서, movie를 만들기 위해 필요한 정보를 나열할 수 있다.
```typescript
// dto/create-movie.dto.ts
export class CreateMovieDTO {
  readonly title: string;
  readonly year: number;
  readonly genres: string[];
}
```

생성된 DTO를 서비스에도 추가  
```typescript
// movies.service.ts
@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    create(movieData: CreateMovieDto) {
    this.movies.push({
        id: this.movies.length + 1,
        ...movieData,
    });
    }
}
```

**`pipe`, `class-validator`** : 데이터 유효성 검사를 위해 사용. express의 미들웨어같은것  
`ValidationPipe`  
    - `whitelist` : true로 설정하면 아무 decorator도 없는 property의 object를 거름  
    - `forbidNonWhitelisted` : 요청 자체가 잘못된 경우 리퀘스트 자체를 막음  
    - `transform` : 인자의 타입을 변환할 수 있음 (string => number)
```bash
npm i class-validator
```
```typescript
// main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

// dto/create-movie.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
```

**`PartialType()`**  
`mapped-types`: 타입을 변환시키고 사용할 수 있게하는 패키지  

```bash
npm i @nestjs/mapped-types
```

CreateMovieDTO를 `베이스 타입`으로 하고, PartialType을 사용하여 부분적으로 타입이 변경된 UpdateMovieDTO를 만듬
```typescript
// dto/update-movie.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}

// movies.controller.ts
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
        return this.moviesService.update(movieId, updateData);
    }
}
```

### 출처
해당 내용은 노마드 코더 강의 <NextJS로 API만들기>를 듣고 작성한 노트입니다.
[링크](https://github.com/nomadcoders/hi-nest)