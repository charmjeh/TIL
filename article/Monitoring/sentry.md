# SENTRY

에러를 잡아 알림을 줄 수 있는 프로그램.
내가 사용하는 vue 프로젝트에 사용해서 에러가 생길 시 telegram을 보내주게 함.

#### [공식 홈페이지](https://sentry.io/welcome/?utm_source=google&utm_medium=cpc&utm_campaign=9575834316&content=463352183733&utm_term=sentry&gclid=Cj0KCQjw--GFBhDeARIsACH_kdYWBNnKx9cLkJIGFFV1pyu0NbWzLEoKt7XN3Hbcm-O5s0zr4HLhkRUaAsO7EALw_wcB)

### 스크린샷
![image](https://user-images.githubusercontent.com/43127789/120614988-c7208a80-c492-11eb-834c-c26fe9dbb6cc.png)

### [GETTING STARTED](https://docs.sentry.io/platforms/javascript/)
---
1. 연관 프로그램 설치
```
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
```
2. [텔레그램봇 생성](https://blog.cosmosfarm.com/archives/1070/%ED%85%94%EB%A0%88%EA%B7%B8%EB%9E%A8-%EB%B4%87-telegram-bot-%EB%A7%8C%EB%93%A4%EA%B8%B0/)
- `BotFather`에게 `/newbot` 명령어를 이용해 봇을 만들고 토큰을 받는다.
- `https://api.telegram.org/bot${텔레그램봇주소:API토큰값}/getMe` 의 id 파트가 `botID`이다.
3. 프로젝트 최상위 컴포넌트(앱 진입점)에서 Sentry 초기화 및 옵션 설정

```javascript
// main.js
import Vue from 'vue';
import axios from 'axios';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

const DSN_KEY = '<SENTRY DSN_KEY>'; // SENTRY DSN;
const botID = '<BOT_ID>'; // 텔레그램의 BOT_ID
const chatID = '<CHAT_ID>' // 텔레그램의 CHAT_ID

const sendErrorMessage = (event, hint) => {
  if (( !event || !event.contexts || !event.contexts.vue ) &&
    ( !hint || !hint.originalException || hint.syntheticException )) {
    return null;
  }

  const vue = event.contexts.vue;
  const hintMsg = hint.originalException || hint.syntheticException;

  const body = {
    chat_id: chatID, 
    text: `[Error] 에러 발생! : \n
    >>> URL: ${event.request && event.request.url} \n
    >>> Message: ${hintMsg.message}\n
    >>> Method: ${vue.lifecycleHook}\n
    >>> At: ${vue.componentName}\n
    >>> Props: ${JSON.stringify(vue.propsData)}`,
  };
  axios({
    method: 'POST',
    url: `https://api.telegram.org/${botID}/sendMessage`,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: body,
  }).then(() => {
    console.log('Error logged!', hint.originalException || hint.syntheticException);
  });

  return event;
}

Sentry.init({
  Vue,
  dsn: DSN_KEY, // 발급받은 DSN키 입력
  integrations: [new Integrations.BrowserTracing()], // Vue 설정
  tracingOptions: { // 하위 구성 요소를 추적하고 렌더링 프로세스에 대한 자세한 내용을 보기
     trackComponents: true,
  },
  attachProps: true, // 로깅을 위해 모든 Vue 구성 요소의 props를 보기
  tracesSampleRate: 1, // 0에서 1 사이의 숫자로 주어진 트랜잭션이 Sentry로 전송 될 확률을 제어
  beforeSend: (event, hint) => sendErrorMessage(event, hint), // 에러를 Sentry에게 전달하기 전 처리할 수 있는 hook
});
Sentry.captureMessage("this is a debug message", "debug");

new Vue({
  render: (h) => h(App),
  router,
  store,
  template: '',
  i18n: eve.Lang,
}).$mount('#app');

```
