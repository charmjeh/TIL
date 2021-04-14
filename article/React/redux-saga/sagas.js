import { delay } from 'redux-saga';
import { all, put, call, takeEvery } from 'redux-saga/effects';

// Worker Saga : 비동기 증가 태스크를 수행합니다.
// incrementAsync Saga 는 delay(1000) 호출에 의해 1초동안 자고있다가, INCREMENT 액션을 dispatch 하게 됩니다.
export function* incrementAsync() {
  // delay : 설정된 시간 이후에 resolve를 하는 promise객체 리턴. 제너레이터를 정지하는데 사용 가능
  /*
    delay(1000) yield 구문은 next 의 호출자로 넘겨지기 전에 실행되고,
    (여기서 호출자는 미들웨어가 되거나, 제너레이터 함수를 실행하고 리턴된 제너레이터를 넘어 반복하는 테스트코드가 되어야 합니다.)
    호출자가 얻게 되는것은 Promise 입니다.
  */
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
// dispatch된 DICREMENT_ASYNC액션을 바라보고,
// 매번 incrementAsync를 실행하기 위해 redux-saga 패키지가 제공하는 takeEvery 헬퍼 함수를 사용했습니다.
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// 이제 2개의 saga가 있으므로, 한 번에 실행해야 할 필요가 생겼습니다.
// 이 작업을 하기 위해, 다른 사가를 시작해야할 책임이 있는 rootSaga를 추가해봅시다.
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
// 이 saga는 helloSaga와 watchIncrementAsync가 호출된 결과의 배열을 yield합니다.
// 이것은 생성된 두 제너레이터가 병렬로 시작된다는 것을 의미하죠.