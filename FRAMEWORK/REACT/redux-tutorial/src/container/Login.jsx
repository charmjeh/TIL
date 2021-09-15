import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../action/user.js';
import LoginForm from '../component/LoginForm.jsx';

// 전체 흐름 : View => Action => Dispatch => Store(Middleware -> Reducer) => View
// 타입 확인을 위한 propTypes 사용. isRequired와 연결하여 props가 제공되지 않았을 때
// 경고가 보이도록 할 수 있습니다.

// Login함수를 dispatch하는 순간 Store에게 action이 전달됩니다.
// form을 submit하면 disspatch메소드가 실행되는거죠.
class Login extends Component {
  render() {
    const { user, dispatch } = this.props;
    return (
      <LoginzForm
        isLoggedIn={user.isLoggedIn}
        login={(id, pw) => dispatch(login(id, pw))}
      />
    );
  }
}

// redux의 state가 mapStateToProp를 통해 React의 props로 전달됩니다.
function mapStateToProps(state) {
  return { user: state.user }
}
// connect 함수를 써서 리덕스 패턴을 사용하는 컴포넌트를 만듭니다.
// react와 redux가 소통하는 부분.
export default connect(mapStateToProps)(Login);