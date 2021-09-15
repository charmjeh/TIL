import axios from 'axios';

// Store에 Action이 넘어갈 때마다 미들웨어를 거칩니다
// 처음에 login을 Dispatch할 때 LOGIN_REQUEST Action가 실행됩니다.
// 그 후, 전송에 성공하면 LOGIN_SUCCESS, 실패하면 LOGIN_FAILURE Action이 추가적으로 실행됩니다.
export default () => {
  return next => action => {
    const { promise, type, ...rest } = action;
    next({ ...rest, type: `${type}_REQUEST` });
    return axios({
      method: promise.method,
      url: promise.url,
      data: promise.data
    })
      .then(result => {
        next({ ...rest, result, type: `${type}_SUCCESS` });
      })
      .catch(error => {
        next({ ...rest, error, type: `${type}_FAILURE` });
      });
  };
}