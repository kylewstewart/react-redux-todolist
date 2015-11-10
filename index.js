import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'

import { addTodo, completeTodo } from './actions/todos'

const store = configureStore()

/*
console.log(store.getState())


let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(completeTodo(0))
store.dispatch(completeTodo(1))


unsubscribe()
*/
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
