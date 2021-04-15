// Store로는 로그인을 처리하는 스토어를 만들어둡니다.
// Store안에 리덕스 패턴의 꽃인 reducer가 들어갑니다.
// reducer를 먼저 만들고 Store에 연결해줍니다.

import { combineReducers } from 'redux';
import { login, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/user.js';

// defaultState가 바로 이 로그인앱의 기본 state입니다.
// reducer에서 이 state만 조작해서 정보를 표현해야 합니다.
const defaultState = {
  isLoggedIn: false,
  fetchingUpdate: false,
  user: {}
};

// Reducer는 아까 만든 Action별로 어떻게 state를 바꿀 지 결정하는 부분입니다.
// 한 가지 주의할 점은 반드시 새로운 객체를 반환해야합니다.
// 아래 코드에서도 {...state를 통해 먼저 기존 state를 복사했습니다.}
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        fetchingUpdate: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetchingUpdate: false,
        isLoggedIn: true,
        user: action.result,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        fetchingUpdate: false,
      }
  }
}

// Reducer는 여러개를 사용할 수 있기때문에 combineReducers를 이용하여 합쳐줍니다.
export default combineReducers({
  user: userReducer
});