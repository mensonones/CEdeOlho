import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const Routes = createSwitchNavigator({
  Main
});

export default createAppContainer(Routes);
