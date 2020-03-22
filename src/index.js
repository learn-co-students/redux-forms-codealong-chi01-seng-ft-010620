import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
// import CreateTodo from './components/CreateTodo'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
 
let store = createStore(manageTodo);
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
