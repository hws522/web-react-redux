import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//이제 Provider 하위에 있는 모든 컴포넌트들은 리덕스 스토어에 접근할 수 있게 됐다.
// 그래서 더이상 import 시킬필요가 없다.
reportWebVitals();
