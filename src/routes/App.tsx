import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const AppStack = createStackNavigator();

const AppRouter: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#333333',
      },
    }}
  >
    <AppStack.Screen name="Survey App" component={Home} />
  </AppStack.Navigator>
);

export default AppRouter;
