import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';
export default connect()(DisplayNumber); // connect 를 실행하면 그 리턴값이 함수고, 그 리턴값을 다시 실행하니까.

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
