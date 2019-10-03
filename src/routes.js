import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const MainStack = createStackNavigator({
  Home: Main
})

const Routes = createSwitchNavigator({
  MainStack
});

export default createAppContainer(Routes);
