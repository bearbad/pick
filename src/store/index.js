import AppNavigator from '../routers/app';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import reducers from '../app/reducers/index.js';
//创建导航状态数据商店redux
const navReducer = createNavigationReducer(AppNavigator);
//结合redux
const appReducer = combineReducers({
    ...reducers,
    nav: navReducer
});
// 创建React Navigation Redux中间件
const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    "App",
);
// 生成reduxify导航组件
const App = createReduxContainer(AppNavigator, "App");
const mapStateToProps = (state) => ({
    state: state.nav,
});
//创建数据商店
export const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);
export const AppWithNavigationState = connect(mapStateToProps)(App);
