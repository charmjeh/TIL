// reducer를 Store와 연결할 때 필요.
// store에 Action이 넘어갈때마다 미들웨어를 거침.
// action에 만들어둔 promise 옵션을 처리할 미들웨어 생성
// reducer는 기본적으로 promise처리를 하지 못하므로 직접 구현해야함

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/user.js';
import promiseMiddleware from '../middleware/promiseMiddleware.js';

export default function(initialState) {
  const enhancer = compose(applyMiddleware(promiseMiddleware));
  return createStore(reducer, initialState, enhancer);
}
