import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';
function mapDispatchToProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
}
export default connect(null, mapDispatchToProps)(AddNumber); // state 를 받아올 필요가 없으므로 인자가 필요없다. 그래서 null.

// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: 'INCREMENT', size: size }); //AddNumber onClick 으로 받은 size 를 넘겨받아서 전달해준다.
//         }.bind(this)}
//       ></AddNumber>
//     );
//   }
// }

// 컴포넌트안에 있는 AddNumber 를 그대로 가져와서 출력해주는 기능을 할 뿐.
// 애플리케이션과 종속되는 작업은 여기서 함.
