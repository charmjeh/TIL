// 처음에, ./sagas 모듈에서 가져온 우리의 Saga 를 임포트 합니다.
// 그리고 나서 redux-saga 라이브러리에서 가져온 createSagaMiddleware 팩토리 함수를 사용해서 미들웨어를 만들었죠.
// helloSaga 를 실행하기 전에, 반드시 applyMiddleware 를 사용해서 미들웨어를 연결해야
// sagaMiddleware.run(helloSaga) 를 통해 Saga 를 시작할 수 있습니다.

import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
