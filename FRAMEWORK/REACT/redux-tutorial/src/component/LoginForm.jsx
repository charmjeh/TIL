// 리액트는 컴포넌트 단위로 업데이트하기 때문에, Container가 업데이트 되어도
// 그 아래 Component와 상관이 없다면 업데이트가 일어나지 않습니다.

// Container는 앱의 상태를 관리하기 때문에
// 앱의 상태가 자주 바뀔수록 그에 따라 업데이트가 일어납니다.
// 그래서 필요 없는 부분에 업데이트가 일어나지 않게 하려면
// Container와 Component를 구분해주어야 합니다.

import React, { Component } from 'react';

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const id = this.id.value;
    const pw = this.password.value;
    login(id, pw);
  };

  render() {
    const { isLoggedIn, login } = this.props;
    return (
      isLoggedIn ?
        <div>로그인 성공</div> :
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>아이디</span>
            <input ref={(c) => { this.id = c; }} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" ref={(c) => { this.password = c; }} />
          </label>
        </form>
    );
  }
};
export default LoginForm;