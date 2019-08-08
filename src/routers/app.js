import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as pages from './index';

const AppNav = createStackNavigator(
  {
    Root: {screen: pages.Root},
    Home: {screen: pages.Home},
    PickIndex: {screen: pages.PickIndex},
    SettingIndex: {screen: pages.SettingIndex},
    TaskIndex: {screen: pages.TaskIndex}
  },
  {
    initialRouteName: "TaskIndex"
  }
);

export default createAppContainer(AppNav);
