import React from 'react';
// import AppContainer from './routers/app.js'
import { Provider } from 'react-redux';
import { store, AppWithNavigationState } from './store/index';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
