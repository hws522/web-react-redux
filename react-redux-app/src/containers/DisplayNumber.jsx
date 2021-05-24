import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
} // state 초기화, subscribe, 마지막 render() 에서 number 값 this.state.number 로 받아오는 것 까지의 기능과 동일.

export default connect(mapReduxStateToReactProps)(DisplayNumber);
// connect 를 실행하면 그 리턴값이 함수고, 그 리턴값을 다시 실행하니까 괄호가 2개임.
// 여기서 connect 는 첫번째 인자가 하나도 없을 수도 있고, 하나만 있을경우 mapStateToProps 가 된다.
// 문서에 보면 mapStateToProps, mapDispatchToProps 라고 되어있으나, 이것만으로는 많은 혼란이 야기된다.
// 함수 이름을 바꿔도 무방하기에, 이해하기 쉽도록 바꾼다.
// mapReduxStateToReactProps -> 리덕스의 스테이트를 리액트의 프롭스로 연결해준다라는 의미.
// mapReduxDispatchToReactProps -> 리덕스의 디스패치를 리액트의 프롭스로 연결해준다는 의미.

// import React, { Component } from 'react';
// import store from '../store';
// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }

//   render() {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>;
//   }
// }
