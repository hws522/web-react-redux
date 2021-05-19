import React, { Component } from 'react';

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Display Number</h1>

        <input type="text" value={this.props.number} readOnly></input>
      </div>
    );
  }
}

// 이곳에서 어느곳에서 리덕스에 의존하고 있는가 하면 value 값. value 값이 컴포넌트의 스테이트로부터 오게 되는데,
// 구독을 통해서 값이 세팅되고 있다.
