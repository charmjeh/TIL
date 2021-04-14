import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {combineReducers, createStore} from 'redux';


const userReducer = (state, action) => {
  console.log(action)
  if (action.type === 'UPDATE_USER') {
    return { ...state, name: action.payload };
  }
  return {name: 'Tom'}
}

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const allReducer = combineReducers({
  count: counterReducer,
  user: userReducer
})

/*
Q: store를 생성후 store.getState()의 결과는 무엇인가?
{
  count: 0,
  user: { name: 'Tom' }
}
*/

// 앱의 상태를 보관하는 Redux 저장소를 만듭니다.
// API로는 { subscribe, dispatch, getState }가 있습니다.
// 두번째 인자 : redux devtool chrome extension을 이용하기 위한 값
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('store값입니다', store);
console.log('getState값입니다. ', store.getState());

const action = {
  type: 'UPDATE_USER',
  payload: 'Jane'
}

store.dispatch(action);
console.log('getState값입니다. ', store.getState());

// 상태가 변경되면 변경된 값을 읽을 수 있게 subscribe한다.
store.subscribe(() => console.log('상태가 변경되어 subscribe가 작동하였습니다.', store.getState()));

store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
ReactDOM.render(
  <App />,
  document.getElementById('root')
);