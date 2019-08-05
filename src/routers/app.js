import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as pages from './index';

const AppNav = createStackNavigator(
  {
    Root: {screen: pages.Root},
    Home: {screen: pages.Home}
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNav);
